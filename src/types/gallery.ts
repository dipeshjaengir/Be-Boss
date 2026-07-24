export type GalleryCategory = 'all' | 'fades' | 'executive' | 'beards' | 'hot-towel' | 'vip';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageUrl: string;
  beforeImageUrl?: string;
  description: string;
  aspectRatio?: 'portrait' | 'square' | 'landscape';
}
