import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Button from '../ui/Button';
import CookiePreferencesModal from './CookiePreferencesModal';
import { useCookieConsent } from '../../context/CookieContext';

export const CookieBanner: React.FC = () => {
  const {
    preferences,
    acceptAll,
    rejectNonEssential,
    isPreferencesModalOpen,
    openPreferencesModal,
    closePreferencesModal,
  } = useCookieConsent();

  if (preferences.hasConsented) {
    return (
      <CookiePreferencesModal
        isOpen={isPreferencesModalOpen}
        onClose={closePreferencesModal}
      />
    );
  }

  return (
    <>
      <AnimatePresence>
        <motion.aside
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-[700] p-5 sm:p-6 bg-[var(--card-bg)]/95 backdrop-blur-xl border border-[#B08D57]/40 rounded-xl shadow-2xl text-[var(--text-main)] transition-colors duration-500"
          aria-label="Privacy and Cookie Consent"
        >
          <div className="flex items-start space-x-3.5 mb-3">
            <div className="p-2 rounded-lg bg-[#B08D57]/15 text-[#B08D57] shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-base text-[var(--text-main)]">UK Privacy & Cookie Notice</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                We use cookies to ensure optimal appointment booking performance and analyze local traffic under UK GDPR & PECR. Read our{' '}
                <a href="/privacy-policy" className="text-[#B08D57] underline hover:text-[#C5A065]">
                  Privacy Policy
                </a>{' '}
                for details.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border-subtle)]">
            <Button variant="primary" size="sm" onClick={acceptAll}>
              Accept All
            </Button>
            <Button variant="secondary" size="sm" onClick={rejectNonEssential}>
              Reject Non-Essential
            </Button>
            <Button variant="ghost" size="sm" onClick={openPreferencesModal}>
              Preferences
            </Button>
          </div>
        </motion.aside>
      </AnimatePresence>

      <CookiePreferencesModal
        isOpen={isPreferencesModalOpen}
        onClose={closePreferencesModal}
      />
    </>
  );
};

export default CookieBanner;
