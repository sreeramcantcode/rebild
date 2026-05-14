"use client";

// ClientOnboarding.tsx
// All styles are Tailwind utility classes — no external CSS file needed.
// Requires: emailjs-com  →  npm install emailjs-com
// Add Google Fonts to your layout/root:
//   IBM Plex Sans, JetBrains Mono, Cabinet Grotesk (fontshare)
// tailwind.config: extend fontFamily with "mono": ["JetBrains Mono", "monospace"]
//                                        "display": ["Cabinet Grotesk", "IBM Plex Sans", "sans-serif"]
// For the step-content enter animation and progress-bar fill, add to tailwind.config:
//   animation: { enter: "enter 380ms ease both", "bar-fill": "barFill 2s ease forwards" }
//   keyframes: { enter: { from: { opacity:"0", transform:"translateY(14px)" }, to: { opacity:"1", transform:"translateY(0)" } },
//                barFill: { from: { transform:"scaleX(0)" }, to: { transform:"scaleX(1)" } } }

import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_92c5a48e-8623-473f-a5a1-8db9258d7044/artifacts/2ssxz91z_image.png";

const EMAILJS_SERVICE_ID = "service_z7dnxnm";
const EMAILJS_TEMPLATE_ID = "template_kt0nozk";
const EMAILJS_PUBLIC_KEY = "uUZDgbrNUGkpKoC8D";

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
  "Others"
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
  services: [] as string[],
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
  primary_goals: [] as string[],
  monthly_budget: "",
  start_date: "",
  campaign_duration: "",
  competitors: "",
  success_metrics: "",
  creative_requirements: "",
  has_facebook_page: "",
  has_instagram: "",
  has_meta_business: "",
  previous_ads_experience: "",
  has_creative_assets: "",
  additional_notes: "",
  
  primary_goals_other: "",
};

type FormData = typeof initialData;
type FileEntry = { name: string; size: number; type: string };

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function toggleArr(arr: string[], value: string): string[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

// ─── SHARED STYLE TOKENS ─────────────────────────────────────────────────────
// Centralised so changes propagate everywhere

const C = {
  // colours
  orange: "#f37021",
  black: "#0a0a0a",
  border: "#262626",
  surface: "#0a0a0a",
  textMuted: "#525252",
  textSecondary: "#a3a3a3",

  // tailwind shorthand classes reused many times
  eyebrow:
    "inline-block text-[#f37021] font-mono text-[10px] font-semibold tracking-[0.3em] uppercase",
  inputBase:
    "w-full border border-[#262626] rounded-none bg-[#0a0a0a] text-white px-4 py-[14px] text-[15px] transition-colors duration-180 focus:border-[#f37021] focus:outline-none placeholder:text-[#525252]",
  fieldLabel:
    "flex items-center gap-2 text-[#a3a3a3] font-mono text-[10px] tracking-[0.22em] uppercase",
  pill: "border border-[#262626] bg-transparent text-white px-[15px] py-[10px] text-sm transition-all duration-180 hover:border-[#525252] cursor-pointer",
  pillSelected: "border-[#f37021] !bg-[#f37021] !text-black",
  button:
    "inline-flex min-h-[46px] items-center justify-center gap-[9px] border px-5 py-3 font-mono text-xs tracking-[0.16em] uppercase transition-all duration-180",
  buttonPrimary: "border-[#f37021] bg-[#f37021] text-black hover:border-white hover:bg-white",
  buttonGhost:
    "border-[#262626] bg-transparent text-white hover:border-[#f37021] hover:text-white disabled:text-[#525252] disabled:opacity-70 disabled:cursor-not-allowed",
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-[22px] right-[22px] z-10 max-w-[360px] border border-[#262626] bg-[#0a0a0a] text-white px-4 py-[14px] pointer-events-none transition-all duration-180 ${
        message ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
      }`}
    >
      {message}
    </div>
  );
}

type FieldInputProps = {
  name: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
  hint?: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
};

function FieldInput({
  name,
  label,
  value,
  onChange,
  required,
  hint,
  placeholder,
  type = "text",
  textarea,
}: FieldInputProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className={C.fieldLabel}>
        {label} {required && <b className="text-[#f37021]">*</b>}
      </label>
      {textarea ? (
        <textarea
          className={`${C.inputBase} min-h-[112px] resize-y`}
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder || ""}
        />
      ) : (
        <input
          className={C.inputBase}
          id={name}
          type={type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder || ""}
        />
      )}
      {hint && <small className="text-[#525252] text-xs">{hint}</small>}
    </div>
  );
}

function Pill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${C.pill} ${selected ? C.pillSelected : ""}`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// ─── STEP VIEWS ───────────────────────────────────────────────────────────────

function Step0({ data, update }: { data: FormData; update: (n: string, v: string | string[]) => void }) {
  return (
    <>
      <p className="max-w-[620px] mb-8 text-[#a3a3a3]">
        Choose the services you're interested in. Pick one or more. We'll tailor the rest of this
        brief based on what you select.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SERVICES.map((service) => {
          const selected = data.services.includes(service.id);
          return (
            <button
              key={service.id}
              className={`relative min-h-[250px] overflow-hidden border text-left transition-colors duration-200 ${
                selected ? "border-[#f37021]" : "border-[#262626] hover:border-[#525252]"
              }`}
              type="button"
              onClick={() => update("services", toggleArr(data.services, service.id))}
            >
              {/* bg image */}
              <img
                src={service.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* overlay */}
              <span
                className={`absolute inset-0 transition-colors duration-200 ${
                  selected ? "bg-black/40" : "bg-black/66"
                }`}
              />
              {/* kicker */}
              <span className="absolute z-10 top-4 left-4 text-white/70 font-mono text-[10px] tracking-[0.2em] uppercase">
                Service
              </span>
              {/* checkbox */}
              <span
                className={`absolute z-10 top-4 right-4 grid w-6 h-6 place-items-center border text-black text-xs ${
                  selected
                    ? "border-[#f37021] bg-[#f37021]"
                    : "border-white/45"
                }`}
              >
                {selected ? "✓" : ""}
              </span>
              {/* content */}
              <span className="absolute z-10 right-5 bottom-5 left-5">
                <h3 className="m-0 font-display text-[28px] font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-white/72 text-sm">{service.description}</p>
              </span>
              {/* selected bottom line */}
              {selected && (
                <span className="absolute z-10 bottom-0 left-0 right-0 h-0.5 bg-[#f37021]" />
              )}
            </button>
          );
        })}
      </div>
      {data.services.length > 0 && (
        <p className="mt-6 text-[#f37021] font-mono text-[11px] tracking-[0.24em] uppercase">
          {data.services.length} selected · {data.services.join(" · ")}
        </p>
      )}
    </>
  );
}

function Step1({ data, update }: { data: FormData; update: (n: string, v: string | string[]) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

function Step2({ data, update }: { data: FormData; update: (n: string, v: string | string[]) => void }) {
  return (
    <div className="grid gap-6">
      <FieldInput name="brand_description" label="Tell us about your brand" value={data.brand_description} onChange={update} textarea hint="What you sell, who you sell to, and why you exist." placeholder="A short paragraph describing your brand, products and positioning..." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FieldInput name="brand_voice" label="Brand voice / tone" value={data.brand_voice} onChange={update} placeholder="Bold, witty, premium, minimal..." />
        <FieldInput name="usp" label="What makes you different?" value={data.usp} onChange={update} placeholder="Your unique selling point in one line." />
      </div>
      <FieldInput name="target_audience" label="Who is your ideal customer?" value={data.target_audience} onChange={update} textarea placeholder="Describe your target audience - age, gender, lifestyle, interests, pain points." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FieldInput name="target_locations" label="Target locations" value={data.target_locations} onChange={update} required placeholder="Cities / regions / countries" />
        <FieldInput name="target_age_range" label="Target age range" value={data.target_age_range} onChange={update} required placeholder="e.g. 22 - 38" />
      </div>
    </div>
  );
}

function MetaBox({ data, update }: { data: FormData; update: (n: string, v: string | string[]) => void }) {
  return (
    <div className="border border-[#262626] p-6 grid gap-6">
      <span className={C.eyebrow}>Meta Ads · Quick check</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { field: "has_facebook_page", label: "Active Facebook page?", opts: ["Yes", "No"] },
          { field: "has_instagram", label: "Active Instagram?", opts: ["Yes", "No"] },
          { field: "has_meta_business", label: "Meta Business Manager set up?", opts: ["Yes", "No", "Not sure"] },
          { field: "has_creative_assets", label: "Existing creative assets?", opts: ["Yes", "Some", "No"] },
        ].map(({ field, label, opts }) => (
          <div key={field} className="grid gap-2">
            <label className={C.fieldLabel}>{label}</label>
            <div className="flex flex-wrap gap-2">
              {opts.map((v) => (
                <Pill
                  key={v}
                  label={v}
                  selected={(data[field as keyof FormData] as string) === v}
                  onClick={() => update(field, v)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <FieldInput name="previous_ads_experience" label="Previous Meta Ads experience" value={data.previous_ads_experience} onChange={update} textarea placeholder="What's worked, what hasn't, past spend, past results..." />
    </div>
  );
}

function Step3({ data, update }: { data: FormData; update: (n: string, v: string | string[]) => void }) {
  const hasMeta = data.services.includes("Meta Ads");
  const othersSelected = data.primary_goals.includes("Others");
  
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <label className={C.fieldLabel}>Primary goals <b className="text-[#f37021]">*</b></label>
        <small className="text-[#525252] text-xs">Select all that apply.</small>
        <div className="flex flex-wrap gap-2 mt-1">
          {GOAL_OPTIONS.map((goal) => (
            <Pill
              key={goal}
              label={goal}
              selected={data.primary_goals.includes(goal)}
              onClick={() => {
                update("primary_goals", toggleArr(data.primary_goals, goal));
                // clear the custom text if deselecting Others
                if (goal === "Others" && othersSelected) {
                  update("primary_goals_other", "");
                }
              }}
            />
          ))}
        </div>
        {othersSelected && (
          <input
            className={C.inputBase}
            placeholder="Type your requirement"
            value={data.primary_goals_other}
            onChange={(e) => update("primary_goals_other", e.target.value)}
          />
        )}
      </div>
      <div className="grid gap-2">
        <label className={C.fieldLabel}>Monthly marketing budget <b className="text-[#f37021]">*</b></label>
        <small className="text-[#525252] text-xs">Approximate monthly spend you're comfortable with.</small>
        <div className="flex flex-wrap gap-2 mt-1">
          {BUDGETS.map((budget) => (
            <Pill key={budget} label={budget} selected={data.monthly_budget === budget} onClick={() => update("monthly_budget", budget)} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FieldInput name="start_date" label="When would you like to start?" value={data.start_date} onChange={update} type="date" />
        <FieldInput name="campaign_duration" label="Engagement length" value={data.campaign_duration} onChange={update} required placeholder="One-off, 3 months, ongoing retainer..." />
      </div>
      <FieldInput name="competitors" label="Top 2-3 competitors" value={data.competitors} onChange={update} hint="Brands we should benchmark or beat." placeholder="@brand1, @brand2, brand3.com" />
      <FieldInput name="success_metrics" label="What does success look like?" value={data.success_metrics} onChange={update} textarea hint="The KPIs that matter to you - ROAS, CPL, followers, sales, etc." placeholder="e.g. CPL under INR 150, 3x ROAS in 90 days, 10K qualified leads..." />
      {hasMeta && <MetaBox data={data} update={update} />}
      <FieldInput
  name="creative_requirements"
  label="Creative Requirements — In Detail"
  value={data.creative_requirements}
  onChange={update}
  required
  textarea
  placeholder="Please describe everything in detail — faces or no faces, months, seasons, festivals, languages, regions, product focus, tone, mood, formats, colours, references, things to avoid, and anything else we discussed on the call. Whatever you mention here is what we will plan and execute. Nothing should be left out — these details will be treated as final. If it was discussed, it goes here."
  hint="This is your single source of truth. We plan everything based on what you write here — so be as detailed as possible. If it was discussed on the call, it must be mentioned here."
/>
    </div>
  );
}

function Step4({
  data,
  update,
  files,
  onAddFiles,
  onRemoveFile,
}: {
  data: FormData;
  update: (n: string, v: string | string[]) => void;
  files: FileEntry[];
  onAddFiles: (fl: FileList) => void;
  onRemoveFile: (i: number) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) onAddFiles(e.dataTransfer.files);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) onAddFiles(e.target.files);
    e.target.value = "";
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <label className={C.fieldLabel}>Upload brand assets</label>
        <small className="text-[#525252] text-xs">
          Logo, brand guidelines, product photos, mood references, past work - anything that helps us understand the brand.
        </small>
        <div
          className={`grid place-items-center min-h-[220px] border border-dashed px-6 py-10 text-center cursor-pointer transition-colors duration-180 ${
            dragging
              ? "border-[#f37021] bg-[#f37021]/5"
              : "border-[#262626] hover:border-[#f37021] hover:bg-[#f37021]/5"
          }`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <div>
            <div className="text-[#a3a3a3] text-[34px] leading-none">⇧</div>
            <h3 className="mt-3.5 mb-1 font-display text-[22px] font-medium text-white">
              Drop your brand assets here
            </h3>
            <p className="text-[#a3a3a3] text-sm">
              Logo, brand guidelines, references, photos or videos · Max 50MB each
            </p>
            <strong className="block mt-3 text-[#f37021] font-mono text-[10px] tracking-[0.2em] uppercase font-normal">
              Click to browse
            </strong>
          </div>
          <input ref={fileInputRef} className="hidden" type="file" multiple onChange={handleChange} />
        </div>

        {files.length > 0 && (
          <ul className="mt-4 p-0 list-none border border-[#262626]">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-4 border-b border-[#262626] px-3.5 py-3 last:border-b-0"
              >
                <div>
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap text-white text-sm">
                    {file.name}
                  </div>
                  <div className="text-[#525252] font-mono text-[10px] tracking-[0.18em] uppercase">
                    {formatSize(file.size)}
                  </div>
                </div>
                <button
                  className="border-0 bg-transparent text-[#a3a3a3] text-xl hover:text-[#f37021] cursor-pointer"
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

      {/* Summary box */}
      <div className="border border-[#262626] p-6">
        <span className={C.eyebrow}>Quick summary</span>
        <dl className="grid grid-cols-2 gap-4 mt-[18px] text-sm">
          {[
            ["Services", data.services.join(", ") || "-"],
            ["Company", data.company_name || "-"],
            ["Contact", `${data.contact_name || "-"} · ${data.email || "-"}`],
            ["Budget", data.monthly_budget || "-"],
            ["Files attached", String(files.length)],
          ].map(([label, val]) => (
            <div key={label}>
              <dt className="text-[#525252]">{label}</dt>
              <dd className="mt-0.5 text-white">{val}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

// ─── FLASH SCREEN ─────────────────────────────────────────────────────────────

function FlashScreen({ active }: { active: boolean }) {
  return (
    <section
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] transition-opacity duration-300 ${
        active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div>
        <svg viewBox="0 0 52 52" fill="none" className="w-20 h-20">
          <circle cx="26" cy="26" r="24" stroke="rgba(255,107,0,0.2)" strokeWidth="2" />
          <circle
            cx="26" cy="26" r="24"
            stroke="#FF6B00" strokeWidth="2"
            strokeDasharray="150.8"
            strokeDashoffset={active ? "0" : "150.8"}
            style={{ transition: active ? "stroke-dashoffset 1s ease" : "none" }}
          />
          <polyline
            points="14,26 22,34 38,18"
            stroke="#FF6B00" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="36"
            strokeDashoffset={active ? "0" : "36"}
            style={{ transition: active ? "stroke-dashoffset 0.6s ease 0.9s" : "none" }}
          />
        </svg>
      </div>
      <div className="mt-5 text-xl font-semibold text-white">Form submitted</div>
      <div className="mt-1.5 text-sm text-[#aaa]">Hang tight, loading your confirmation…</div>
    </section>
  );
}

// ─── THANK YOU VIEW ───────────────────────────────────────────────────────────

function ThankYouView({ onReset }: { onReset: () => void }) {
  return (
    <section className="max-w-[900px] pt-[90px] animate-[enter_380ms_ease_both]">
      <span className={C.eyebrow}>Submission received</span>
      <h2
        className="mt-[18px] font-display font-medium tracking-tight text-white"
        style={{ fontSize: "clamp(64px, 8vw, 92px)", lineHeight: 0.94 }}
      >
        Thank you<span className="text-[#f37021]">.</span>
      </h2>
      <p className="max-w-[720px] mt-[30px] text-[#a3a3a3] text-lg">
        Your brief is in. The Rebild team will review every detail you shared and come back to you
        within <strong className="text-white">24-48 hours</strong> with a custom proposal, scope and
        a few sharp questions of our own.
      </p>

      {/* Timeline */}
      <div
        className="grid mt-12 border border-[#262626] bg-[#262626]"
        style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1px" }}
      >
        {[
          { n: "01", title: "Brief reviewed", sub: "Same day" },
          { n: "02", title: "Strategy call", sub: "Within 48 hours" },
          { n: "03", title: "Proposal sent", sub: "Within 5 days" },
        ].map((item) => (
          <article key={item.n} className="bg-black px-6 py-7">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#f37021]">
              {item.n}
            </span>
            <h3 className="mt-3 font-display text-[22px] font-medium text-white">{item.title}</h3>
            <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#525252]">
              {item.sub}
            </p>
          </article>
        ))}
      </div>

      <button
        className={`${C.button} ${C.buttonPrimary} mt-[42px]`}
        type="button"
        onClick={onReset}
      >
        Start another brief
      </button>
    </section>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function ClientOnboarding() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({ ...initialData });
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [view, setView] = useState<"form" | "flash" | "thankyou">("form");
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepContentRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // fade-in on mount instead of body.loaded
    const el = rootRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    const raf = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    emailjs.init(EMAILJS_PUBLIC_KEY);
    return () => cancelAnimationFrame(raf);
  }, []);

  // step enter animation
  useEffect(() => {
    const el = stepContentRef.current;
    if (!el) return;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  }, [step]);

  function showToast(msg: string) {
    setToast(msg);
    clearTimeout(toastTimer.current ?? undefined);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  }

  function updateField(name: string, value: string | string[]) {
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function addFiles(fileList: FileList) {
    const newFiles = [...fileList]
      .filter((file) => {
        if (file.size > 50 * 1024 * 1024) {
          showToast(`${file.name} is over 50MB and was skipped.`);
          return false;
        }
        return true;
      })
      .map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type || "application/octet-stream",
      }));
    setFiles((prev) => [...prev, ...newFiles]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function canContinue(targetStep = step): boolean {
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

  function goToStep(target: number) {
    if (target > step && !canContinue()) return;
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
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
      goals: data.primary_goals
  .map((g) => (g === "Others" ? `Others: ${data.primary_goals_other}` : g))
  .join(", "),
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
      creative_requirements: data.creative_requirements,
      has_facebook_page: data.has_facebook_page,
  has_instagram: data.has_instagram,
  has_meta_business: data.has_meta_business,
  has_creative_assets: data.has_creative_assets,
  previous_ads_experience: data.previous_ads_experience,
      notes: data.additional_notes,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      setView("flash");
      setTimeout(() => setView("thankyou"), 2000);
    } catch (err) {
      console.error(err);
      showToast("Failed to send. Try again.");
    }
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
    <div ref={rootRef} className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Toast message={toast} />

      {/* ── APP SHELL ── */}
      <div className="grid max-w-[1280px] min-h-screen mx-auto [grid-template-columns:minmax(320px,34%)_1fr] max-[980px]:grid-template-columns-none max-[980px]:block">
        {/* ── SIDEBAR ── */}
        <aside className="sticky top-0 flex flex-col justify-between h-screen border-r border-[#262626] px-12 py-16 max-[980px]:static max-[980px]:h-auto max-[980px]:border-r-0 max-[980px]:border-b max-[980px]:px-6 max-[980px]:py-8">
          <div>
            <button
              className="inline-flex border-0 bg-transparent p-0 cursor-pointer"
              type="button"
              onClick={resetForm}
              aria-label="Go to form"
            >
              <img src={LOGO_URL} alt="Rebild" className="h-[120px] max-w-none" />
            </button>

            <div className="mt-12">
              <span className={C.eyebrow}>Client Brief</span>
              <h1
                className="mt-[18px] font-display font-medium tracking-tight text-white"
                style={{ fontSize: "clamp(42px, 5vw, 56px)", lineHeight: 0.95 }}
              >
                Let's build<br />something<br />worth seeing
                <span className="text-[#f37021]">.</span>
              </h1>
              <p className="max-w-[420px] mt-6 text-[#a3a3a3] text-[15px]">
                A short, focused brief so we can come back with a sharp proposal, tailored scope
                and the right team for your brand.
              </p>
            </div>
          </div>

          {/* Step nav */}
          <nav className="grid gap-1 mt-12 max-[980px]:hidden" aria-label="Form steps">
            {STEPS.map((label, index) => (
              <button
                key={index}
                className={`flex w-full items-center gap-4 border-0 border-l-2 bg-transparent px-4 py-3 text-left transition-all duration-180 cursor-pointer ${
                  step === index
                    ? "border-l-[#f37021] text-white"
                    : step > index
                    ? "border-l-[#525252] text-[#a3a3a3]"
                    : "border-l-[#262626] text-[#525252]"
                }`}
                type="button"
                onClick={() => view === "form" && goToStep(index)}
              >
                <span
                  className={`font-mono text-[10px] tracking-[0.18em] uppercase ${
                    step >= index ? "text-[#f37021]" : ""
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="font-normal">{label}</strong>
              </button>
            ))}
          </nav>
        </aside>

        {/* ── MAIN PANEL ── */}
        <main className="px-16 py-20 max-[980px]:px-6 max-[980px]:py-10">
          {/* Flash */}
          <FlashScreen active={view === "flash"} />

          {/* Thank you */}
          {view === "thankyou" && <ThankYouView onReset={resetForm} />}

          {/* Form */}
          {view === "form" && (
            <section>
              {/* Header */}
              <header className="flex items-end justify-between gap-7 mb-[54px] max-[720px]:block">
                <div>
                  <span className={C.eyebrow}>
                    Step {String(step + 1).padStart(2, "0")} / 05
                  </span>
                  <h2
                    className="mt-[18px] font-display font-medium tracking-tight text-white"
                    style={{ fontSize: "clamp(34px, 4vw, 48px)", lineHeight: 1 }}
                  >
                    {STEPS[step]}
                  </h2>
                </div>

                {/* Progress bars */}
                <div className="flex gap-2 max-[720px]:mt-6" aria-hidden="true">
                  {STEPS.map((_, i) => (
                    <span key={i} className="relative block w-8 h-0.5 bg-[#262626] overflow-hidden">
                      <span
                        className="absolute inset-0 bg-[#f37021] origin-left"
                        style={{
                          transform: i <= step ? "scaleX(1)" : "scaleX(0)",
                          transition: i <= step ? "transform 2s ease" : "none",
                        }}
                      />
                    </span>
                  ))}
                </div>
              </header>

              <form onSubmit={handleSubmit} noValidate>
                {/* Step content with enter animation */}
                <div
                  ref={stepContentRef}
                  className="min-h-[470px]"
                  style={{ animation: "enter 380ms ease both" }}
                >
                  {stepComponents[step]}
                </div>

                {/* Actions */}
                <footer className="flex items-center justify-between gap-[18px] mt-14 border-t border-[#262626] pt-8 max-[980px]:sticky max-[980px]:bottom-0 max-[980px]:bg-[#0a0a0a] max-[980px]:z-10 max-[980px]:mt-10 max-[980px]:py-5 max-[720px]:items-stretch">
                  <button
                    className={`${C.button} ${C.buttonGhost}`}
                    type="button"
                    onClick={goBack}
                    disabled={step === 0}
                  >
                    <span aria-hidden="true">←</span> Back
                  </button>

                  {step < STEPS.length - 1 ? (
                    <button className={`${C.button} ${C.buttonPrimary}`} type="button" onClick={goNext}>
                      Continue <span aria-hidden="true">→</span>
                    </button>
                  ) : (
                    <button className={`${C.button} ${C.buttonPrimary}`} type="submit">
                      Send Brief <span aria-hidden="true">→</span>
                    </button>
                  )}
                </footer>
              </form>
            </section>
          )}
        </main>
      </div>

      {/* Enter animation keyframe — injected once */}
      <style>{`
        @keyframes enter {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); }
      `}</style>
    </div>
  );
}
