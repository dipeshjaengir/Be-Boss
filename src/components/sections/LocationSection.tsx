import React from 'react';
import { MapPin, Clock, MessageSquare, Navigation, Car } from 'lucide-react';
import Section from '../layout/Section';
import Grid from '../layout/Grid';
import Button from '../ui/Button';
import { SITE_CONFIG } from '../../config/site-config';

export const LocationSection: React.FC = () => {
  return (
    <Section id="location" variant="default" padding="lg">
      <div className="space-y-14">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-[#B08D57]/15 border border-[#B08D57]/40 text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Portsmouth Location & Directions</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-main)] tracking-tight">
            Find Us In High Street, Portsmouth
          </h2>
          <p className="text-base text-[var(--text-muted)] leading-relaxed font-normal">
            Conveniently situated near Gunwharf Quays and the Historic Dockyard with dedicated client parking options.
          </p>
        </div>

        {/* Storefront Photography Hero Banner */}
        <div className="relative rounded-xl overflow-hidden border border-[var(--border-card)] bg-[var(--card-bg)] h-[360px] shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85"
            alt="BE BOSS Barbers Portsmouth Storefront Exterior"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-[var(--site-bg)]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-lg bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B08D57]">
                Portsmouth Flagship Sanctuary
              </span>
              <h3 className="font-display font-bold text-xl text-[var(--text-main)]">
                High Street, PO1 2AB
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.city} ${SITE_CONFIG.address.postcode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" leftIcon={<Navigation className="w-4 h-4" />}>
                  Get Directions
                </Button>
              </a>
              <a
                href="https://wa.me/442392000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" leftIcon={<MessageSquare className="w-4 h-4" />}>
                  WhatsApp Concierge
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Grid: Left Contact Info / Right Map Embed */}
        <Grid cols={3} gap="md" className="items-start">
          {/* Address Box */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3 shadow-sm">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <MapPin className="w-5 h-5" />
              <h3 className="font-display font-semibold text-lg text-[var(--text-main)]">Flagship Address</h3>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {SITE_CONFIG.address.street}<br />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.county}<br />
              {SITE_CONFIG.address.postcode}, {SITE_CONFIG.address.country}
            </p>
          </div>

          {/* Opening Hours Box */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3 shadow-sm">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <Clock className="w-5 h-5" />
              <h3 className="font-display font-semibold text-lg text-[var(--text-main)]">Opening Hours</h3>
            </div>
            <div className="space-y-2 text-xs text-[var(--text-muted)]">
              {SITE_CONFIG.hours.map((h, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                  <span>{h.days}</span>
                  <span className="font-semibold text-[var(--text-main)]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Parking & Transport Info */}
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border-card)] space-y-3 shadow-sm">
            <div className="flex items-center space-x-2 text-[#B08D57]">
              <Car className="w-5 h-5" />
              <h3 className="font-display font-semibold text-lg text-[var(--text-main)]">Parking & Access</h3>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              On-street parking available along High Street. Multi-storey secure parking at Gunwharf Quays (3 mins walk) or Portsmouth Historic Dockyard (5 mins walk).
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
};

export default LocationSection;
