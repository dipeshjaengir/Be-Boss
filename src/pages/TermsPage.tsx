import React from 'react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { FileText, Shield, Clock } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <Section id="terms-conditions" variant="default" padding="lg">
      <Container size="md" className="space-y-10 text-left">
        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-[#B08D57]/15 border border-[#B08D57]/40 text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
            <FileText className="w-3.5 h-3.5" />
            <span>UK Commercial Terms</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-main)]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            Effective Date: 24 July 2026 • BE BOSS Barbers Ltd, Portsmouth, UK.
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-xs text-[var(--text-muted)] leading-relaxed">
          {/* Section 1 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website or reserving an appointment at BE BOSS Barbers in High Street, Portsmouth, you agree to comply with these terms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)] flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#B08D57]" />
              <span>2. Booking & Cancellation Policy</span>
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--text-main)]">
              <li><strong className="text-[#B08D57]">Punctuality:</strong> Please arrive 5 minutes prior to your scheduled time slot to enjoy complimentary lounge beverages.</li>
              <li><strong className="text-[#B08D57]">24-Hour Rescheduling:</strong> Cancellations or appointment changes must be submitted at least 24 hours prior to your slot.</li>
              <li><strong className="text-[#B08D57]">Late Arrival:</strong> Arrivals over 15 minutes past the start time may require adjusting the scope of service.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)]">
              3. Intellectual Property
            </h2>
            <p>
              All editorial content, branding marks, visual media, and proprietary styling menus displayed on this website are protected under UK Intellectual Property law and remain the property of BE BOSS Barbers Ltd.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)] flex items-center space-x-2">
              <Shield className="w-4 h-4 text-[#B08D57]" />
              <span>4. Limitation of Liability</span>
            </h2>
            <p>
              BE BOSS Barbers maintains full commercial liability insurance under UK law. We accept no liability for lost personal belongings left unattended in the lounge.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TermsPage;
