import LegalLayout from "@/components/LegalLayout";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">
      {title}
    </h2>
    <div className="space-y-3">{children}</div>
  </div>
);

const Privacy = () => {
  return (
    <LegalLayout title="Privacy Policy" updated="Last updated · April 2026">
      <p>
        Rebild Studio ("Rebild", "we", "us", or "our") respects your privacy and is
        committed to protecting the personal information you share with us. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website or engage our services.
      </p>

      <Section title="1. Information We Collect">
        <p>We collect information you voluntarily provide when you contact us, request a quote, or engage our services, including your name, email address, phone number, company name, and project details.</p>
        <p>We also automatically collect non-personal information such as browser type, device, IP address, pages visited, and time spent on the site through cookies and analytics tools.</p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use the information collected to respond to enquiries, deliver our services, send proposals and invoices, improve our website, comply with legal obligations, and — only with your consent — share occasional updates about our work.</p>
      </Section>

      <Section title="3. Sharing of Information">
        <p>We do not sell your personal information. We may share data with trusted third-party service providers (e.g. hosting, analytics, payment processors) strictly to operate our business, or when required by law.</p>
      </Section>

      <Section title="4. Data Security">
        <p>We use industry-standard safeguards to protect your information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
      </Section>

      <Section title="5. Your Rights">
        <p>You may request access, correction, or deletion of your personal data, or withdraw consent for marketing communication at any time by writing to <a href="mailto:hello@rebild.in" className="text-primary hover:underline">hello@rebild.in</a>.</p>
      </Section>

      <Section title="6. Cookies">
        <p>Our site uses cookies to enhance user experience and gather analytics. You can disable cookies in your browser settings, but some site features may not function correctly.</p>
      </Section>

      <Section title="7. Third-Party Links">
        <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those websites.</p>
      </Section>

      <Section title="8. Updates to This Policy">
        <p>We may update this Privacy Policy from time to time. The latest version will always be available on this page with the revised date.</p>
      </Section>

      <Section title="9. Contact Us">
        <p>For privacy-related questions, contact us at <a href="mailto:hello@rebild.in" className="text-primary hover:underline">hello@rebild.in</a>.</p>
      </Section>
    </LegalLayout>
  );
};

export default Privacy;
