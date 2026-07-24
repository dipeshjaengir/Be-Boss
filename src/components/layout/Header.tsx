import React, { useState } from 'react';
import { Menu, Calendar, Phone } from 'lucide-react';
import Button from '../ui/Button';
import MobileNav from './MobileNav';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { SITE_CONFIG } from '../../config/site-config';
import { useBookingContext } from '../../context/BookingContext';

export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Master Barbers', href: '#barbers' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
];

export const Header: React.FC = () => {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeHash, setActiveHash] = useState<string>('#services');
  const { openBookingModal } = useBookingContext();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#171717]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'py-5 bg-transparent border-b border-white/5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#B08D57] rounded-lg p-1">
            <div className="w-10 h-10 rounded-full border border-[#B08D57]/40 bg-[#232323] flex items-center justify-center text-[#B08D57] font-display font-bold text-xl group-hover:border-[#B08D57] transition-all">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-[#F5F1EA] text-lg leading-tight group-hover:text-[#B08D57] transition-colors">
                BE BOSS
              </span>
              <span className="text-[10px] text-[#B08D57] tracking-[0.25em] uppercase font-semibold">
                BARBERS • PORTSMOUTH
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#232323]/70 p-1.5 rounded-full border border-white/10 backdrop-blur-sm" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveHash(item.href)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#B08D57] text-[#171717] font-bold shadow-sm'
                      : 'text-[#A19B91] hover:text-[#F5F1EA] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden sm:flex items-center space-x-3">
            <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-xs text-[#A19B91] hover:text-[#B08D57] flex items-center space-x-1.5 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Calendar className="w-3.5 h-3.5" />}
              onClick={() => openBookingModal()}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button
              variant="primary"
              size="sm"
              className="sm:hidden text-[10px] px-3 py-1.5"
              onClick={() => openBookingModal()}
            >
              Book
            </Button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-lg bg-[#232323] border border-white/10 text-[#A19B91] hover:text-white hover:border-[#B08D57]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeHash={activeHash}
      />
    </>
  );
};

export default Header;
