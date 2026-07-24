import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import Section from '../layout/Section';
import Grid from '../layout/Grid';
import BarberCard from './BarberCard';
import { TEAM_DATA } from '../../config/team-data';

export const BarberSection: React.FC = () => {
  return (
    <Section id="barbers" variant="card" padding="lg">
      <div className="space-y-12 text-center">
        {/* Section Heading */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/30 text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
            <Award className="w-3.5 h-3.5" />
            <span>Master Craftsmen Roster</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1EA] tracking-tight">
            Engineered By Master Barbers
          </h2>
          <p className="text-sm sm:text-base text-[#A19B91] leading-relaxed font-normal">
            Our team brings over 30 years of combined Mayfair London training and international barbering heritage to Portsmouth.
          </p>
        </div>

        {/* Barber Roster Grid */}
        <div className="text-left">
          <Grid cols={3} gap="md">
            {TEAM_DATA.map((barber) => (
              <BarberCard key={barber.id} barber={barber} />
            ))}
          </Grid>
        </div>

        {/* Credentials & Quality Guarantee Note */}
        <div className="pt-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-[#171717]/80 border border-white/10 text-xs text-[#A19B91]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-[#B08D57] shrink-0" />
            <span>Fully Licensed & Insured UK Establishment</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#B08D57] shrink-0" />
            <span>Bespoke Consultation Before Every Cut</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BarberSection;
