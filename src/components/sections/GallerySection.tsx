import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, SlidersHorizontal } from 'lucide-react';
import Section from '../layout/Section';
import LightboxModal from '../gallery/LightboxModal';
import { GALLERY_DATA } from '../../config/gallery-data';
import { GalleryCategory } from '../../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Styles' },
    { id: 'fades', label: 'Skin Fades' },
    { id: 'executive', label: 'Executive Cuts' },
    { id: 'beards', label: 'Beard Sculpting' },
    { id: 'hot-towel', label: 'Hot Towel' },
    { id: 'vip', label: 'VIP Suite' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <>
      <Section id="lookbook" variant="stone-grey" padding="lg">
        <div className="space-y-14 text-center">
          {/* Section Header */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm bg-[#B08D57]/15 border border-[#B08D57]/40 text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
              <Camera className="w-3.5 h-3.5" />
              <span>Editorial Visual Gallery</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight">
              Precision In Every Detail
            </h2>
            <p className="text-base text-[#525252] leading-relaxed font-normal">
              Explore our curated portfolio of razor skin fades, executive scissor cuts, and luxury beard sculpting transformations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-md bg-[#DFDBCF] border border-[#C5BFB0] max-w-4xl mx-auto">
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
                      layoutId="activeGalleryTab"
                      className="absolute inset-0 bg-[#B08D57] rounded-sm shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Asymmetrical Magazine Lookbook Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
            >
              {filteredItems.map((item, idx) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-lg overflow-hidden bg-white border border-[#C5BFB0] hover:border-[#B08D57] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 min-h-[380px] flex flex-col justify-between"
                >
                  {/* Full High-Resolution Photography Layer */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent opacity-90" />
                  </div>

                  {/* Top Badges */}
                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-sm bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-[#B08D57] border border-[#B08D57]/30">
                      {item.categoryLabel}
                    </span>

                    {item.beforeImageUrl && (
                      <span className="px-3 py-1 rounded-sm bg-[#B08D57] text-[#171717] text-[10px] font-bold flex items-center space-x-1 shadow-md">
                        <SlidersHorizontal className="w-3 h-3" />
                        <span>Before/After</span>
                      </span>
                    )}
                  </div>

                  {/* Center Hover Expand Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="p-4 rounded-full bg-black/80 border border-[#B08D57] text-[#B08D57] shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Bottom Information Box */}
                  <div className="relative z-10 p-6 space-y-1 bg-gradient-to-t from-[#171717] via-[#171717]/90 to-transparent pt-12">
                    <h3 className="font-display font-bold text-2xl text-[#F5F1EA] group-hover:text-[#B08D57] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A19B91] line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          items={filteredItems}
          currentIndex={lightboxIndex}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </>
  );
};

export default GallerySection;
