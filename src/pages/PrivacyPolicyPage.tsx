import React from 'react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/site-config';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <Section id="privacy-policy" variant="default" padding="lg">
      <Container size="md" className="space-y-10 text-left">
        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-[#B08D57]/15 border border-[#B08D57]/40 text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UK GDPR & Data Protection Notice</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-main)]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            Effective Date: 24 July 2026 • BE BOSS Barbers Ltd (Company Registration: UK-894210)
          </p>
        </div>

        {/* Legal Body Sections */}
        <div className="space-y-8 text-xs text-[var(--text-muted)] leading-relaxed">
          {/* Section 1 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)]">
              1. Information We Collect
            </h2>
            <p>
              When you reserve a barbering appointment or contact BE BOSS Barbers, we collect personal information necessary to manage your booking:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[var(--text-main)]">
              <li>Full Name</li>
              <li>Email Address (for calendar invites and appointment confirmations)</li>
              <li>Telephone Number (for SMS schedule reminders or concierge updates)</li>
              <li>Selected Master Barber & Grooming Service preferences</li>
              <li>Optional notes regarding hair texture or styling instructions</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)]">
              2. Lawful Basis & Purpose of Processing
            </h2>
            <p>
              Under UK GDPR Article 6, we process your personal data under the following lawful bases:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-[var(--text-main)]">Contractual Necessity:</strong> To fulfill your appointment reservation at our Portsmouth flagship lounge.</li>
              <li><strong className="text-[var(--text-main)]">Consent:</strong> For sending optional VIP loyalty club newsletters or storing analytics cookies.</li>
              <li><strong className="text-[var(--text-main)]">Legitimate Interest:</strong> To maintain security and optimize lounge operations.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)]">
              3. Data Retention & Security
            </h2>
            <p>
              We retain appointment data for up to 24 months to streamline client re-bookings. All client communications are encrypted via SSL/TLS during transit. We implement strict administrative controls and input sanitization to prevent unauthorized access.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)]">
              4. Your UK GDPR Rights
            </h2>
            <p>
              As a UK resident, you have statutory rights under UK GDPR:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Right to access personal records held by BE BOSS Barbers.</li>
              <li>Right to request correction of inaccurate contact information.</li>
              <li>Right to request deletion ("Right to be Forgotten").</li>
              <li>Right to object to or restrict processing.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3">
            <h2 className="font-display font-semibold text-lg text-[var(--text-main)] flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#B08D57]" />
              <span>5. Data Controller Contact</span>
            </h2>
            <p>
              To exercise your privacy rights, please contact our Data Protection Officer:
            </p>
            <div className="p-4 rounded-lg bg-[var(--site-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] space-y-1">
              <p className="font-semibold">BE BOSS Barbers Data Protection Officer</p>
              <p className="text-xs text-[var(--text-muted)] flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.postcode}</span>
              </p>
              <p className="text-xs text-[var(--text-muted)]">Email: privacy@bebossbarbers.co.uk</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PrivacyPolicyPage;
