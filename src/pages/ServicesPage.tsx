import { CalendarDays } from 'lucide-react';
import { useMemo, useState } from 'react';
import { BookingCTA } from '../components/BookingCTA';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { externalLinks } from '../config/links';
import { serviceCategoryLabels, services } from '../data/services';
import type { ServiceCategory } from '../types';

type ServiceFilter = ServiceCategory | 'all';

const filters = Object.entries(serviceCategoryLabels) as [ServiceFilter, string][];

export function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceFilter>('all');
  const visibleServices = useMemo(
    () => (activeFilter === 'all' ? services : services.filter((service) => service.category === activeFilter)),
    [activeFilter],
  );
  const firstGroup = visibleServices.slice(0, 4);
  const secondGroup = visibleServices.slice(4);

  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Servicios"
            title="Servicios Kabod Hair"
            text="Asesoría personalizada, técnica profesional y resultados pensados para tu cabello real, tu rutina y tu forma de verte."
            align="center"
          />
          <div className="mt-9 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrar servicios">
            {filters.map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === value ? 'border-charcoal bg-charcoal text-warmWhite' : 'border-border bg-warmWhite text-muted hover:bg-cream'
                }`}
                onClick={() => setActiveFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {firstGroup.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="my-8 border border-border bg-charcoal p-7 text-warmWhite shadow-salon">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold leading-none">¿No sabes qué servicio elegir?</h2>
                <p className="mt-3 text-sm leading-7 text-warmWhite/72">Reserva una valoración y te asesoramos según tu cabello, objetivo y mantenimiento ideal.</p>
              </div>
              <Button href={externalLinks.koiboxBooking} variant="dark" icon={<CalendarDays size={17} />}>
                Reservar valoración
              </Button>
            </div>
          </div>

          {secondGroup.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {secondGroup.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <BookingCTA title="Reserva una valoración personalizada." text="Te ayudamos a elegir la técnica, el tono y el mantenimiento adecuados." />
    </>
  );
}
