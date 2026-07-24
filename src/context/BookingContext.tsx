import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BookingState, BookingStep, GroomingService, MasterBarber } from '../types';

interface BookingContextType {
  state: BookingState;
  setStep: (step: BookingStep) => void;
  selectService: (service: GroomingService) => void;
  selectBarber: (barber: MasterBarber) => void;
  selectDateTime: (date: Date, slot: string) => void;
  updateClientInfo: (info: { name: string; email: string; phone: string; consent: boolean; notes?: string }) => void;
  resetBooking: () => void;
  isModalOpen: boolean;
  openBookingModal: (service?: GroomingService) => void;
  closeBookingModal: () => void;
}

const initialBookingState: BookingState = {
  currentStep: 'service',
  selectedService: null,
  selectedBarber: null,
  selectedDate: null,
  selectedTimeSlot: null,
  clientName: '',
  clientEmail: '',
  clientPhone: '',
  consentAgreed: false,
  isSubmitting: false,
  isConfirmed: false,
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<BookingState>(initialBookingState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openBookingModal = (service?: GroomingService) => {
    if (service) {
      setState((prev) => ({ ...prev, selectedService: service, currentStep: 'barber' }));
    }
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  const setStep = (step: BookingStep) => {
    setState((prev) => ({ ...prev, currentStep: step }));
  };

  const selectService = (service: GroomingService) => {
    setState((prev) => ({ ...prev, selectedService: service, currentStep: 'barber' }));
  };

  const selectBarber = (barber: MasterBarber) => {
    setState((prev) => ({ ...prev, selectedBarber: barber, currentStep: 'datetime' }));
  };

  const selectDateTime = (date: Date, slot: string) => {
    setState((prev) => ({ ...prev, selectedDate: date, selectedTimeSlot: slot, currentStep: 'details' }));
  };

  const updateClientInfo = (info: { name: string; email: string; phone: string; consent: boolean; notes?: string }) => {
    setState((prev) => ({
      ...prev,
      clientName: info.name,
      clientEmail: info.email,
      clientPhone: info.phone,
      consentAgreed: info.consent,
      notes: info.notes,
      currentStep: 'confirmation',
      isConfirmed: true,
    }));
  };

  const resetBooking = () => {
    setState(initialBookingState);
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        setStep,
        selectService,
        selectBarber,
        selectDateTime,
        updateClientInfo,
        resetBooking,
        isModalOpen,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
};
