import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { CookieProvider } from './context/CookieContext';
import { ThemeProvider } from './context/ThemeContext';
import RootLayout from './components/layout/RootLayout';
import LoadingScreen from './components/ui/LoadingScreen';

// Route-level Code Splitting for Performance
const HomePage = lazy(() => import('./pages/HomePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage'));

export function App() {
  return (
    <ThemeProvider>
      <CookieProvider>
        <BookingProvider>
          <Router>
            <RootLayout>
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                </Routes>
              </Suspense>
            </RootLayout>
          </Router>
        </BookingProvider>
      </CookieProvider>
    </ThemeProvider>
  );
}

export default App;
