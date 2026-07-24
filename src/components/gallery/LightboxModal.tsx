import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, SlidersHorizontal, Calendar } from 'lucide-react';
import { GalleryItem } from '../../types';
import Button from '../ui/Button';
import { useBookingContext } from '../../context/BookingContext';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  const [showBefore, setShowBefore] = useState<boolean>(false);
  const { openBookingModal } = useBookingContext();

  const currentItem = items[currentIndex];

  useEffect(() => {
    setShowBefore(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  const displayImage = showBefore && currentItem.beforeImageUrl ? currentItem.beforeImageUrl : currentItem.imageUrl;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[950] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox Showcase"
      >
        {/* Backdrop Click Close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Close Action */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[960] p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 hover:text-[#B08D57] transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
          aria-label="Close image lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev / Next Navigation */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-4 sm:left-8 z-[960] p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 hover:text-[#B08D57] transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
          aria-label="Previous gallery image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-4 sm:right-8 z-[960] p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 hover:text-[#B08D57] transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
          aria-label="Next gallery image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Lightbox Content Card */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative z-[955] max-w-4xl w-full bg-[#232323] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
        >
          {/* Image Display Panel */}
          <div className="relative md:w-3/5 bg-black min-h-[320px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
            <img
              src={displayImage}
              alt={currentItem.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#232323] via-transparent to-transparent z-10 md:hidden" />

            {/* Before / After Toggle Switcher */}
            {currentItem.beforeImageUrl && (
              <button
                onClick={() => setShowBefore(!showBefore)}
                className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-[#B08D57]/40 text-xs font-semibold text-[#B08D57] flex items-center space-x-2 shadow-lg hover:bg-[#B08D57] hover:text-[#171717] transition-all"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>{showBefore ? 'View After Cut' : 'View Before Cut'}</span>
              </button>
            )}
          </div>

          {/* Details & Actions Panel */}
          <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#232323]">
            <div className="space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] px-2.5 py-1 rounded-md bg-[#B08D57]/10 border border-[#B08D57]/20">
                {currentItem.categoryLabel}
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F1EA]">{currentItem.title}</h3>
              <p className="text-xs text-[#A19B91] leading-relaxed font-normal">{currentItem.description}</p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <Button
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<Calendar className="w-4 h-4" />}
                onClick={() => {
                  onClose();
                  openBookingModal();
                }}
              >
                Book This Look
              </Button>
              <p className="text-[11px] text-center text-[#A19B91]">
                Image {currentIndex + 1} of {items.length} • Use Arrow Keys to Navigate
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LightboxModal;
