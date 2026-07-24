import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, ChevronDown, Star, ShieldCheck, MapPin, Award } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../layout/Container';
import { useBookingContext } from '../../context/BookingContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroSection: React.FC = () => {
  const { openBookingModal } = useBookingContext();
  const prefersReducedMotion = useReducedMotion();

  // Subtle Parallax Scroll Coordinates
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  // Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[var(--site-bg)] text-[var(--text-main)] py-16 md:py-24 lg:py-28 transition-colors duration-500"
      aria-label="Hero Introduction"
    >
      {/* Full-Screen Cinematic Photography Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85"
          alt="BE BOSS Barbers Portsmouth Luxury Atmosphere"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale scale-105"
          style={{
            transform: prefersReducedMotion ? 'none' : `translateY(${scrollY * 0.15}px) scale(1.05)`,
          }}
        />
        {/* Editorial Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--overlay-gradient-from)] via-[var(--overlay-gradient-from)] to-[var(--overlay-gradient-to)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-[var(--site-bg)]" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Location Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[var(--card-bg)] border border-[#B08D57]/40 text-xs font-semibold uppercase tracking-widest text-[#B08D57] shadow-sm backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Portsmouth Flagship • High Street, PO1</span>
            </motion.div>

            {/* Oversized Editorial H1 Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-main)] leading-[1.02]">
                Portsmouth’s <br />
                <span className="bg-gradient-to-r from-[#B08D57] via-[#C5A065] to-[#B08D57] bg-clip-text text-transparent italic font-serif">
                  Executive Grooming
                </span>{' '}
                Sanctuary
              </h1>
              <p className="text-base sm:text-xl text-[var(--text-muted)] max-w-xl leading-relaxed font-light">
                Where traditional British barbering meets contemporary precision. Enjoy tailored scissor craft, razor skin fades, and hot-towel treatments with complimentary single-malt whisky.
              </p>
            </motion.div>

            {/* CTAs Group */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Calendar className="w-4 h-4" />}
                onClick={() => openBookingModal()}
              >
                Book Appointment
              </Button>
              <a href="#services">
                <Button variant="secondary" size="lg" fullWidth>
                  Explore Menu
                </Button>
              </a>
            </motion.div>

            {/* Key Trust Metrics */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-6 text-left">
              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-[#B08D57]">
                  <Star className="w-4 h-4 fill-[#B08D57]" />
                  <span className="font-bold text-sm text-[var(--text-main)]">5.0 ★ Rating</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)]">400+ Verified UK Reviews</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-[#B08D57]">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-sm text-[var(--text-main)]">Master Craftsmen</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)]">14+ Years London Trained</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-[#B08D57]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-sm text-[var(--text-main)]">VIP Lounge</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)]">Private Suite & Bar</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Cinematic Photography Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--card-bg)] shadow-2xl group">
              {/* High-Resolution Editorial Photography Container */}
              <div className="relative h-[420px] sm:h-[500px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85"
                  alt="BE BOSS Master Barber Precision Scissor Cut"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent opacity-90" />

                {/* Top Badge Overlay */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#B08D57] font-semibold border border-[var(--border-subtle)]">
                    The Signature Experience
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3 bg-[var(--card-bg)]/90 backdrop-blur-md p-5 rounded-xl border border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-main)]">The BOSS Full Grooming</span>
                    <span className="text-[#B08D57] font-bold text-sm">£65 • 75 Mins</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-normal">
                    Executive haircut, bespoke beard sculpt, scalp refresh wash, and single-malt scotch tasting.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    onClick={() => openBookingModal()}
                  >
                    Select Package
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden md:flex flex-col items-center justify-center pt-16 text-center"
        >
          <a
            href="#services"
            className="group flex flex-col items-center space-y-2 text-[var(--text-muted)] hover:text-[#B08D57] transition-colors focus:outline-none"
            aria-label="Scroll down to view services"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Scroll To Discover</span>
            <div className="p-2 rounded-full border border-[var(--border-subtle)] group-hover:border-[#B08D57]/40 group-hover:bg-[#B08D57]/10 transition-all">
              <ChevronDown className="w-4 h-4 text-[#B08D57]" />
            </div>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
