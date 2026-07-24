import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import BarberSection from '../components/sections/BarberSection';
import GallerySection from '../components/sections/GallerySection';
import BookingSection from '../components/sections/BookingSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import FAQSection from '../components/sections/FAQSection';
import LocationSection from '../components/sections/LocationSection';

export const HomePage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <ServicesSection />
      <BarberSection />
      <GallerySection />
      <BookingSection />
      <ReviewsSection />
      <FAQSection />
      <LocationSection />
    </main>
  );
};

export default HomePage;
