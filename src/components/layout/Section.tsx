import React, { ReactNode } from 'react';
import Container from './Container';
import { cn } from '../../lib/utils';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'full';
export type SectionVariant = 'default' | 'card' | 'gold-subtle';
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

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      data-variant={variant}
      className={cn(
        'relative overflow-hidden transition-colors duration-500 bg-[var(--site-bg)] text-[var(--text-main)]',
        paddings[padding],
        className
      )}
    >
      {/* Soft Light Leak Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#B08D57]/10 to-transparent blur-3xl pointer-events-none" />

      <Container size={containerSize} className="relative z-10">
        {children}
      </Container>
    </section>
  );
};

export default Section;
