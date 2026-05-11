import type { ReactNode } from 'react';

type VisualPlaceholderProps = {
  alt: string;
  src?: string;
  objectPosition?: string;
  tone?: 'light' | 'dark' | 'sage' | 'clay';
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
};

const toneClasses = {
  light: '',
  dark: 'hair-visual--dark',
  sage: 'hair-visual--sage',
  clay: 'hair-visual--clay',
};

export function VisualPlaceholder({
  alt,
  src,
  objectPosition = 'center',
  tone = 'light',
  className = '',
  imageClassName = '',
  children,
}: VisualPlaceholderProps) {
  return (
    <div role={src ? undefined : 'img'} aria-label={src ? undefined : alt} className={`hair-visual ${src ? 'hair-visual--photo' : ''} ${toneClasses[tone]} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
          style={{ objectPosition }}
          loading="lazy"
        />
      ) : null}
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}
