import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, MapPin, Download, Sparkles } from 'lucide-react';
import { useBookingContext } from '../../context/BookingContext';
import Button from '../ui/Button';
import { SITE_CONFIG } from '../../config/site-config';
import { formatGBP } from '../../lib/utils';
import { format } from 'date-fns';

export const StepConfirmation: React.FC = () => {
  const { state, resetBooking, closeBookingModal } = useBookingContext();

  const referenceNumber = `BB-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleFinish = () => {
    resetBooking();
    closeBookingModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6 text-center py-2"
    >
      {/* Celebration Icon */}
      <div className="flex flex-col items-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            Booking Confirmed • Ref {referenceNumber}
          </span>
          <h4 className="font-display font-bold text-2xl sm:text-3xl text-white">
            We Look Forward To Welcoming You
          </h4>
          <p className="text-xs text-neutral-300">
            A confirmation SMS & calendar invite have been dispatched to {state.clientEmail}.
          </p>
        </div>
      </div>

      {/* Summary Ticket Box */}
      <div className="p-5 rounded-2xl bg-[#0A0B0D] border border-[#D4AF37]/30 text-left space-y-3.5 text-xs">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <div className="font-display font-semibold text-base text-white">
              {state.selectedService?.name || 'Grooming Service'}
            </div>
            <div className="text-[11px] text-neutral-400">
              Barber: {state.selectedBarber?.name || 'Any Available Master Barber'}
            </div>
          </div>
          <div className="font-display font-bold text-lg text-[#D4AF37]">
            {formatGBP(state.selectedService?.priceGBP || 0)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-neutral-300 text-[11px]">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              {state.selectedDate ? format(state.selectedDate, 'EEEE, dd MMMM yyyy') : 'Date'} at{' '}
              {state.selectedTimeSlot}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D4AF37]">
          <span className="flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complimentary Beverage Included</span>
          </span>
          <span>Free Cancellation Up To 24h</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Button
          variant="outline"
          size="sm"
          fullWidth
          leftIcon={<Download className="w-4 h-4" />}
          onClick={() => alert('Calendar invite (.ics) downloaded.')}
        >
          Add To Calendar (.ics)
        </Button>
        <Button variant="primary" size="sm" fullWidth onClick={handleFinish}>
          Done
        </Button>
      </div>
    </motion.div>
  );
};

export default StepConfirmation;
