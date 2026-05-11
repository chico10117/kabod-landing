import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { AppLink } from '../lib/routing';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  to?: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
};

const variantClasses = {
  primary: 'border-charcoal bg-charcoal text-warmWhite hover:bg-coffee hover:border-coffee',
  secondary: 'border-coffee/30 bg-warmWhite/80 text-charcoal hover:border-coffee hover:bg-cream',
  ghost: 'border-transparent bg-transparent text-coffee hover:bg-cream',
  dark: 'border-warmWhite bg-warmWhite text-charcoal hover:bg-cream',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

export function Button({
  children,
  href,
  to,
  icon,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-[4px] border font-semibold tracking-[0.01em] transition duration-200 focus-visible:outline-charcoal disabled:cursor-not-allowed disabled:opacity-45',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  if (to) {
    return (
      <AppLink to={to} className={classes}>
        {icon}
        {children}
      </AppLink>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a href={href} className={classes} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {icon}
      {children}
    </button>
  );
}
