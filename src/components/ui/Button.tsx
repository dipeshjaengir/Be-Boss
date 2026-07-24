import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'gold-glow';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed select-none cursor-pointer';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[#B08D57] text-[#171717] hover:bg-[#C5A065] hover:shadow-md active:scale-[0.98]',
    secondary: 'bg-[var(--card-bg)] text-[var(--text-main)] border border-[var(--border-card)] hover:border-[#B08D57] hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]',
    ghost: 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]',
    outline: 'bg-transparent text-[#B08D57] border border-[#B08D57]/50 hover:border-[#B08D57] hover:bg-[#B08D57]/10 active:scale-[0.98]',
    'gold-glow': 'bg-[#B08D57] text-[#171717] shadow-md hover:bg-[#C5A065] active:scale-[0.98]',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'text-xs px-3.5 py-2 space-x-1.5 min-h-[36px]',
    md: 'text-xs px-5 py-3 space-x-2 min-h-[44px]',
    lg: 'text-sm px-7 py-4 space-x-2.5 min-h-[52px]',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin mr-2" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </motion.button>
  );
};

export default Button;
