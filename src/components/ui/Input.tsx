import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, leftIcon, rightIcon, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="space-y-1.5 w-full text-left">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-[var(--text-muted)] pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              'w-full px-4 py-3 text-xs bg-[var(--card-bg)] text-[var(--text-main)] placeholder-[var(--text-muted)] border rounded-sm transition-all duration-200 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57]',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error ? 'border-red-500' : 'border-[var(--border-card)]',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 text-[var(--text-muted)] pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-[11px] text-red-400 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
