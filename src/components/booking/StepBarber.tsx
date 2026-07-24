import React from 'react';
import { Award, Check, UserCheck } from 'lucide-react';
import { TEAM_DATA } from '../../config/team-data';
import { useBookingContext } from '../../context/BookingContext';
import { MasterBarber } from '../../types';

const ANY_BARBER: MasterBarber = {
  id: 'barber-any',
  name: 'First Available Master Barber',
  role: 'Any Available Craftsman',
  experienceYears: 10,
  specialties: ['All Executive Services'],
  bio: 'Select this option for maximum time slot availability.',
  avatarUrl: '/images/team/any.webp',
  instagramHandle: '@bebossbarbers_portsmouth',
  availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};

export const StepBarber: React.FC = () => {
  const { state, selectBarber } = useBookingContext();
  const allOptions = [ANY_BARBER, ...TEAM_DATA];

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="font-display font-semibold text-xl text-white">Choose Your Craftsman</h4>
        <p className="text-xs text-neutral-400">Select a master barber or choose first available.</p>
      </div>

      <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
        {allOptions.map((barber) => {
          const isSelected = state.selectedBarber?.id === barber.id;
          return (
            <div
              key={barber.id}
              onClick={() => selectBarber(barber)}
              className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                isSelected
                  ? 'bg-[#D4AF37]/10 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  : 'bg-[#0A0B0D] border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#1A1D24]'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#121418] flex items-center justify-center text-[#D4AF37] shrink-0 font-bold">
                  {barber.id === 'barber-any' ? <UserCheck className="w-5 h-5" /> : barber.name[0]}
                </div>
                <div>
                  <h5 className="font-display font-semibold text-base text-white group-hover:text-[#D4AF37] transition-colors">
                    {barber.name}
                  </h5>
                  <p className="text-xs text-neutral-400">{barber.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-xs text-[#D4AF37] flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>{barber.experienceYears} Yrs</span>
                </span>
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-neutral-600'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepBarber;
