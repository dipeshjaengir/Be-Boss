import React, { createContext, useContext, ReactNode } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';
import { CookiePreferences } from '../types';

interface CookieContextType {
  preferences: CookiePreferences;
  updatePreferences: (newPrefs: Partial<CookiePreferences>) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { preferences, updatePreferences } = useCookieConsent();

  return (
    <CookieContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieContext = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieContext must be used within a CookieProvider');
  }
  return context;
};
