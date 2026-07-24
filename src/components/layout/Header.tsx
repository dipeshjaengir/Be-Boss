import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Calendar, Phone, Sun, Moon } from 'lucide-react';
import Button from '../ui/Button';
import MobileNav from './MobileNav';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { SITE_CONFIG } from '../../config/site-config';
import { useBookingContext } from '../../context/BookingContext';
import { useTheme } from '../../context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-400 bg-[var(--site-bg)]/90 backdrop-blur-md ${
          isScrolled
            ? 'py-3 border-b border-[var(--border-subtle)] shadow-md'
            : 'py-5 border-b border-[var(--border-subtle)]/40'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#B08D57] rounded-lg p-1">
            <div className="w-10 h-10 rounded-full border border-[#B08D57]/50 bg-[var(--card-bg)] flex items-center justify-center text-[#B08D57] font-display font-bold text-xl group-hover:border-[#B08D57] transition-all">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-[var(--text-main)] text-lg leading-tight group-hover:text-[#B08D57] transition-colors">
                BE BOSS
              </span>
              <span className="text-[10px] text-[#B08D57] tracking-[0.25em] uppercase font-semibold">
                BARBERS • PORTSMOUTH
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[var(--card-bg)]/80 p-1.5 rounded-full border border-[var(--border-subtle)] backdrop-blur-sm" aria-label="Main Navigation">
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
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Theme Toggle Group */}
          <div className="hidden sm:flex items-center space-x-3">
            <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-xs text-[var(--text-muted)] hover:text-[#B08D57] flex items-center space-x-1.5 transition-colors mr-1">
              <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>

            {/* Circular Icon-Only Theme Switcher Button (40px x 40px) */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:border-[#B08D57] hover:text-[#B08D57] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#B08D57] shadow-sm shrink-0 overflow-hidden"
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {theme === 'dark' ? (
                    <Moon className="w-4 h-4 text-[#B08D57]" />
                  ) : (
                    <Sun className="w-4 h-4 text-[#B08D57]" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            <Button
              variant="primary"
              size="sm"
              leftIcon={<Calendar className="w-3.5 h-3.5" />}
              onClick={() => openBookingModal()}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu & Circular Theme Switcher */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:border-[#B08D57] flex items-center justify-center transition-all overflow-hidden"
              aria-label="Toggle theme mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {theme === 'dark' ? <Moon className="w-4 h-4 text-[#B08D57]" /> : <Sun className="w-4 h-4 text-[#B08D57]" />}
                </motion.div>
              </AnimatePresence>
            </button>
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
              className="p-2.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[#B08D57]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
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
