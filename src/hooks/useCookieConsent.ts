import { useState, useEffect } from 'react';
import { CookiePreferences } from '../types';

const STORAGE_KEY = 'be_boss_cookie_preferences';

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  hasConsented: false,
};

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPreferences(JSON.parse(stored));
      }
    } catch {
      // Fallback if localStorage unavailable
    }
  }, []);

  const updatePreferences = (newPrefs: Partial<CookiePreferences>) => {
    const updated: CookiePreferences = {
      ...preferences,
      ...newPrefs,
      hasConsented: true,
    };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Handle exception
    }
  };

  return { preferences, updatePreferences };
}
