import React, { ReactNode } from 'react';
import Container from './Container';
import { cn } from '../../lib/utils';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'full';
export type SectionVariant = 'default' | 'dark-graphite' | 'warm-ivory' | 'charcoal' | 'stone-grey' | 'card' | 'gold-subtle';
export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  id?: string;
  children: ReactNode;
  variant?: SectionVariant;
  padding?: SectionPadding;
  containerSize?: ContainerSize;
  className?: string;
  ariaLabel?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  variant = 'default',
  padding = 'lg',
  containerSize = 'lg',
  className,
  ariaLabel,
}) => {
  const paddings: Record<SectionPadding, string> = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-36',
  };

  const variants: Record<SectionVariant, string> = {
    default: 'bg-[#171717] text-[#F5F1EA]',
    'dark-graphite': 'bg-[#171717] text-[#F5F1EA]',
    'warm-ivory': 'bg-[#F5F1EA] text-[#171717]',
    charcoal: 'bg-[#232323] text-[#F5F1EA]',
    'stone-grey': 'bg-[#EAE7E1] text-[#171717]',
    card: 'bg-[#171717] text-[#F5F1EA]',
    'gold-subtle': 'bg-[#232323] text-[#F5F1EA]',
  };

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        'relative overflow-hidden transition-colors duration-500',
        variants[variant],
        paddings[padding],
        className
      )}
    >
      {/* Light Radial Leak for Dark Sections */}
      {(variant === 'dark-graphite' || variant === 'default' || variant === 'gold-subtle') && (
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#B08D57]/10 to-transparent blur-3xl pointer-events-none" />
      )}

      {/* Light Radial Leak for Light Sections */}
      {(variant === 'warm-ivory' || variant === 'stone-grey') && (
        <div className="absolute top-0 left-0 w-96 h-96 bg-radial from-[#B08D57]/15 to-transparent blur-3xl pointer-events-none" />
      )}

      <Container size={containerSize} className="relative z-10">
        {children}
      </Container>
    </section>
  );
};

export default Section;
