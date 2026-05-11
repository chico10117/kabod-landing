import { ArrowUpRight, Clock } from 'lucide-react';
import type { Service } from '../types';
import { Button } from './Button';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col border border-border bg-warmWhite p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-caramel hover:shadow-soft">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          {service.featured ? (
            <span className="mb-3 inline-flex rounded-full bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-clay">
              Destacado
            </span>
          ) : null}
          <h3 className="font-display text-3xl font-semibold leading-none text-charcoal">{service.title}</h3>
        </div>
        <ArrowUpRight className="shrink-0 text-taupe transition group-hover:text-clay" size={22} />
      </div>
      <p className="text-sm leading-7 text-muted">{service.description}</p>
      <div className="mt-auto pt-6">
        <div className="mb-5 flex flex-wrap gap-4 text-sm text-coffee">
          <span className="inline-flex items-center gap-2">
            <Clock size={16} /> {service.duration}
          </span>
          <span className="font-semibold">{service.priceFrom}</span>
        </div>
        <Button href="#booking-demo" variant="secondary" size="sm" className="w-full">
          Ver servicio
        </Button>
      </div>
    </article>
  );
}
