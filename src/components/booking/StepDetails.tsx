import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useBookingContext } from '../../context/BookingContext';
import { ArrowRight } from 'lucide-react';
import { formatGBP } from '../../lib/utils';
import { format } from 'date-fns';

export const StepDetails: React.FC = () => {
  const { state, updateClientInfo, setStep } = useBookingContext();

  const [name, setName] = useState<string>(state.clientName || '');
  const [email, setEmail] = useState<string>(state.clientEmail || '');
  const [phone, setPhone] = useState<string>(state.clientPhone || '');
  const [notes, setNotes] = useState<string>(state.notes || '');
  const [consent, setConsent] = useState<boolean>(state.consentAgreed);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('Please fill in all mandatory contact fields.');
      return;
    }
    if (!consent) {
      setError('Please accept the UK GDPR privacy consent terms.');
      return;
    }
    setError('');
    updateClientInfo({
      name,
      email,
      phone,
      consent,
      notes,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1">
        <h4 className="font-display font-semibold text-xl text-white">Client Information</h4>
        <p className="text-xs text-neutral-400">Please provide your details to confirm your appointment.</p>
      </div>

      {/* Booking Summary Box */}
      <div className="p-4 rounded-xl bg-[#0A0B0D] border border-white/10 space-y-2 text-xs">
        <div className="flex items-center justify-between text-neutral-300 font-semibold border-b border-white/5 pb-2">
          <span>{state.selectedService?.name || 'Grooming Service'}</span>
          <span className="text-[#D4AF37] font-bold text-sm">
            {formatGBP(state.selectedService?.priceGBP || 0)}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between text-neutral-400 text-[11px]">
          <span>Barber: {state.selectedBarber?.name || 'Any Craftsman'}</span>
          <span>
            Time:{' '}
            {state.selectedDate ? format(state.selectedDate, 'dd MMM yyyy') : 'Selected Date'} at{' '}
            {state.selectedTimeSlot || 'Time'}
          </span>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-3">
        <Input
          label="Full Name *"
          placeholder="e.g. James Sterling"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            label="Email Address *"
            type="email"
            placeholder="james@example.co.uk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="UK Mobile Phone *"
            type="tel"
            placeholder="+44 7700 900000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Special Notes */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Special Requests / Drink Preference (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Preferred scotch, skin sensitivity notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#0A0B0D] border border-[#2A2E37] rounded-lg text-[#F9FAFB] placeholder:text-neutral-500 text-xs focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        {/* UK GDPR Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start space-x-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 rounded border-neutral-700 bg-neutral-900 text-[#D4AF37] focus:ring-[#D4AF37]"
            />
            <span className="text-[11px] text-neutral-300 leading-tight">
              I agree to the{' '}
              <a href="/privacy-policy" target="_blank" className="text-[#D4AF37] underline">
                Privacy Policy
              </a>{' '}
              and consent to receiving appointment reminders via SMS & Email (UK GDPR).
            </span>
          </label>
        </div>

        {error && <p className="text-xs text-red-400 font-medium pt-1">{error}</p>}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3 pt-3 border-t border-white/10">
        <Button variant="secondary" size="md" onClick={() => setStep('datetime')} type="button">
          Back
        </Button>
        <Button
          variant="gold-glow"
          size="md"
          fullWidth
          type="submit"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Confirm Reservation
        </Button>
      </div>
    </form>
  );
};

export default StepDetails;
