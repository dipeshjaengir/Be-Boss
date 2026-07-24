import React from 'react';
import { Calendar, Clock, Coffee, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { useBookingContext } from '../../context/BookingContext';

export const BookingSection: React.FC = () => {
  const { openBookingModal } = useBookingContext();

  return (
    <Section id="booking" variant="gold-subtle" padding="lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: High-End Lifestyle Lounge Photography */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 bg-[#232323] h-[460px] shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=1200&q=85"
            alt="BE BOSS Barbers VIP Spirits Bar & Lounge Sanctuary"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />

          {/* Overlay Pill */}
          <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#171717]/90 backdrop-blur-md border border-white/10 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B08D57]">
              Portsmouth VIP Lounge
            </span>
            <p className="text-xs text-[#F5F1EA] font-semibold">
              Complimentary single-malt whisky, artisan espresso, or craft beer with every cut.
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Text & Reservation Action */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/30 text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Friction-Free Reservation</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#F5F1EA] tracking-tight">
              Reserve Your Executive Sanctuary
            </h2>
            <p className="text-base text-[#A19B91] leading-relaxed font-normal">
              Book your preferred master barber, service package, and exact time slot in under 45 seconds on mobile.
            </p>
          </div>

          {/* Feature Highlights List */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#232323] border border-white/10">
              <div className="p-2 rounded-lg bg-[#B08D57]/10 text-[#B08D57] shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-[#F5F1EA]">45-Second Booking</h3>
                <p className="text-xs text-[#A19B91]">Real-time calendar availability without queue waiting.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#232323] border border-white/10">
              <div className="p-2 rounded-lg bg-[#B08D57]/10 text-[#B08D57] shrink-0 mt-0.5">
                <Coffee className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-[#F5F1EA]">Complimentary Bar</h3>
                <p className="text-xs text-[#A19B91]">Artisan drinks menu included with every haircut.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#232323] border border-white/10">
              <div className="p-2 rounded-lg bg-[#B08D57]/10 text-[#B08D57] shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-[#F5F1EA]">Free 24h Cancellation</h3>
                <p className="text-xs text-[#A19B91]">Flexibility to reschedule without penalty fees.</p>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              leftIcon={<Sparkles className="w-4 h-4" />}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => openBookingModal()}
            >
              Launch Booking Engine
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BookingSection;
