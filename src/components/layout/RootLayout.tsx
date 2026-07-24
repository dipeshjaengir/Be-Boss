import React, { ReactNode } from 'react';
import SkipLink from '../ui/SkipLink';
import ScrollProgress from '../ui/ScrollProgress';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from '../legal/CookieBanner';
import ScrollToTop from '../ui/ScrollToTop';
import PageTransition from '../ui/PageTransition';
import BookingModal from '../booking/BookingModal';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#0A0B0D] text-[#F9FAFB] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Accessible Skip Link for Keyboard Users */}
      <SkipLink />

      {/* Top Fixed Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Global Glassmorphic Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 pt-20">
        <PageTransition>{children}</PageTransition>
      </div>

      {/* Global Multi-Column Footer */}
      <Footer />

      {/* UK GDPR & PECR Cookie Notice */}
      <CookieBanner />

      {/* Multi-Step Booking Modal */}
      <BookingModal />

      {/* Scroll-To-Top Trigger Button */}
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;
