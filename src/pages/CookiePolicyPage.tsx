import React from 'react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { useCookieConsent } from '../context/CookieContext';
import { CookieInfo } from '../types/cookie';
import { Cookie, Lock, BarChart3, Target, Settings } from 'lucide-react';

const COOKIE_TABLE_DATA: CookieInfo[] = [
  {
    name: 'be_boss_cookie_consent_v2',
    category: 'essential',
    purpose: 'Stores your UK GDPR & PECR cookie consent choices.',
    duration: '1 Year',
    type: 'First-party',
  },
  {
    name: 'be_boss_theme_mode',
    category: 'essential',
    purpose: 'Stores your preferred Day / Night theme preference.',
    duration: 'Persistent',
    type: 'First-party',
  },
  {
    name: 'be_boss_booking_session',
    category: 'functional',
    purpose: 'Maintains transient step progress in the 5-step booking modal.',
    duration: 'Session',
    type: 'First-party',
  },
  {
    name: '_ga, _ga_*',
    category: 'analytics',
    purpose: 'Measures aggregate site visits and traffic sources for performance optimization.',
    duration: '2 Years',
    type: 'Third-party',
  },
  {
    name: '_fbp',
    category: 'marketing',
    purpose: 'Delivers relevant VIP promotional announcements on partner social networks.',
    duration: '90 Days',
    type: 'Third-party',
  },
];

export const CookiePolicyPage: React.FC = () => {
  const { openPreferencesModal } = useCookieConsent();

  return (
    <Section id="cookie-policy" variant="default" padding="lg">
      <Container size="md" className="space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-[#B08D57]/15 border border-[#B08D57]/40 text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
            <Cookie className="w-3.5 h-3.5" />
            <span>UK PECR & GDPR Transparency</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-main)]">
            Cookie Policy
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            Last Updated: 24 July 2026 • BE BOSS Barbers Ltd, Portsmouth, UK.
          </p>
        </div>

        {/* Introduction & Re-open Modal Trigger */}
        <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-4 shadow-sm">
          <h2 className="font-display font-semibold text-xl text-[var(--text-main)]">
            How We Use Cookies
          </h2>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Cookies are small text files placed on your browser or device when visiting our website. BE BOSS Barbers uses cookies strictly in compliance with the UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
          </p>
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Settings className="w-4 h-4" />}
              onClick={openPreferencesModal}
            >
              Open Cookie Preferences Modal
            </Button>
          </div>
        </div>

        {/* Detailed Cookie Table */}
        <div className="space-y-6">
          <h2 className="font-display font-semibold text-2xl text-[var(--text-main)]">
            Cookie Audit Register
          </h2>

          <div className="overflow-x-auto rounded-xl border border-[var(--border-card)] bg-[var(--card-bg)]">
            <table className="w-full text-left text-xs text-[var(--text-muted)]">
              <thead className="bg-[var(--site-bg)] border-b border-[var(--border-subtle)] text-[var(--text-main)] uppercase font-semibold text-[10px] tracking-wider">
                <tr>
                  <th className="p-3.5">Cookie Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Purpose</th>
                  <th className="p-3.5">Duration</th>
                  <th className="p-3.5">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {COOKIE_TABLE_DATA.map((cookie, idx) => (
                  <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-mono text-[var(--text-main)] font-semibold">{cookie.name}</td>
                    <td className="p-3.5 uppercase font-bold text-[10px] text-[#B08D57]">{cookie.category}</td>
                    <td className="p-3.5 leading-relaxed">{cookie.purpose}</td>
                    <td className="p-3.5">{cookie.duration}</td>
                    <td className="p-3.5">{cookie.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-6">
          <h2 className="font-display font-semibold text-2xl text-[var(--text-main)]">
            Category Definitions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-card)] space-y-2">
              <div className="flex items-center space-x-2 text-[#B08D57]">
                <Lock className="w-4 h-4" />
                <h3 className="font-display font-semibold text-base text-[var(--text-main)]">Essential & Functional</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Necessary for navigating between appointment steps, preserving your Day/Night theme choice, and enforcing security.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-card)] space-y-2">
              <div className="flex items-center space-x-2 text-[#B08D57]">
                <BarChart3 className="w-4 h-4" />
                <h3 className="font-display font-semibold text-base text-[var(--text-main)]">Performance & Analytics</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Helps us evaluate aggregate page loading times and booking completion rates to ensure our Portsmouth lounge runs smoothly.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-card)] space-y-2">
              <div className="flex items-center space-x-2 text-[#B08D57]">
                <Target className="w-4 h-4" />
                <h3 className="font-display font-semibold text-base text-[var(--text-main)]">Marketing & VIP Concierge</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Delivers personalized appointment reminders and seasonal promotions on relevant social partner platforms.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CookiePolicyPage;
