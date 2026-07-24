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
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-300 group ${
        service.isPopular
          ? 'bg-[#232323] border-2 border-[#B08D57]/60 shadow-[0_10px_30px_rgba(176,141,87,0.1)]'
          : 'bg-[#232323]/80 border border-white/10 hover:border-[#B08D57]/40 hover:bg-[#232323] hover:shadow-xl'
      }`}
    >
      {/* Popular Highlight Badge */}
      {service.isPopular && (
        <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#B08D57] to-[#C5A065] text-[#171717] text-[10px] font-bold uppercase tracking-widest flex items-center space-x-1 shadow-sm">
          <Sparkles className="w-3 h-3 fill-[#171717]" />
          <span>Signature Choice</span>
        </div>
      )}

      {/* Card Header & Price */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B08D57] px-2.5 py-1 rounded-md bg-[#B08D57]/10 border border-[#B08D57]/20">
            {service.category}
          </span>
          <div className="flex items-center space-x-1.5 text-[#A19B91] text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>{service.durationMinutes} mins</span>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-2xl text-[#F5F1EA] group-hover:text-[#B08D57] transition-colors">
            {service.name}
          </h3>
          <div className="mt-2 text-3xl font-display font-bold text-[#B08D57]">
            {formatGBP(service.priceGBP)}
          </div>
        </div>

        <p className="text-xs text-[#A19B91] leading-relaxed font-normal">
          {service.description}
        </p>

        {/* Key Inclusions List */}
        <div className="pt-3 border-t border-white/10 space-y-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A19B91]">Included:</span>
          <ul className="space-y-1.5">
            {service.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-xs text-[#A19B91]">
                <Check className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card CTA Trigger */}
      <div className="pt-6 mt-6 border-t border-white/5">
        <Button
          variant={service.isPopular ? 'primary' : 'outline'}
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
