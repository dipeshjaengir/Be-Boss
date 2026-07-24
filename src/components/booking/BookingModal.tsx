import React from 'react';
import Modal from '../ui/Modal';
import BookingProgress from './BookingProgress';
import StepService from './StepService';
import StepBarber from './StepBarber';
import StepDateTime from './StepDateTime';
import StepDetails from './StepDetails';
import StepConfirmation from './StepConfirmation';
import Button from '../ui/Button';
import { useBookingContext } from '../../context/BookingContext';

export const BookingModal: React.FC = () => {
  const { isModalOpen, closeBookingModal, state, setStep } = useBookingContext();

  const renderStep = () => {
    switch (state.currentStep) {
      case 'service':
        return <StepService />;
      case 'barber':
        return <StepBarber />;
      case 'datetime':
        return <StepDateTime />;
      case 'details':
        return <StepDetails />;
      case 'confirmation':
        return <StepConfirmation />;
      default:
        return <StepService />;
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeBookingModal} maxWidth="lg">
      <div className="space-y-4">
        {/* Step Progress Bar */}
        <BookingProgress currentStep={state.currentStep} />

        {/* Dynamic Step View */}
        <div>{renderStep()}</div>

        {/* Modal Footer Navigation (for steps 1-3) */}
        {state.currentStep !== 'details' && state.currentStep !== 'confirmation' && (
          <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (state.currentStep === 'barber') setStep('service');
                if (state.currentStep === 'datetime') setStep('barber');
              }}
              disabled={state.currentStep === 'service'}
            >
              Previous Step
            </Button>

            <span className="text-xs text-neutral-400">
              {state.selectedService ? `Selected: ${state.selectedService.name}` : 'Select a service'}
            </span>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default BookingModal;
