import React from 'react';
import { Star, Award, Users, RefreshCw } from 'lucide-react';
import Section from '../layout/Section';
import Grid from '../layout/Grid';
import ReviewCard from './ReviewCard';
import { REVIEWS_DATA } from '../../config/reviews-data';

export const ReviewsSection: React.FC = () => {
  return (
    <Section id="reviews" variant="card" padding="lg">
      <div className="space-y-12 text-center">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/30 text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
            <Star className="w-3.5 h-3.5 fill-[#B08D57]" />
            <span>Google Business Social Proof</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F1EA] tracking-tight">
            Voted #1 Barber In Portsmouth
          </h2>
          <p className="text-sm sm:text-base text-[#A19B91] leading-relaxed font-normal">
            Real feedback from executive professionals, style enthusiasts, and local Portsmouth clients.
          </p>
        </div>

        {/* Google Rating Summary Container */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#171717] border border-[#B08D57]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          {/* Rating Score */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl sm:text-5xl font-display font-bold text-[#B08D57]">5.0</div>
            <div className="space-y-1 text-left">
              <div className="flex items-center space-x-1 text-[#B08D57]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B08D57]" />
                ))}
              </div>
              <p className="text-xs text-[#F5F1EA] font-semibold">
                Based on 400+ Verified UK Google Reviews
              </p>
            </div>
          </div>

          {/* Rating Distribution Bar */}
          <div className="w-full md:w-64 space-y-1.5 text-xs text-[#A19B91]">
            <div className="flex items-center justify-between">
              <span>5 Star Reviews</span>
              <span className="text-[#B08D57] font-bold">98%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#2D2D2D] overflow-hidden">
              <div className="h-full bg-[#B08D57] w-[98%]" />
            </div>
            <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1">
              <span>4 Star: 2%</span>
              <span>1-3 Star: 0%</span>
            </div>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <Grid cols={3} gap="md" className="text-center max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-[#232323] border border-white/10 space-y-1">
            <div className="flex items-center justify-center space-x-1 text-[#B08D57]">
              <Award className="w-4 h-4" />
              <span className="font-display font-bold text-xl text-[#F5F1EA]">99%</span>
            </div>
            <p className="text-[11px] text-[#A19B91]">Client Satisfaction</p>
          </div>

          <div className="p-4 rounded-xl bg-[#232323] border border-white/10 space-y-1">
            <div className="flex items-center justify-center space-x-1 text-[#B08D57]">
              <RefreshCw className="w-4 h-4" />
              <span className="font-display font-bold text-xl text-[#F5F1EA]">88%</span>
            </div>
            <p className="text-[11px] text-[#A19B91]">Repeat Retention Rate</p>
          </div>

          <div className="p-4 rounded-xl bg-[#232323] border border-white/10 space-y-1">
            <div className="flex items-center justify-center space-x-1 text-[#B08D57]">
              <Users className="w-4 h-4" />
              <span className="font-display font-bold text-xl text-[#F5F1EA]">10,000+</span>
            </div>
            <p className="text-[11px] text-[#A19B91]">Cuts Delivered In Portsmouth</p>
          </div>
        </Grid>

        {/* Reviews Cards Grid */}
        <div className="text-left">
          <Grid cols={3} gap="md">
            {REVIEWS_DATA.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </Grid>
        </div>
      </div>
    </Section>
  );
};

export default ReviewsSection;
