import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { MasterBarber } from '../../types';
import Button from '../ui/Button';
import { useBookingContext } from '../../context/BookingContext';

interface BarberCardProps {
  barber: MasterBarber;
}

export const BarberCard: React.FC<BarberCardProps> = ({ barber }) => {
  const { openBookingModal } = useBookingContext();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-[#232323] border border-white/10 hover:border-[#B08D57]/50 transition-all duration-500 shadow-2xl min-h-[520px]"
    >
      {/* Editorial Barber Photography Canvas Container */}
      <div className="relative h-80 w-full overflow-hidden bg-black">
        <img
          src={barber.avatarUrl}
          alt={`BE BOSS Master Barber ${barber.name}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#232323] via-[#232323]/30 to-transparent" />

        {/* Experience Badge Overlay */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-[#B08D57] border border-[#B08D57]/30">
            <Award className="w-3 h-3" />
            <span>{barber.experienceYears} Years Craft</span>
          </span>

          <a
            href={`https://instagram.com/${barber.instagramHandle.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black/60 backdrop-blur-md text-neutral-400 hover:text-[#B08D57] hover:bg-black/90 transition-all focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
            aria-label={`View ${barber.name} on Instagram`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Barber Title Overlay */}
        <div className="absolute bottom-4 left-6 right-6 z-10 space-y-0.5">
          <h3 className="font-display font-bold text-2xl text-[#F5F1EA] group-hover:text-[#B08D57] transition-colors">
            {barber.name}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
            {barber.role}
          </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <p className="text-xs text-[#A19B91] leading-relaxed">
            {barber.bio}
          </p>

          {/* Specialties Skill Chips */}
          <div className="space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A19B91]">Specialties:</span>
            <div className="flex flex-wrap gap-1.5">
              {barber.specialties.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#171717] border border-white/10 text-[11px] text-[#F5F1EA]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Trigger */}
        <div className="pt-4 border-t border-white/10">
          <Button
            variant="outline"
            size="md"
            fullWidth
            leftIcon={<Calendar className="w-3.5 h-3.5" />}
            onClick={() => openBookingModal()}
          >
            Schedule With Barber
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export default BarberCard;
