import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { useBookingContext } from '../../context/BookingContext';

const MORNING_SLOTS = ['09:00', '09:45', '10:30', '11:15'];
const AFTERNOON_SLOTS = ['12:30', '13:30', '14:30', '15:30', '16:15'];
const EVENING_SLOTS = ['17:00', '17:45', '18:30'];

export const StepDateTime: React.FC = () => {
  const { state, selectDateTime } = useBookingContext();
  const [selectedDate, setSelectedDate] = useState<Date>(state.selectedDate || new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(state.selectedTimeSlot);

  const upcomingDates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
    selectDateTime(selectedDate, slot);
  };

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h4 className="font-display font-semibold text-xl text-white">Select Date & Time</h4>
        <p className="text-xs text-neutral-400">Choose your preferred day and time slot in Portsmouth.</p>
      </div>

      {/* Date Selector Row */}
      <div className="space-y-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center space-x-1">
          <CalendarIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Select Date:</span>
        </span>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {upcomingDates.map((date, idx) => {
            const isSelected = format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(date)}
                className={`p-3 rounded-xl border text-center shrink-0 min-w-[76px] transition-all ${
                  isSelected
                    ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#0A0B0D] border-white/10 text-neutral-300 hover:border-white/30'
                }`}
              >
                <div className="text-[10px] uppercase font-bold">{format(date, 'EEE')}</div>
                <div className="text-lg font-display font-bold">{format(date, 'dd')}</div>
                <div className="text-[9px] uppercase">{format(date, 'MMM')}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slot Sections */}
      <div className="space-y-4 max-h-[240px] overflow-y-auto pr-1">
        {/* Morning Slots */}
        <div className="space-y-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Morning</span>
          </span>
          <div className="grid grid-cols-4 gap-2">
            {MORNING_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => handleSlotClick(slot)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    isSelected
                      ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                      : 'bg-[#0A0B0D] border-white/10 text-neutral-300 hover:border-[#D4AF37]/40 hover:bg-[#1A1D24]'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        {/* Afternoon Slots */}
        <div className="space-y-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Afternoon</span>
          </span>
          <div className="grid grid-cols-4 gap-2">
            {AFTERNOON_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => handleSlotClick(slot)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    isSelected
                      ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                      : 'bg-[#0A0B0D] border-white/10 text-neutral-300 hover:border-[#D4AF37]/40 hover:bg-[#1A1D24]'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        {/* Evening Slots */}
        <div className="space-y-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Evening</span>
          </span>
          <div className="grid grid-cols-4 gap-2">
            {EVENING_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => handleSlotClick(slot)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    isSelected
                      ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                      : 'bg-[#0A0B0D] border-white/10 text-neutral-300 hover:border-[#D4AF37]/40 hover:bg-[#1A1D24]'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepDateTime;
