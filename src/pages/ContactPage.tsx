import { Mail, MessageCircle, Phone } from 'lucide-react';
import { BookingCTA } from '../components/BookingCTA';
import { Button } from '../components/Button';
import { ContactFormDemo } from '../components/ContactFormDemo';
import { LocationCard } from '../components/LocationCard';
import { SectionHeader } from '../components/SectionHeader';
import { VisualPlaceholder } from '../components/VisualPlaceholder';
import { externalLinks } from '../config/links';
import { locations } from '../data/locations';

export function ContactPage() {
  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Contacto"
            title="Dos centros en Madrid para cuidar tu cabello."
            text="Reserva, consulta por WhatsApp o escríbenos para recibir orientación inicial. Todo el flujo de esta propuesta es frontend-only."
            align="center"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-warmWhite">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Datos" title="Hablemos antes de tu cita." />
            <div className="mt-7 grid gap-4 text-sm text-muted">
              <a className="inline-flex items-center gap-3 font-semibold text-coffee hover:text-charcoal" href="tel:+34919354807">
                <Phone size={18} /> +34 919 35 48 07
              </a>
              <a className="inline-flex items-center gap-3 font-semibold text-coffee hover:text-charcoal" href={externalLinks.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> +34 634 46 44 81
              </a>
              <a className="inline-flex items-center gap-3 font-semibold text-coffee hover:text-charcoal" href="mailto:kabodhair@gmail.com">
                <Mail size={18} /> kabodhair@gmail.com
              </a>
            </div>
            <div className="mt-8 border border-border bg-cream p-5">
              <h2 className="font-display text-3xl font-semibold leading-none text-charcoal">Horario</h2>
              <p className="mt-4 text-sm leading-7 text-muted">Lunes a viernes: 10:00-19:30</p>
              <p className="text-sm leading-7 text-muted">Sábado: 09:30-14:30</p>
              <p className="text-sm leading-7 text-muted">Domingo: Cerrado</p>
            </div>
            <Button href={externalLinks.whatsapp} className="mt-6" icon={<MessageCircle size={17} />}>
              Hablar por WhatsApp
            </Button>
          </div>
          <ContactFormDemo />
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <VisualPlaceholder
              alt="Interior del centro Kabod Hair como referencia visual de ubicación"
              src="images/kabod/hero-salon.webp"
              objectPosition="50% 50%"
              tone="sage"
              className="min-h-[360px] rounded-[8px] shadow-salon"
            >
              <div className="absolute left-6 top-6 bg-warmWhite px-4 py-3 text-sm font-semibold text-coffee shadow-soft">Mapa demo · Madrid</div>
            </VisualPlaceholder>
            <div>
              <h2 className="font-display text-4xl font-semibold leading-none text-charcoal">Elige el centro que mejor te encaje.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">El bloque de mapa es un placeholder visual. La integración real de mapas o reservas queda fuera de este prototipo.</p>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA title="Reserva o consulta antes de venir." text="Te orientamos sobre el servicio más adecuado para tu cabello y objetivo." />
    </>
  );
}
