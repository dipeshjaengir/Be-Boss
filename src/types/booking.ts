import { GroomingService } from './service';
import { MasterBarber } from './barber';

export type BookingStep = 'service' | 'barber' | 'datetime' | 'details' | 'confirmation';

export interface BookingState {
  currentStep: BookingStep;
  selectedService: GroomingService | null;
  selectedBarber: MasterBarber | null;
  selectedDate: Date | null;
  selectedTimeSlot: string | null;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  consentAgreed: boolean;
  notes?: string;
  isSubmitting: boolean;
  isConfirmed: boolean;
}
