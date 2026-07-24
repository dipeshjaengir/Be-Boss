import React from 'react';

export const AccessibilityPage: React.FC = () => {
  return (
    <main id="main-content" className="py-24 px-6 max-w-4xl mx-auto space-y-6">
      <span className="text-meta-caps text-amber-400">WCAG 2.1 AA Compliance</span>
      <h1 className="text-section-title">Accessibility Statement</h1>
      <p className="text-muted leading-relaxed">
        BE BOSS Barbers is dedicated to providing a digitally accessible web experience for all visitors.
      </p>
    </main>
  );
};

export default AccessibilityPage;
