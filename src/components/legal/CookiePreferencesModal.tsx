import React, { useState, useEffect } from 'react';
import { Lock, BarChart3, Target, ShieldCheck } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useCookieConsent } from '../../context/CookieContext';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { preferences, updatePreferences, acceptAll, rejectNonEssential } = useCookieConsent();

  const [analytics, setAnalytics] = useState<boolean>(preferences.analytics);
  const [marketing, setMarketing] = useState<boolean>(preferences.marketing);

  useEffect(() => {
    setAnalytics(preferences.analytics);
    setMarketing(preferences.marketing);
  }, [preferences, isOpen]);

  const handleSave = () => {
    updatePreferences({
      essential: true,
      analytics,
      marketing,
    });
    onClose();
  };

  const handleAcceptAllModal = () => {
    acceptAll();
    onClose();
  };

  const handleRejectAllModal = () => {
    rejectNonEssential();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="UK Privacy & Cookie Preferences"
      maxWidth="xl"
    >
      <div className="space-y-6 text-left text-[var(--text-main)]">
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          Under UK GDPR and PECR regulation, we require your explicit consent before storing non-essential cookies on your device. You can customize your cookie preferences below or manage them anytime via the footer link.
        </p>

        {/* Category 1: Essential Cookies */}
        <div className="p-4 rounded-lg bg-[var(--site-bg)] border border-[var(--border-subtle)] space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <Lock className="w-4 h-4" />
              <h4 className="font-display font-semibold text-sm text-[var(--text-main)]">1. Strictly Necessary Cookies</h4>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B08D57] px-2 py-0.5 rounded bg-[#B08D57]/15 border border-[#B08D57]/30">
              Always Active
            </span>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Essential for core website operation, security, theme mode preference, and real-time appointment booking navigation. Cannot be disabled.
          </p>
        </div>

        {/* Category 2: Analytics Cookies */}
        <div className="p-4 rounded-lg bg-[var(--site-bg)] border border-[var(--border-subtle)] space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <BarChart3 className="w-4 h-4" />
              <h4 className="font-display font-semibold text-sm text-[var(--text-main)]">2. Performance & Analytics Cookies</h4>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-neutral-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#B08D57]" />
            </label>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Allows us to count aggregate visits and traffic sources to evaluate booking performance without identifying individual visitors.
          </p>
        </div>

        {/* Category 3: Marketing Cookies */}
        <div className="p-4 rounded-lg bg-[var(--site-bg)] border border-[var(--border-subtle)] space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <Target className="w-4 h-4" />
              <h4 className="font-display font-semibold text-sm text-[var(--text-main)]">3. Marketing & Concierge Cookies</h4>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-neutral-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#B08D57]" />
            </label>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Used to deliver relevant VIP grooming promotions and tailored seasonal notifications on partner networks.
          </p>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Button variant="secondary" size="sm" fullWidth onClick={handleRejectAllModal}>
              Reject Non-Essential
            </Button>
            <Button variant="outline" size="sm" fullWidth onClick={handleAcceptAllModal}>
              Accept All
            </Button>
          </div>
          <Button variant="primary" size="sm" fullWidth onClick={handleSave} leftIcon={<ShieldCheck className="w-4 h-4" />}>
            Save Preferences
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CookiePreferencesModal;
