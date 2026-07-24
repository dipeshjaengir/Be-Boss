export interface CookieCategoryConsent {
  essential: boolean;     // Always true
  analytics: boolean;     // User toggle
  marketing: boolean;     // User toggle
}

export interface CookieConsentState extends CookieCategoryConsent {
  hasConsented: boolean;
  timestamp: string | null;
}

export interface CookieInfo {
  name: string;
  category: 'essential' | 'functional' | 'analytics' | 'marketing';
  purpose: string;
  duration: string;
  type: 'First-party' | 'Third-party';
}
