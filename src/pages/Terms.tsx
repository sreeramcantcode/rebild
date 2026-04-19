import LegalLayout from "@/components/LegalLayout";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">
      {title}
    </h2>
    <div className="space-y-3">{children}</div>
  </div>
);

const Terms = () => {
  return (
    <LegalLayout title="Terms & Conditions" updated="Last updated · April 2026">
      <p>
        These Terms and Conditions ("Terms") govern your use of the Rebild Studio
        website and the creative, marketing, and production services we provide.
        By engaging Rebild, you agree to be bound by these Terms.
      </p>

      <Section title="1. Services">
        <p>Rebild offers digital marketing, graphic design, videography, photography, and related creative services. The specific scope, deliverables, timelines, and pricing for each engagement will be outlined in a separate proposal or statement of work.</p>
      </Section>

      <Section title="2. Engagement & Payment">
        <p>Projects commence upon written confirmation and receipt of the agreed advance payment (typically 50% of project value). Remaining balances are due upon delivery unless otherwise agreed in writing. Monthly retainers are billed in advance.</p>
        <p>All prices are exclusive of applicable taxes (GST). Late payments may attract interest and result in suspension of services.</p>
      </Section>

      <Section title="3. Revisions & Approvals">
        <p>Each deliverable includes the number of revision rounds specified in the proposal. Additional revisions will be billed at our standard rate. Client approvals must be provided in writing.</p>
      </Section>

      <Section title="4. Intellectual Property">
        <p>Upon full payment, ownership of final delivered creative assets transfers to the client for the agreed usage. Rebild retains the right to display the work in its portfolio, case studies, and marketing materials unless explicitly agreed otherwise.</p>
        <p>Background tools, source files, templates, and methodologies developed by Rebild remain our intellectual property.</p>
      </Section>

      <Section title="5. Confidentiality">
        <p>Both parties agree to keep confidential any non-public information shared during the engagement. This obligation survives termination of the engagement.</p>
      </Section>

      <Section title="6. Cancellation & Refunds">
        <p>Either party may terminate an engagement with 14 days' written notice. Fees for work completed up to the termination date are non-refundable. Advance payments for work not yet started will be refunded after deducting any applicable costs.</p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>Rebild's total liability for any claim arising out of an engagement is limited to the fees paid by the client for the specific deliverable in question. We are not liable for indirect, incidental, or consequential damages.</p>
      </Section>

      <Section title="8. Client Responsibilities">
        <p>The client is responsible for providing timely feedback, accurate information, brand assets, and approvals. Delays caused by the client may extend project timelines and costs.</p>
      </Section>

      <Section title="9. Governing Law">
        <p>These Terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in our registered city.</p>
      </Section>

      <Section title="10. Contact">
        <p>For any questions about these Terms, write to <a href="mailto:hello@rebild.in" className="text-primary hover:underline">hello@rebild.in</a>.</p>
      </Section>
    </LegalLayout>
  );
};

export default Terms;
