import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, ShieldCheck } from 'lucide-react';
import Section from '../layout/Section';
import ServiceCard from './ServiceCard';
import { SERVICES_DATA } from '../../config/services-data';
import { ServiceCategory } from '../../types';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { id: ServiceCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'haircuts', label: 'Haircuts & Fades' },
    { id: 'beards', label: 'Beard Sculpting' },
    { id: 'combos', label: 'Packages' },
    { id: 'vip', label: 'VIP Lounge' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <Section id="services" variant="warm-ivory" padding="lg">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-[#B08D57]/15 border border-[#B08D57]/40 text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
            <Scissors className="w-3.5 h-3.5" />
            <span>Signature Service Menu</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight">
            Craftsmanship & Transparent Pricing
          </h2>
          <p className="text-base text-[#525252] leading-relaxed font-normal max-w-2xl">
            Every appointment includes a 1-on-1 consultation, scalp refresh wash, hot towel neck clean-up, and your choice of complimentary single-malt whisky or artisan espresso.
          </p>
        </div>

        {/* Editorial Split Layout: Left Imagery Storytelling / Right Service Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Premium Lifestyle Barbering Photography */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="relative rounded-lg overflow-hidden border border-[#D5CFBF] bg-[#F0ECE1] h-[480px] shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85"
                alt="BE BOSS Traditional Hot Towel Razor Shave Experience"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/30 to-transparent" />

              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-md bg-[#171717]/90 backdrop-blur-md border border-white/10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B08D57]">
                  Uncompromising Standards
                </span>
                <p className="text-xs text-[#F5F1EA] italic leading-relaxed">
                  "Precision haircutting is not just a routine cut — it is a personal statement of prestige."
                </p>
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="p-5 rounded-md bg-[#F0ECE1] border border-[#D5CFBF] space-y-3 text-xs text-[#525252]">
              <div className="flex items-center space-x-2 text-[#B08D57]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="font-semibold text-[#171717]">Transparent Pricing Policy</span>
              </div>
              <p className="leading-relaxed">
                Zero surprise add-ons. Complimentary drinks and hot towels included with every cut.
              </p>
            </div>
          </div>

          {/* Right Column: Category Filter Tabs & Service Cards */}
          <div className="lg:col-span-8 space-y-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-md bg-[#E6E1D3] border border-[#D5CFBF]">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B08D57] ${
                      isActive
                        ? 'text-[#171717] font-bold'
                        : 'text-[#525252] hover:text-[#171717] hover:bg-white/40'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryTab"
                        className="absolute inset-0 bg-[#B08D57] rounded-sm shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Service Grid */}
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} layout className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} isLightBg={true} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
