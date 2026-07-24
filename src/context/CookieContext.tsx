import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CookieCategoryConsent, CookieConsentState } from '../types/cookie';

interface CookieContextType {
  preferences: CookieConsentState;
  updatePreferences: (newConsent: Partial<CookieCategoryConsent>) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  hasCategoryConsent: (category: 'analytics' | 'marketing') => boolean;
  isPreferencesModalOpen: boolean;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
}

const COOKIE_STORAGE_KEY = 'be_boss_cookie_consent_v2';

const defaultConsentState: CookieConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
  hasConsented: false,
  timestamp: null,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookieConsentState>(() => {
    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultConsentState,
          ...parsed,
          essential: true, // Essential is always true
        };
      }
    } catch {
      // Fallback
    }
    return defaultConsentState;
  });

  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (preferences.hasConsented) {
      try {
        localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(preferences));
      } catch {
        // Storage fallback
      }

      // Script gating execution hook for third-party scripts (GA, GTM, Meta Pixel)
      if (preferences.analytics) {
        // Future readiness: Initialize GA4 / Clarity script loader when enabled
        console.log('[Privacy Engine] Analytics scripts enabled by user consent.');
      }
      if (preferences.marketing) {
        // Future readiness: Initialize Meta Pixel / GTM remarketing when enabled
        console.log('[Privacy Engine] Marketing scripts enabled by user consent.');
      }
    }
  }, [preferences]);

  const updatePreferences = (newConsent: Partial<CookieCategoryConsent>) => {
    setPreferences({
      essential: true,
      analytics: !!newConsent.analytics,
      marketing: !!newConsent.marketing,
      hasConsented: true,
      timestamp: new Date().toISOString(),
    });
  };

  const acceptAll = () => {
    updatePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    updatePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const hasCategoryConsent = (category: 'analytics' | 'marketing'): boolean => {
    if (!preferences.hasConsented) return false;
    return preferences[category] === true;
  };

  const openPreferencesModal = () => setIsPreferencesModalOpen(true);
  const closePreferencesModal = () => setIsPreferencesModalOpen(false);

  return (
    <CookieContext.Provider
      value={{
        preferences,
        updatePreferences,
        acceptAll,
        rejectNonEssential,
        hasCategoryConsent,
        isPreferencesModalOpen,
        openPreferencesModal,
        closePreferencesModal,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
};

export default CookieContext;
