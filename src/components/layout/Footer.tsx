import React, { useState } from 'react';
import { MapPin, Phone, Clock, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from './Container';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { SITE_CONFIG } from '../../config/site-config';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#171717] border-t border-[#3A3A3C] text-[#F5F1EA] pt-16 pb-12" role="contentinfo">
      <Container size="lg">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full border border-[#B08D57] bg-[#232323] flex items-center justify-center text-[#B08D57] font-display font-bold text-lg">
                B
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">BE BOSS BARBERS</span>
            </div>
            <p className="text-xs text-[#A19B91] leading-relaxed">
              Portsmouth’s premier executive grooming lounge. Uncompromising British haircutting, bespoke beard sculpting, and luxury hot-towel shaves.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-[11px] text-[#B08D57]">
              <Shield className="w-4 h-4 shrink-0" />
              <span>UK GDPR Compliant • Licensed Barber Establishment</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base text-[#B08D57] tracking-wider uppercase">Sitemap</h4>
            <ul className="space-y-2 text-xs text-[#A19B91]">
              <li><a href="#services" className="hover:text-[#B08D57] transition-colors">Services & Pricing</a></li>
              <li><a href="#experience" className="hover:text-[#B08D57] transition-colors">Lounge Experience</a></li>
              <li><a href="#barbers" className="hover:text-[#B08D57] transition-colors">Master Barbers</a></li>
              <li><a href="#lookbook" className="hover:text-[#B08D57] transition-colors">Visual Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#B08D57] transition-colors">Client Reviews</a></li>
              <li><a href="#location" className="hover:text-[#B08D57] transition-colors">Portsmouth Shop & Parking</a></li>
            </ul>
          </div>

          {/* Column 3: Hours & Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base text-[#B08D57] tracking-wider uppercase">Visit Us</h4>
            <div className="space-y-2.5 text-xs text-[#A19B91]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.postcode}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Fri: 09:00 - 19:00</p>
                  <p>Sat: 08:30 - 18:00 | Sun: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Capture */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base text-[#B08D57] tracking-wider uppercase">VIP Loyalty Club</h4>
            <p className="text-xs text-[#A19B91]">
              Subscribe for exclusive seasonal grooming drops, VIP weekend availability, and luxury styling guides.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-lg bg-[#B08D57]/10 border border-[#B08D57]/30 text-xs text-[#B08D57] flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for joining the VIP Club.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button variant="primary" size="sm" fullWidth rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Join VIP Club
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#A19B91] space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} BE BOSS Barbers Ltd. All rights reserved. Portsmouth, UK.</p>

          <div className="flex items-center space-x-6">
            <a href="/privacy-policy" className="hover:text-[#B08D57] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#B08D57] transition-colors">Terms of Service</a>
            <a href="/accessibility" className="hover:text-[#B08D57] transition-colors">Accessibility Statement</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
