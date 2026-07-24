import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { ReviewItem } from '../../types';

interface ReviewCardProps {
  review: ReviewItem;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 sm:p-7 rounded-3xl bg-[#232323] border border-white/10 hover:border-[#B08D57]/40 transition-all duration-300 shadow-lg flex flex-col justify-between space-y-4 group"
    >
      <div className="space-y-3">
        {/* Header: Stars & Verified Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-[#B08D57]">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#B08D57]" />
            ))}
          </div>

          {review.verified && (
            <span className="inline-flex items-center space-x-1 text-[10px] uppercase font-bold text-[#B08D57] px-2.5 py-0.5 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/30">
              <CheckCircle2 className="w-3 h-3" />
              <span>Google Verified</span>
            </span>
          )}
        </div>

        {/* Quote Copy */}
        <div className="relative">
          <Quote className="w-6 h-6 text-[#B08D57]/20 absolute -top-2 -left-2 rotate-180" />
          <p className="text-xs text-[#A19B91] leading-relaxed relative z-10 pt-2 italic">
            "{review.text}"
          </p>
        </div>
      </div>

      {/* Footer: Service Tag & Author Details */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
        <div>
          <h4 className="font-display font-semibold text-[#F5F1EA] group-hover:text-[#B08D57] transition-colors">
            {review.author}
          </h4>
          <span className="text-[10px] text-[#A19B91]">{review.date}</span>
        </div>

        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B08D57] px-2 py-1 rounded bg-[#171717] border border-white/10">
          {review.service}
        </span>
      </div>
    </motion.article>
  );
};

export default ReviewCard;
