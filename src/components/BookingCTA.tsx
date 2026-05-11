import { CalendarDays, MessageCircle } from 'lucide-react';
import { externalLinks } from '../config/links';
import { Button } from './Button';

type BookingCTAProps = {
  title?: string;
  text?: string;
};

export function BookingCTA({
  title = 'Reserva tu cita en segundos.',
  text = 'Conecta con Kabod Hair y elige el servicio que mejor se adapta a ti.',
}: BookingCTAProps) {
  return (
    <section id="booking-demo" className="page-section bg-charcoal text-warmWhite">
      <div className="section-inner grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-sand">Cita Kabod</p>
          <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-warmWhite/72">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Button href={externalLinks.koiboxBooking} variant="dark" size="lg" icon={<CalendarDays size={18} />}>
            Reservar cita
          </Button>
          <Button href={externalLinks.whatsapp} variant="ghost" size="lg" icon={<MessageCircle size={18} />} className="text-warmWhite hover:bg-warmWhite/10">
            Hablar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
