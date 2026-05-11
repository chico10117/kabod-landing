import { Check } from 'lucide-react';
import type { Treatment } from '../types';

type TreatmentFeatureProps = {
  treatment: Treatment;
  index?: number;
};

export function TreatmentFeature({ treatment, index = 0 }: TreatmentFeatureProps) {
  return (
    <article className="grid gap-7 border-t border-border py-9 md:grid-cols-[0.34fr_1fr]">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-clay">Ritual {String(index + 1).padStart(2, '0')}</span>
        <h3 className="mt-3 font-display text-4xl font-semibold leading-none text-charcoal">{treatment.title}</h3>
      </div>
      <div>
        <p className="max-w-2xl text-base leading-8 text-muted">{treatment.description}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {treatment.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm font-semibold text-coffee">
              <Check className="mt-0.5 shrink-0 text-sage" size={17} />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
