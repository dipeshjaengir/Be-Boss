import React, { useState } from 'react';
import { User, Mail, Phone, Lock, ShieldCheck } from 'lucide-react';
import { useBookingContext } from '../../context/BookingContext';
import Button from '../ui/Button';
import Input from '../ui/Input';

export const StepDetails: React.FC = () => {
  const { state, updateClientInfo, setStep } = useBookingContext();

  const [name, setName] = useState<string>(state.clientName || '');
  const [email, setEmail] = useState<string>(state.clientEmail || '');
  const [phone, setPhone] = useState<string>(state.clientPhone || '');
  const [notes, setNotes] = useState<string>(state.notes || '');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(state.consentAgreed || false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address for confirmation.');
      return;
    }

    if (!phone.trim() || phone.length < 8) {
      setErrorMsg('Please enter a valid UK contact phone number.');
      return;
    }

    if (!agreeTerms) {
      setErrorMsg('You must agree to the Privacy Policy and Terms & Conditions to complete reservation.');
      return;
    }

    setIsSubmitting(true);

    // Input Sanitization
    const sanitizedName = name.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const sanitizedNotes = notes.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');

    setTimeout(() => {
      setIsSubmitting(false);
      updateClientInfo({
        name: sanitizedName,
        email: email.trim(),
        phone: phone.trim(),
        consent: agreeTerms,
        notes: sanitizedNotes,
      });
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="space-y-1">
        <h3 className="font-display font-semibold text-xl text-[var(--text-main)]">Your Details</h3>
        <p className="text-xs text-[var(--text-muted)]">
          Please provide contact information to receive your instant SMS and email booking ticket.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-xs text-red-400">
          {errorMsg}
        </div>
      )}

      <div className="space-y-4">
        <Input
          label="Full Name *"
          placeholder="e.g., Alexander Wright"
          value={name}
          onChange={(e) => setName(e.target.value)}
          leftIcon={<User className="w-4 h-4" />}
          required
        />

        <Input
          label="Email Address *"
          type="email"
          placeholder="e.g., alexander@example.co.uk"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail className="w-4 h-4" />}
          required
        />

        <Input
          label="UK Mobile Phone *"
          type="tel"
          placeholder="e.g., 07700 900123"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          leftIcon={<Phone className="w-4 h-4" />}
          required
        />

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Barber Notes (Optional)
          </label>
          <div className="relative">
            <textarea
              rows={3}
              placeholder="Specify hair texture preferences, skin fade length, or hot towel preferences..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-[var(--card-bg)] text-[var(--text-main)] placeholder-[var(--text-muted)] border border-[var(--border-card)] rounded-sm focus:outline-none focus:border-[#B08D57]"
            />
          </div>
        </div>

        {/* Required UK GDPR Agreement Checkbox */}
        <div className="pt-2 p-3.5 rounded-lg bg-[var(--site-bg)] border border-[var(--border-subtle)] space-y-2">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 text-[#B08D57] border-[var(--border-card)] rounded focus:ring-[#B08D57]"
              required
            />
            <span className="text-xs text-[var(--text-muted)] leading-relaxed">
              I have read and agree to the{' '}
              <a href="/privacy-policy" target="_blank" className="text-[#B08D57] underline hover:text-[#C5A065]">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms-and-conditions" target="_blank" className="text-[#B08D57] underline hover:text-[#C5A065]">
                Terms & Conditions
              </a>. *
            </span>
          </label>
          <div className="flex items-center space-x-1.5 text-[10px] text-[#B08D57] pl-7">
            <Lock className="w-3 h-3 shrink-0" />
            <span>256-Bit SSL Encrypted • Zero Data Disclosure</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between space-x-3">
        <Button variant="ghost" size="md" type="button" onClick={() => setStep('datetime')}>
          Back
        </Button>
        <Button
          variant="primary"
          size="md"
          type="submit"
          isLoading={isSubmitting}
          leftIcon={<ShieldCheck className="w-4 h-4" />}
          disabled={!agreeTerms}
        >
          Confirm Reservation
        </Button>
      </div>
    </form>
  );
};

export default StepDetails;
