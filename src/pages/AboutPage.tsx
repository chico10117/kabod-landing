import { CalendarDays } from 'lucide-react';
import { BookingCTA } from '../components/BookingCTA';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { VisualPlaceholder } from '../components/VisualPlaceholder';
import { externalLinks } from '../config/links';
import { teamMembers } from '../data/team';

export function AboutPage() {
  return (
    <>
      <section className="page-section">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Sobre Kabod"
              title="Más que una peluquería."
              text="Kabod Hair nace como un espacio para volver a sentirte tú: con técnica, escucha y una forma de trabajar que entiende el cabello como parte de la identidad."
            />
            <Button href={externalLinks.koiboxBooking} className="mt-8" icon={<CalendarDays size={17} />}>
              Reservar cita
            </Button>
          </div>
          <VisualPlaceholder
            alt="Equipo Kabod Hair en el salón"
            src="images/kabod/salon-detail-2.webp"
            objectPosition="50% 26%"
            tone="dark"
            className="min-h-[430px] rounded-[8px] shadow-salon"
          />
        </div>
      </section>

      <section className="page-section bg-warmWhite">
        <div className="section-inner grid gap-8 md:grid-cols-3">
          {[
            ['Técnica, propósito y asesoría personalizada', 'No se trata solo de cambiar el cabello, sino de entender qué favorece, qué puedes mantener y qué resultado te hará sentir cómoda.'],
            ['Un espacio para volver a sentirte tú', 'La experiencia se construye desde la escucha, el cuidado y una estética premium sin distancia ni artificio.'],
            ['Confianza en cada transformación', 'Color, corte y tratamiento se plantean como una decisión acompañada, nunca como una tendencia aplicada sin contexto.'],
          ].map(([title, text]) => (
            <article key={title} className="border-t border-border pt-6">
              <h2 className="font-display text-3xl font-semibold leading-none text-charcoal">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Equipo"
            title="Personas que cuidan tu cabello con criterio."
            text="Equipo mock para la propuesta, listo para sustituirse por fotos y biografías reales."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.id} className="border border-border bg-warmWhite shadow-sm">
                <VisualPlaceholder
                  alt={`Retrato de ${member.name}, ${member.role}`}
                  src={member.imageSrc}
                  objectPosition={member.objectPosition}
                  tone={member.tone}
                  className="aspect-[4/5] w-full"
                />
                <div className="p-5">
                  <h3 className="font-display text-3xl font-semibold leading-none text-charcoal">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-clay">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-muted">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA title="Ven a diseñar tu próxima versión." text="Una valoración inicial ayuda a transformar con criterio, calma y resultados mantenibles." />
    </>
  );
}
