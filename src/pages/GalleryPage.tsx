import { Instagram } from 'lucide-react';
import { useMemo, useState } from 'react';
import { BookingCTA } from '../components/BookingCTA';
import { Button } from '../components/Button';
import { GalleryGrid } from '../components/GalleryGrid';
import { SectionHeader } from '../components/SectionHeader';
import { externalLinks } from '../config/links';
import { galleryCategoryLabels, galleryItems } from '../data/gallery';
import type { GalleryCategory } from '../types';

type GalleryFilter = GalleryCategory | 'all';

const filters = Object.entries(galleryCategoryLabels) as [GalleryFilter, string][];

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');
  const visibleItems = useMemo(
    () => (activeFilter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)),
    [activeFilter],
  );

  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Galería"
            title="Resultados reales, clientas felices y una experiencia personalizada en cada visita."
            text="Transformaciones mock para prototipo: balayage, rubios, color, tratamientos y peinados con una presentación editorial limpia."
            align="center"
          />

          <div className="mt-9 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrar galería">
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

          <div className="mt-12">
            <GalleryGrid items={visibleItems} />
          </div>
        </div>
      </section>

      <section className="page-section bg-cream/70">
        <div className="section-inner grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-clay">Instagram</p>
            <h2 className="font-display text-4xl font-semibold leading-none text-charcoal">Más inspiración antes de tu cita.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Sigue a Kabod Hair para ver transformaciones, ideas de color y cuidado diario.</p>
          </div>
          <Button href={externalLinks.instagram} icon={<Instagram size={17} />}>
            Ver Instagram
          </Button>
        </div>
      </section>

      <BookingCTA title="¿Lista para tu transformación?" text="Reserva una valoración y diseñamos un resultado alineado contigo." />
    </>
  );
}
