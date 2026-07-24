import { MasterBarber } from '../types';

export const TEAM_DATA: MasterBarber[] = [
  {
    id: 'barber-lead',
    name: 'Lead Master Barber',
    role: 'Creative Director & Founder',
    experienceYears: 14,
    specialties: ['Classic Scissor Work', 'Executive Styling', 'Traditional Cut-Throat Shaves'],
    bio: 'Bespoke grooming specialist trained in London, bringing precision haircutting and executive styling to Portsmouth.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    instagramHandle: '@bebossbarbers_portsmouth',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  {
    id: 'barber-senior',
    name: 'Senior Master Barber',
    role: 'Precision Fade Specialist',
    experienceYears: 9,
    specialties: ['Razor-Sharp Skin Fades', 'Beard Sculpting', 'Hair Edging'],
    bio: 'Specializing in contemporary skin fades, architectural beard shaping, and razor-sharp hairline detailing.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    instagramHandle: '@bebossbarbers_portsmouth',
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  {
    id: 'barber-grooming',
    name: 'Grooming Specialist',
    role: 'Hot Towel & Spa Specialist',
    experienceYears: 7,
    specialties: ['Textured Crops', 'Hot Towel Steam', 'Facial Care'],
    bio: 'Passionate about traditional British hot-towel treatments paired with modern textured styling.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    instagramHandle: '@bebossbarbers_portsmouth',
    availableDays: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
];
