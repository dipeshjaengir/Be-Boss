import React from 'react';
import { BookingStep } from '../../types';
import { Check } from 'lucide-react';

interface BookingProgressProps {
  currentStep: BookingStep;
}

const STEPS: { id: BookingStep; label: string; number: number }[] = [
  { id: 'service', label: 'Service', number: 1 },
  { id: 'barber', label: 'Barber', number: 2 },
  { id: 'datetime', label: 'Date & Time', number: 3 },
  { id: 'details', label: 'Details', number: 4 },
  { id: 'confirmation', label: 'Confirmed', number: 5 },
];

export const BookingProgress: React.FC<BookingProgressProps> = ({ currentStep }) => {
  const currentStepNumber = STEPS.find((s) => s.id === currentStep)?.number || 1;

  return (
    <div className="w-full pb-6 mb-6 border-b border-white/10" role="progressbar" aria-valuenow={currentStepNumber} aria-valuemin={1} aria-valuemax={5}>
      <div className="flex items-center justify-between">
        {STEPS.map((step) => {
          const isCompleted = step.number < currentStepNumber;
          const isCurrent = step.number === currentStepNumber;

          return (
            <div key={step.id} className="flex flex-col items-center space-y-1.5 flex-1 relative">
              {/* Connector Line */}
              {step.number !== 1 && (
                <div
                  className={`absolute top-4 -left-1/2 right-1/2 h-[2px] -z-10 transition-colors duration-300 ${
                    step.number <= currentStepNumber ? 'bg-[#D4AF37]' : 'bg-neutral-800'
                  }`}
                />
              )}

              {/* Circle Badge */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : isCurrent
                    ? 'bg-[#121418] border-2 border-[#D4AF37] text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                    : 'bg-[#0A0B0D] border border-white/10 text-neutral-500'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step.number}
              </div>

              {/* Label */}
              <span
                className={`text-[10px] uppercase font-semibold tracking-wider hidden sm:block ${
                  isCurrent ? 'text-[#D4AF37]' : isCompleted ? 'text-neutral-300' : 'text-neutral-500'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingProgress;
