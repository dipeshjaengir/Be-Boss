import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useCookieContext } from '../../context/CookieContext';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ isOpen, onClose }) => {
  const { preferences, updatePreferences } = useCookieContext();
  const [analytics, setAnalytics] = useState<boolean>(preferences.analytics);
  const [marketing, setMarketing] = useState<boolean>(preferences.marketing);

  const handleSave = () => {
    updatePreferences({
      analytics,
      marketing,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cookie Preferences (UK PECR)" maxWidth="md">
      <div className="space-y-6 text-sm text-neutral-300">
        <p>
          We use cookies to enhance your experience, measure performance, and support our local Portsmouth barbershop marketing. You can customize your consent options below in accordance with UK PECR and GDPR guidelines.
        </p>

        {/* Option 1: Essential */}
        <div className="p-4 rounded-lg bg-[#0A0B0D] border border-white/10 flex items-start justify-between">
          <div className="space-y-1 pr-4">
            <h4 className="font-semibold text-white">Essential Cookies</h4>
            <p className="text-xs text-neutral-400">
              Required for basic website functionality, secure appointment booking, and session management. Cannot be disabled.
            </p>
          </div>
          <span className="px-2.5 py-1 text-xs font-semibold uppercase bg-neutral-800 text-amber-400 rounded">
            Always Active
          </span>
        </div>

        {/* Option 2: Analytics */}
        <div className="p-4 rounded-lg bg-[#0A0B0D] border border-white/10 flex items-start justify-between">
          <div className="space-y-1 pr-4">
            <h4 className="font-semibold text-white">Analytics Cookies</h4>
            <p className="text-xs text-neutral-400">
              Helps us understand how visitors interact with our booking flow to optimize performance and user experience.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D4AF37]" />
          </label>
        </div>

        {/* Option 3: Marketing */}
        <div className="p-4 rounded-lg bg-[#0A0B0D] border border-white/10 flex items-start justify-between">
          <div className="space-y-1 pr-4">
            <h4 className="font-semibold text-white">Marketing Cookies</h4>
            <p className="text-xs text-neutral-400">
              Used to measure local Portsmouth promotional campaigns and tailored social media announcements.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D4AF37]" />
          </label>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-white/10">
          <Button variant="secondary" size="sm" onClick={onClose} fullWidth={false}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleSave} fullWidth={false}>
            Save Preferences
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CookiePreferencesModal;
