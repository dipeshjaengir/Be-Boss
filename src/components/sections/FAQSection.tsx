import React from 'react';
import { HelpCircle } from 'lucide-react';
import Section from '../layout/Section';
import FAQAccordion from './FAQAccordion';
import { FAQ_DATA } from '../../config/faq-data';

export const FAQSection: React.FC = () => {
  return (
    <Section id="faq" variant="stone-grey" padding="lg">
      <div className="space-y-12 text-center">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-[#B08D57]/15 border border-[#B08D57]/40 text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#171717] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#525252] leading-relaxed font-normal">
            Everything you need to know about our Portsmouth shop location, booking policies, amenities, and grooming services.
          </p>
        </div>

        {/* FAQ Accordion Component */}
        <FAQAccordion items={FAQ_DATA} />
      </div>
    </Section>
  );
};

export default FAQSection;
