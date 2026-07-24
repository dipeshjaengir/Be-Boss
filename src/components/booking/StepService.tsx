import React from 'react';
import { Clock, Check } from 'lucide-react';
import { SERVICES_DATA } from '../../config/services-data';
import { useBookingContext } from '../../context/BookingContext';
import { formatGBP } from '../../lib/utils';

export const StepService: React.FC = () => {
  const { state, selectService } = useBookingContext();

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="font-display font-semibold text-xl text-white">Select Your Grooming Service</h4>
        <p className="text-xs text-neutral-400">Choose from our signature executive menu below.</p>
      </div>

      <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
        {SERVICES_DATA.map((service) => {
          const isSelected = state.selectedService?.id === service.id;
          return (
            <div
              key={service.id}
              onClick={() => selectService(service)}
              className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                isSelected
                  ? 'bg-[#D4AF37]/10 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  : 'bg-[#0A0B0D] border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#1A1D24]'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-display font-semibold text-base text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.name}
                  </span>
                  {service.isPopular && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest bg-[#D4AF37] text-black">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-3 text-xs text-neutral-400">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{service.durationMinutes} mins</span>
                  </span>
                  <span>•</span>
                  <span>{service.description.slice(0, 60)}...</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 shrink-0">
                <span className="font-display font-bold text-lg text-[#D4AF37]">
                  {formatGBP(service.priceGBP)}
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

export default StepService;
