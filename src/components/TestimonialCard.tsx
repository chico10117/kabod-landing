import type { Testimonial } from '../types';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="border border-border bg-warmWhite p-6 shadow-sm">
      <p className="font-display text-3xl leading-none text-charcoal">“</p>
      <blockquote className="mt-2 text-base leading-8 text-muted">{testimonial.quote}</blockquote>
      <div className="mt-6 border-t border-border pt-4">
        <p className="font-semibold text-charcoal">{testimonial.author}</p>
        <p className="text-sm text-taupe">{testimonial.service}</p>
      </div>
    </article>
  );
}
