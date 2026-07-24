import React from 'react';
import { HelpCircle } from 'lucide-react';
import Section from '../layout/Section';
import FAQAccordion from './FAQAccordion';
import { FAQ_DATA } from '../../config/faq-data';

export const FAQSection: React.FC = () => {
  return (
    <Section id="faq" variant="default" padding="lg">
      <div className="space-y-12 text-center">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/30 text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1EA] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#A19B91] leading-relaxed font-normal">
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
