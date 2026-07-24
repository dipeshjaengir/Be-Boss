export type ServiceCategory = 'haircuts' | 'beards' | 'combos' | 'vip';

export interface GroomingService {
  id: string;
  name: string;
  category: ServiceCategory;
  durationMinutes: number;
  priceGBP: number;
  description: string;
  inclusions: string[];
  isPopular?: boolean;
}
