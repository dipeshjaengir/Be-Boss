import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const ScrollToTop: React.FC = () => {
  const { scrollPosition } = useScrollPosition();
  const isVisible = scrollPosition > 400;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[550] p-3.5 rounded-full bg-[#121418] border border-[#D4AF37]/30 text-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
