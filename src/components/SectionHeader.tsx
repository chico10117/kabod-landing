type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeader({ eyebrow, title, text, align = 'left', className = '' }: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-clay">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl font-semibold leading-[0.98] text-charcoal md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-muted md:text-lg">{text}</p> : null}
    </div>
  );
}
