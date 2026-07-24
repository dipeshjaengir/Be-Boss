import { ReviewItem } from '../types';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Portsmouth Client',
    rating: 5,
    date: 'July 2026',
    text: 'Exceptional executive haircut and hot towel shave. The attention to detail, complimentary scotch, and sanctuary atmosphere are unmatched on the South Coast.',
    service: 'The BOSS Combo',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Verified Reviewer',
    rating: 5,
    date: 'June 2026',
    text: 'Flawless skin fade and beard line-up. Booking online took less than a minute. Easily the best barbershop experience in Portsmouth.',
    service: 'Signature Precision Skin Fade',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Gunwharf Resident',
    rating: 5,
    date: 'June 2026',
    text: 'Top tier service from start to finish. The VIP private suite is ideal for special occasion grooming and wedding prep.',
    service: 'VIP Private Suite Session',
    verified: true,
  },
];
