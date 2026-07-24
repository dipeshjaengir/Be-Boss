import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto text-left">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const answerId = `faq-answer-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-all duration-300 overflow-hidden bg-[var(--card-bg)] ${
              isOpen
                ? 'border-[#B08D57] shadow-md'
                : 'border-[var(--border-card)] hover:border-[#B08D57]/60'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 sm:p-6 flex items-center justify-between space-x-4 text-left focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-4 h-4 text-[#B08D57] shrink-0" />
                <h3 className="font-display font-semibold text-base sm:text-lg text-[var(--text-main)]">
                  {item.question}
                </h3>
              </div>
              <div
                className={`p-1.5 rounded-full bg-[var(--site-bg)] text-[#B08D57] transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#B08D57]/20 text-[#B08D57]' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)] mt-1 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
