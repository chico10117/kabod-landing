import { CalendarDays } from 'lucide-react';
import { BookingCTA } from '../components/BookingCTA';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { TreatmentFeature } from '../components/TreatmentFeature';
import { VisualPlaceholder } from '../components/VisualPlaceholder';
import { externalLinks } from '../config/links';
import { treatments } from '../data/treatments';

export function TreatmentsPage() {
  return (
    <>
      <section className="page-section">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Tratamientos"
              title="Tratamientos diseñados para devolverle vida a tu cabello."
              text="Rituales de cuidado que parten de un diagnóstico y se adaptan al estado real del cabello, al color y al resultado que quieres mantener."
            />
            <Button href={externalLinks.koiboxBooking} className="mt-8" icon={<CalendarDays size={17} />}>
              Reservar valoración
            </Button>
          </div>
          <VisualPlaceholder
            alt="Cabello liso y brillante después de un tratamiento capilar"
            src="images/kabod/gallery-02.webp"
            objectPosition="50% 36%"
            tone="sage"
            className="min-h-[420px] rounded-[8px] shadow-salon"
          />
        </div>
      </section>

      <section className="page-section bg-warmWhite">
        <div className="section-inner">
          {treatments.map((treatment, index) => (
            <TreatmentFeature key={treatment.id} treatment={treatment} index={index} />
          ))}
        </div>
      </section>

      <BookingCTA
        title="Cada cabello tiene una historia."
        text="Te ayudamos a elegir el ritual adecuado para recuperar suavidad, brillo y una rutina que puedas sostener."
      />
    </>
  );
}
