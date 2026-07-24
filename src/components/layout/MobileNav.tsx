import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../ui/Button';
import { SITE_CONFIG } from '../../config/site-config';
import { useBookingContext } from '../../context/BookingContext';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
  activeHash: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, navItems, activeHash }) => {
  const { openBookingModal } = useBookingContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBookClick = () => {
    onClose();
    openBookingModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[600] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Off-canvas Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#121418] border-l border-[#2A2E37] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto text-[#F9FAFB]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-[#D4AF37] tracking-wider uppercase">
                  BE BOSS BARBERS
                </span>
                <span className="text-[10px] text-neutral-400 tracking-widest uppercase">PORTSMOUTH FLAGSHIP</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="py-8 space-y-2">
              {navItems.map((item, idx) => {
                const isActive = activeHash === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Quick Actions & Shop Info */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <div className="space-y-2.5">
                <Button variant="primary" size="lg" fullWidth leftIcon={<Calendar className="w-4 h-4" />} onClick={handleBookClick}>
                  Book Appointment
                </Button>
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="block">
                  <Button variant="secondary" size="md" fullWidth leftIcon={<Phone className="w-4 h-4" />}>
                    Call Shop ({SITE_CONFIG.contact.phone})
                  </Button>
                </a>
              </div>

              <div className="space-y-2 text-xs text-neutral-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city} {SITE_CONFIG.address.postcode}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Mon-Fri: 09:00 - 19:00 | Sat: 08:30 - 18:00</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
