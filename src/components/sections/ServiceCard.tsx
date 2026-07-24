import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Check, Sparkles, ArrowRight } from 'lucide-react';
import { GroomingService } from '../../types';
import Button from '../ui/Button';
import { formatGBP } from '../../lib/utils';
import { useBookingContext } from '../../context/BookingContext';

interface ServiceCardProps {
  service: GroomingService;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { openBookingModal } = useBookingContext();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-xl transition-all duration-300 group bg-[var(--card-bg)] border ${
        service.isPopular
          ? 'border-2 border-[#B08D57] shadow-xl'
          : 'border-[var(--border-card)] hover:border-[#B08D57]/60 shadow-sm'
      }`}
    >
      {/* Popular Choice Badge */}
      {service.isPopular && (
        <div className="absolute -top-3 right-6 px-3 py-1 rounded-sm bg-[#B08D57] text-[#171717] text-[10px] font-bold uppercase tracking-widest flex items-center space-x-1 shadow-sm">
          <Sparkles className="w-3 h-3 fill-[#171717]" />
          <span>Signature Choice</span>
        </div>
      )}

      {/* Card Details */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm border bg-[#B08D57]/15 text-[#B08D57] border-[#B08D57]/30">
            {service.category}
          </span>
          <div className="flex items-center space-x-1.5 text-xs font-medium text-[var(--text-muted)]">
            <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>{service.durationMinutes} mins</span>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-2xl group-hover:text-[#B08D57] transition-colors text-[var(--text-main)]">
            {service.name}
          </h3>
          <div className="mt-2 text-3xl font-display font-bold text-[#B08D57]">
            {formatGBP(service.priceGBP)}
          </div>
        </div>

        <p className="text-xs leading-relaxed font-normal text-[var(--text-muted)]">
          {service.description}
        </p>

        {/* Key Inclusions List */}
        <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Included:</span>
          <ul className="space-y-1.5">
            {service.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-xs text-[var(--text-muted)]">
                <Check className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action */}
      <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]">
        <Button
          variant={service.isPopular ? 'primary' : 'secondary'}
          size="md"
          fullWidth
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          onClick={() => openBookingModal(service)}
        >
          Book This Service
        </Button>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
