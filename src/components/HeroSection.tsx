import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react';
import { externalLinks } from '../config/links';
import { Button } from './Button';
import { VisualPlaceholder } from './VisualPlaceholder';

export function HeroSection() {
  return (
    <section className="overflow-hidden px-5 pb-12 pt-10 md:px-8 md:pb-20 md:pt-16">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="reveal">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-clay">Peluquería premium en Madrid</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.92] text-charcoal sm:text-6xl lg:text-7xl">
            Belleza reinstaurada. Identidad revelada.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            Balayage, rubios personalizados, cambios de look y tratamientos capilares diseñados para revelar tu mejor versión.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={externalLinks.koiboxBooking} size="lg" icon={<CalendarDays size={18} />}>
              Reservar cita
            </Button>
            <Button to="/servicios" variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
              Ver servicios
            </Button>
          </div>
          <p className="mt-7 text-sm font-semibold text-coffee">
            Asesoría personalizada · Especialistas en color · Resultados naturales
          </p>
        </div>

        <div className="relative min-h-[430px] lg:min-h-[560px]">
          <VisualPlaceholder
            alt="Ambiente editorial de salón premium con transformación capilar luminosa"
            src="images/kabod/hero-salon.webp"
            objectPosition="50% 50%"
            tone="light"
            className="absolute inset-x-0 top-0 h-[360px] rounded-[8px] shadow-salon md:h-[520px]"
          >
            <div className="absolute bottom-6 left-6 max-w-[260px] border border-warmWhite/70 bg-warmWhite/82 p-5 shadow-soft backdrop-blur">
              <Sparkles className="mb-4 text-clay" size={22} />
              <p className="font-display text-2xl font-semibold leading-none">Especialistas en balayage y rubios personalizados</p>
            </div>
          </VisualPlaceholder>
          <div className="absolute right-4 top-10 hidden border border-border bg-warmWhite px-5 py-4 shadow-soft md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Madrid</p>
            <p className="mt-2 font-display text-3xl font-semibold">2 centros</p>
          </div>
        </div>
      </div>
    </section>
  );
}
