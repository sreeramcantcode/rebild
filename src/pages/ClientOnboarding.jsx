// ClientOnboarding.jsx
// Drop this into your Next.js / React Router project at the route: /client-onboarding
// Requires: import './ClientOnboarding.css' (or paste the CSS into your global stylesheet)
// Requires: emailjs-com  →  npm install emailjs-com
// In your layout / _document add the Google Fonts links from index.html

import { useState, useEffect, useRef, useCallback } from "react";
import emailjs from "emailjs-com";

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_92c5a48e-8623-473f-a5a1-8db9258d7044/artifacts/2ssxz91z_image.png";

const EMAILJS_SERVICE_ID = "service_z7dnxnm";
const EMAILJS_TEMPLATE_ID = "template_kt0nozk";
const EMAILJS_PUBLIC_KEY = "uUZDgbrNUGkpKoC8D";
const N8N_WEBHOOK_URL = "https://rebulid.app.n8n.cloud/webhook/client-brief";


const SERVICES = [
  {
    id: "Videography",
    title: "Videography",
    description: "Cinematic films, content shoots, brand reels.",
    image:
      "https://images.unsplash.com/photo-1619473667509-e1ae7f940812?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBjaW5lbWElMjBjYW1lcmElMjBzdHVkaW8lMjBkYXJrfGVufDB8fHx8MTc3NzUzMTM5Nnww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "Photography",
    title: "Photography",
    description: "Brand, product, lifestyle and editorial shoots.",
    image:
      "https://images.unsplash.com/photo-1768818653161-0ad28dede131?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW8lMjBkYXJrfGVufDB8fHx8MTc3NzUzMTM5MXww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "Meta Ads",
    title: "Meta Ads",
    description: "Paid Facebook & Instagram performance campaigns.",
    image:
      "https://images.unsplash.com/photo-1764258559965-6de87677a260?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZSUyMGRpZ2l0YWwlMjBhYnN0cmFjdCUyMGxpbmVzfGVufDB8fHx8MTc3NzUzMTM5Nnww&ixlib=rb-4.1.0&q=85",
  },
];

const STEPS = ["Services", "Company", "Brand & Audience", "Goals & Budget", "Assets"];

const GOAL_OPTIONS = [
  "Lead generation",
  "Online sales",
  "Brand awareness",
  "Website traffic",
  "App installs",
  "Engagement / community",
  "Footfall to physical store",
];

const BUDGETS = [
  "Under INR 25,000 / month",
  "INR 25,000 - INR 75,000 / month",
  "INR 75,000 - INR 2,00,000 / month",
  "INR 2,00,000 - INR 5,00,000 / month",
  "INR 5,00,000+ / month",
  "Not sure - recommend something",
];

const initialData = {
  services: [],
  company_name: "",
  website: "",
  industry: "",
  contact_name: "",
  contact_role: "",
  email: "",
  phone: "",
  company_location: "",
  brand_description: "",
  brand_voice: "",
  usp: "",
  target_audience: "",
  target_locations: "",
  target_age_range: "",
  primary_goals: [],
  monthly_budget: "",
  start_date: "",
  campaign_duration: "",
  competitors: "",
  success_metrics: "",
  has_facebook_page: "",
  has_instagram: "",
  has_meta_business: "",
  previous_ads_experience: "",
  has_creative_assets: "",
  additional_notes: "",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function toggleArr(arr, value) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function Toast({ message }) {
  return (
    <div
      id="toast"
      className={`toast${message ? " show" : ""}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}

function FieldInput({ name, label, value, onChange, required, hint, placeholder, type = "text", textarea }) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label} {required && <b>*</b>}
      </label>
      {textarea ? (
        <textarea
          className="textarea"
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder || ""}
        />
      ) : (
        <input
          className="input"
          id={name}
          type={type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder || ""}
        />
      )}
      {hint && <small>{hint}</small>}
    </div>
  );
}

function Pill({ label, selected, onClick }) {
  return (
    <button
      className={`pill${selected ? " selected" : ""}`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// ─── STEP VIEWS ───────────────────────────────────────────────────────────────

function Step0({ data, update }) {
  function toggleService(id) {
    update("services", toggleArr(data.services, id));
  }

  return (
    <>
      <p className="intro-text">
        Choose the services you're interested in. Pick one or more. We'll tailor the rest of this
        brief based on what you select.
      </p>
      <div className="service-grid">
        {SERVICES.map((service) => {
          const selected = data.services.includes(service.id);
          return (
            <button
              key={service.id}
              className={`service-card${selected ? " selected" : ""}`}
              type="button"
              onClick={() => toggleService(service.id)}
            >
              <img src={service.image} alt="" />
              <span className="service-kicker">Service</span>
              <span className="check-box">{selected ? "✓" : ""}</span>
              <span className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </span>
              {selected && <span className="selected-line" />}
            </button>
          );
        })}
      </div>
      {data.services.length > 0 && (
        <p className="selected-summary">
          {data.services.length} selected · {data.services.join(" · ")}
        </p>
      )}
    </>
  );
}

function Step1({ data, update }) {
  return (
    <div className="field-grid">
      <FieldInput name="company_name" label="Company / Brand name" value={data.company_name} onChange={update} required placeholder="Acme Studios" />
      <FieldInput name="website" label="Website" value={data.website} onChange={update} placeholder="https://" />
      <FieldInput name="industry" label="Industry / category" value={data.industry} onChange={update} required placeholder="e.g. D2C skincare, real estate, F&B" />
      <FieldInput name="company_location" label="Headquarters / city" value={data.company_location} onChange={update} placeholder="Mumbai, India" />
      <FieldInput name="contact_name" label="Your name" value={data.contact_name} onChange={update} required placeholder="Full name" />
      <FieldInput name="contact_role" label="Role / designation" value={data.contact_role} onChange={update} placeholder="Founder, Marketing Lead, etc." />
      <FieldInput name="email" label="Email" value={data.email} onChange={update} required type="email" placeholder="you@brand.com" />
      <FieldInput name="phone" label="Phone / WhatsApp" value={data.phone} onChange={update} required placeholder="+91 ..." />
    </div>
  );
}

function Step2({ data, update }) {
  return (
    <div className="stack">
      <FieldInput name="brand_description" label="Tell us about your brand" value={data.brand_description} onChange={update} textarea hint="What you sell, who you sell to, and why you exist." placeholder="A short paragraph describing your brand, products and positioning..." />
      <div className="field-grid">
        <FieldInput name="brand_voice" label="Brand voice / tone" value={data.brand_voice} onChange={update} placeholder="Bold, witty, premium, minimal..." />
        <FieldInput name="usp" label="What makes you different?" value={data.usp} onChange={update} placeholder="Your unique selling point in one line." />
      </div>
      <FieldInput name="target_audience" label="Who is your ideal customer?" value={data.target_audience} onChange={update} textarea placeholder="Describe your target audience - age, gender, lifestyle, interests, pain points." />
      <div className="field-grid">
        <FieldInput name="target_locations" label="Target locations" value={data.target_locations} onChange={update} required placeholder="Cities / regions / countries" />
        <FieldInput name="target_age_range" label="Target age range" value={data.target_age_range} onChange={update} required placeholder="e.g. 22 - 38" />
      </div>
    </div>
  );
}

function MetaBox({ data, update }) {
  function setField(name, value) {
    update(name, value);
  }

  return (
    <div className="meta-box stack">
      <span className="eyebrow">Meta Ads · Quick check</span>
      <div className="field-grid">
        <div className="field">
          <label>Active Facebook page?</label>
          <div className="pill-group">
            {["Yes", "No"].map((v) => (
              <Pill key={v} label={v} selected={data.has_facebook_page === v} onClick={() => setField("has_facebook_page", v)} />
            ))}
          </div>
        </div>
        <div className="field">
          <label>Active Instagram?</label>
          <div className="pill-group">
            {["Yes", "No"].map((v) => (
              <Pill key={v} label={v} selected={data.has_instagram === v} onClick={() => setField("has_instagram", v)} />
            ))}
          </div>
        </div>
        <div className="field">
          <label>Meta Business Manager set up?</label>
          <div className="pill-group">
            {["Yes", "No", "Not sure"].map((v) => (
              <Pill key={v} label={v} selected={data.has_meta_business === v} onClick={() => setField("has_meta_business", v)} />
            ))}
          </div>
        </div>
        <div className="field">
          <label>Existing creative assets?</label>
          <div className="pill-group">
            {["Yes", "Some", "No"].map((v) => (
              <Pill key={v} label={v} selected={data.has_creative_assets === v} onClick={() => setField("has_creative_assets", v)} />
            ))}
          </div>
        </div>
      </div>
      <FieldInput name="previous_ads_experience" label="Previous Meta Ads experience" value={data.previous_ads_experience} onChange={update} textarea placeholder="What's worked, what hasn't, past spend, past results..." />
    </div>
  );
}

function Step3({ data, update }) {
  const hasMeta = data.services.includes("Meta Ads");

  return (
    <div className="stack">
      <div className="field">
        <label>Primary goals <b>*</b></label>
        <small>Select all that apply.</small>
        <div className="pill-group">
          {GOAL_OPTIONS.map((goal) => (
            <Pill key={goal} label={goal} selected={data.primary_goals.includes(goal)} onClick={() => update("primary_goals", toggleArr(data.primary_goals, goal))} />
          ))}
        </div>
      </div>
      <div className="field">
        <label>Monthly marketing budget <b>*</b></label>
        <small>Approximate monthly spend you're comfortable with.</small>
        <div className="pill-group">
          {BUDGETS.map((budget) => (
            <Pill key={budget} label={budget} selected={data.monthly_budget === budget} onClick={() => update("monthly_budget", budget)} />
          ))}
        </div>
      </div>
      <div className="field-grid">
        <FieldInput name="start_date" label="When would you like to start?" value={data.start_date} onChange={update} type="date" />
        <FieldInput name="campaign_duration" label="Engagement length" value={data.campaign_duration} onChange={update} required placeholder="One-off, 3 months, ongoing retainer..." />
      </div>
      <FieldInput name="competitors" label="Top 2-3 competitors" value={data.competitors} onChange={update} hint="Brands we should benchmark or beat." placeholder="@brand1, @brand2, brand3.com" />
      <FieldInput name="success_metrics" label="What does success look like?" value={data.success_metrics} onChange={update} textarea hint="The KPIs that matter to you - ROAS, CPL, followers, sales, etc." placeholder="e.g. CPL under INR 150, 3x ROAS in 90 days, 10K qualified leads..." />
      {hasMeta && <MetaBox data={data} update={update} />}
    </div>
  );
}

function Step4({ data, update, files, onAddFiles, onRemoveFile }) {
  const uploadZoneRef = useRef(null);
  const fileInputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    onAddFiles(e.dataTransfer.files);
  }

  function handleChange(e) {
    onAddFiles(e.target.files);
    e.target.value = "";
  }

  return (
    <div className="stack">
      <div className="field">
        <label>Upload brand assets</label>
        <small>Logo, brand guidelines, product photos, mood references, past work - anything that helps us understand the brand.</small>
        <div
          ref={uploadZoneRef}
          className={`upload-zone${dragging ? " dragging" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <div>
            <div className="upload-icon">⇧</div>
            <h3>Drop your brand assets here</h3>
            <p>Logo, brand guidelines, references, photos or videos · Max 50MB each</p>
            <strong>Click to browse</strong>
          </div>
          <input
            ref={fileInputRef}
            className="file-input"
            type="file"
            multiple
            onChange={handleChange}
          />
        </div>
        {files.length > 0 && (
          <ul className="file-list">
            {files.map((file, index) => (
              <li key={index}>
                <div>
                  <div className="file-name">{file.name}</div>
                  <div className="file-size">{formatSize(file.size)}</div>
                </div>
                <button
                  className="remove-file"
                  type="button"
                  onClick={() => onRemoveFile(index)}
                  aria-label={`Remove ${file.name}`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <FieldInput name="additional_notes" label="Anything else we should know?" value={data.additional_notes} onChange={update} textarea placeholder="Constraints, do's & don'ts, internal team, references you love..." />
      <div className="summary-box">
        <span className="eyebrow">Quick summary</span>
        <dl className="summary-grid">
          <div><dt>Services</dt><dd>{data.services.join(", ") || "-"}</dd></div>
          <div><dt>Company</dt><dd>{data.company_name || "-"}</dd></div>
          <div><dt>Contact</dt><dd>{`${data.contact_name || "-"} · ${data.email || "-"}`}</dd></div>
          <div><dt>Budget</dt><dd>{data.monthly_budget || "-"}</dd></div>
          <div><dt>Files attached</dt><dd>{files.length}</dd></div>
        </dl>
      </div>
    </div>
  );
}

// ─── FLASH SCREEN ─────────────────────────────────────────────────────────────

function FlashScreen({ active }) {
  return (
    <section className={`flash-panel${active ? " active" : ""}`} id="flashSubmitted">
      <div className="flash-check">
        <svg viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="24" stroke="rgba(255,107,0,0.2)" strokeWidth="2" />
          <circle
            cx="26" cy="26" r="24"
            stroke="#FF6B00" strokeWidth="2"
            strokeDasharray="150.8" strokeDashoffset={active ? "0" : "150.8"}
            className="flash-ring"
            style={{ transition: active ? "stroke-dashoffset 1s ease" : "none" }}
          />
          <polyline
            points="14,26 22,34 38,18"
            stroke="#FF6B00" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="36" strokeDashoffset={active ? "0" : "36"}
            className="flash-tick"
            style={{ transition: active ? "stroke-dashoffset 0.6s ease 0.9s" : "none" }}
          />
        </svg>
      </div>
      <div className="flash-text">Form submitted</div>
      <div className="flash-sub">Hang tight, loading your confirmation…</div>
    </section>
  );
}

// ─── THANK YOU VIEW ───────────────────────────────────────────────────────────

function ThankYouView({ onReset }) {
  return (
    <section className="thank-you">
      <span className="eyebrow">Submission received</span>
      <h2>Thank you<span>.</span></h2>
      <p>
        Your brief is in. The Rebild team will review every detail you shared and come back to you
        within <strong>24-48 hours</strong> with a custom proposal, scope and a few sharp questions of our own.
      </p>
      <div className="timeline-grid">
        <article><span>01</span><h3>Brief reviewed</h3><p>Same day</p></article>
        <article><span>02</span><h3>Strategy call</h3><p>Within 48 hours</p></article>
        <article><span>03</span><h3>Proposal sent</h3><p>Within 5 days</p></article>
      </div>
      <button className="button button-primary" type="button" onClick={onReset} style={{ marginTop: "42px" }}>
        Start another brief
      </button>
    </section>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function ClientOnboarding() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ ...initialData });
  const [files, setFiles] = useState([]);
  const [view, setView] = useState("form"); // "form" | "flash" | "thankyou"
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);
  const stepContentRef = useRef(null);

  // body loaded class
  useEffect(() => {
    document.body.classList.add("loaded");
    emailjs.init(EMAILJS_PUBLIC_KEY);
    return () => document.body.classList.remove("loaded");
  }, []);

  // step animation
  useEffect(() => {
    const el = stepContentRef.current;
    if (!el) return;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  }, [step]);

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  }

  function updateField(name, value) {
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function addFiles(fileList) {
    const newFiles = [...fileList].filter((file) => {
      if (file.size > 50 * 1024 * 1024) {
        showToast(`${file.name} is over 50MB and was skipped.`);
        return false;
      }
      return true;
    }).map((file) => ({ name: file.name, size: file.size, type: file.type || "application/octet-stream" }));
    setFiles((prev) => [...prev, ...newFiles]);
  }

  function removeFile(index) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function canContinue(targetStep = step) {
    if (targetStep === 0) {
      if (!data.services.length) { showToast("Pick at least one service."); return false; }
      return true;
    }
    if (targetStep === 1) {
      if (!data.company_name.trim()) { showToast("Company name is required."); return false; }
      if (!data.industry.trim()) { showToast("Industry is required."); return false; }
      if (!data.contact_name.trim()) { showToast("Your name is required."); return false; }
      if (!data.phone.trim()) { showToast("Phone number is required."); return false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { showToast("Enter a valid email."); return false; }
      return true;
    }
    if (targetStep === 2) {
      if (!data.target_locations.trim()) { showToast("Target location is required."); return false; }
      if (!data.target_age_range.trim()) { showToast("Target age range is required."); return false; }
      return true;
    }
    if (targetStep === 3) {
      if (!data.primary_goals.length) { showToast("Select at least one goal."); return false; }
      if (!data.monthly_budget) { showToast("Select a monthly budget."); return false; }
      if (!data.campaign_duration.trim()) { showToast("Engagement length is required."); return false; }
      if (data.services.includes("Meta Ads")) {
        if (!data.has_facebook_page) { showToast("Meta Ads: Facebook page status required."); return false; }
        if (!data.has_instagram) { showToast("Meta Ads: Instagram status required."); return false; }
        if (!data.has_meta_business) { showToast("Meta Ads: Business Manager status required."); return false; }
        if (!data.has_creative_assets) { showToast("Meta Ads: Creative assets info required."); return false; }
      }
      return true;
    }
    return true;
  }

  function goNext() {
    if (!canContinue()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToStep(target) {
    if (target > step && !canContinue()) return;
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!data.services.length) { showToast("Please select at least one service."); return; }
    if (!data.company_name.trim() || !data.contact_name.trim() || !data.email.trim()) {
      showToast("Please complete the company and contact step."); return;
    }

    const templateParams = {
      company: data.company_name,
      industry: data.industry,
      website: data.website,
      company_location: data.company_location,
      name: data.contact_name,
      email: data.email,
      phone: data.phone,
      contact_role: data.contact_role,
      services: data.services.join(", "),
      goals: data.primary_goals.join(", "),
      budget: data.monthly_budget,
      brand_description: data.brand_description,
      usp: data.usp,
      brand_voice: data.brand_voice,
      target_audience: data.target_audience,
      target_locations: data.target_locations,
      target_age_range: data.target_age_range,
      start_date: data.start_date,
      campaign_duration: data.campaign_duration,
      competitors: data.competitors,
      success_metrics: data.success_metrics,
      notes: data.additional_notes,
    };

   try {

  const response = await fetch(N8N_WEBHOOK_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

console.log("Webhook Status:", response.status);
console.log("Webhook Response:", await response.text());

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams
  );

  setView("flash");
  setTimeout(() => setView("thankyou"), 2000);

} catch (err) {
  console.error(err);
  showToast("Failed to send. Try again.");
}

  function resetForm() {
    setStep(0);
    setData({ ...initialData });
    setFiles([]);
    setView("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const stepComponents = [
    <Step0 key={0} data={data} update={updateField} />,
    <Step1 key={1} data={data} update={updateField} />,
    <Step2 key={2} data={data} update={updateField} />,
    <Step3 key={3} data={data} update={updateField} />,
    <Step4 key={4} data={data} update={updateField} files={files} onAddFiles={addFiles} onRemoveFile={removeFile} />,
  ];

  return (
    <>
      <Toast message={toast} />

      <div className="app-shell">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div>
            <button className="brand-link" type="button" onClick={resetForm} aria-label="Go to form">
              <img src={LOGO_URL} alt="Rebild" className="brand-logo" />
            </button>
            <div className="brand-copy">
              <span className="eyebrow">Client Brief</span>
              <h1>
                Let's build<br />something<br />worth seeing<span>.</span>
              </h1>
              <p>
                A short, focused brief so we can come back with a sharp proposal, tailored scope
                and the right team for your brand.
              </p>
            </div>
          </div>

          <nav className="step-nav" aria-label="Form steps">
            {STEPS.map((label, index) => (
              <button
                key={index}
                className={`step-nav-item${step === index ? " active" : ""}${step > index ? " done" : ""}`}
                type="button"
                onClick={() => view === "form" && goToStep(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
              </button>
            ))}
          </nav>
        </aside>

        {/* ── MAIN PANEL ── */}
        <main className="main-panel">
          {/* FLASH */}
          <FlashScreen active={view === "flash"} />

          {/* THANK YOU */}
          {view === "thankyou" && <ThankYouView onReset={resetForm} />}

          {/* FORM */}
          {view === "form" && (
            <section id="formView">
              <header className="form-header">
                <div>
                  <span className="eyebrow">
                    Step {String(step + 1).padStart(2, "0")} / 05
                  </span>
                  <h2>{STEPS[step]}</h2>
                </div>
                <div className="progress-bars" aria-hidden="true">
                  {STEPS.map((_, i) => (
                    <span key={i} className={i <= step ? "active" : ""} />
                  ))}
                </div>
              </header>

              <form onSubmit={handleSubmit} noValidate>
                <div ref={stepContentRef} className="step-content">
                  {stepComponents[step]}
                </div>

                <footer className="form-actions">
                  <button
                    className="button button-ghost"
                    type="button"
                    onClick={goBack}
                    disabled={step === 0}
                  >
                    <span aria-hidden="true">←</span> Back
                  </button>

                  {step < STEPS.length - 1 ? (
                    <button className="button button-primary" type="button" onClick={goNext}>
                      Continue <span aria-hidden="true">→</span>
                    </button>
                  ) : (
                    <button className="button button-primary" type="submit">
                      Send Brief <span aria-hidden="true">→</span>
                    </button>
                  )}
                </footer>
              </form>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
