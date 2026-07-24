import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import Container from './Container';

interface SectionProps {
  id?: string;
  children: ReactNode;
  variant?: 'default' | 'card' | 'tertiary' | 'gold-subtle';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  variant = 'default',
  padding = 'lg',
  containerSize = 'lg',
  className,
}) => {
  const variantStyles = {
    default: 'bg-[#0A0B0D] text-[#F9FAFB]',
    card: 'bg-[#121418] text-[#F9FAFB] border-y border-[#2A2E37]/50',
    tertiary: 'bg-[#1A1D24] text-[#F9FAFB]',
    'gold-subtle': 'bg-gradient-to-b from-[#121418] via-[#1A1D24] to-[#0A0B0D] text-[#F9FAFB]',
  };

  const paddingStyles = {
    none: 'py-0',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  };

  return (
    <section id={id} className={cn(variantStyles[variant], paddingStyles[padding], className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};

export default Section;
