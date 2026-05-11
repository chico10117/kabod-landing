import { ArrowRight, CalendarDays, Check, MessageCircle, ShoppingBag } from 'lucide-react';
import { BookingCTA } from '../components/BookingCTA';
import { Button } from '../components/Button';
import { FaqAccordion } from '../components/FaqAccordion';
import { GalleryGrid } from '../components/GalleryGrid';
import { HeroSection } from '../components/HeroSection';
import { ProductCard } from '../components/ProductCard';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { TrustBar } from '../components/TrustBar';
import { VisualPlaceholder } from '../components/VisualPlaceholder';
import { externalLinks } from '../config/links';
import { galleryItems } from '../data/gallery';
import { products } from '../data/products';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const transformationBullets = ['Diagnóstico personalizado', 'Técnica adaptada a tu cabello', 'Resultado natural y mantenible'];

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      <section className="page-section">
        <div className="section-inner">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Servicios"
              title="Técnica precisa para un resultado que se siente tuyo."
              text="Servicios pensados para cuidar el cabello, elevar tu imagen y facilitar el mantenimiento en casa."
            />
            <Button to="/servicios" variant="secondary" icon={<ArrowRight size={17} />}>
              Ver servicios
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-cream/70">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <VisualPlaceholder
            alt="Detalle de coloración cálida y cabello luminoso en Kabod Hair"
            src="/images/kabod/service-color.webp"
            objectPosition="50% 42%"
            tone="clay"
            className="min-h-[360px] rounded-[8px] shadow-salon"
          />
          <div>
            <SectionHeader
              eyebrow="Transformación"
              title="Tu cabello, tu historia."
              text="En Kabod Hair no seguimos tendencias de forma automática. Diseñamos cada cambio según tu rostro, estilo, rutina y esencia."
            />
            <ul className="mt-8 grid gap-4">
              {transformationBullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-semibold text-coffee">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-warmWhite text-sage">
                    <Check size={17} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href={externalLinks.koiboxBooking} className="mt-8" icon={<CalendarDays size={17} />}>
              Reservar valoración
            </Button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Galería"
              title="Transformaciones con luz, salud visual y movimiento."
              text="Una vista previa de resultados pensados para realzar, no disfrazar."
            />
            <Button to="/galeria" variant="secondary" icon={<ArrowRight size={17} />}>
              Ver galería
            </Button>
          </div>
          <GalleryGrid items={galleryItems.slice(0, 3)} />
        </div>
      </section>

      <section className="page-section bg-warmWhite">
        <div className="section-inner">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Tienda"
              title="Cuida tu cabello también en casa."
              text="Productos profesionales seleccionados por Kabod para mantener el brillo, la salud y el movimiento de tu cabello entre visitas."
            />
            <Button to="/tienda" variant="secondary" icon={<ShoppingBag size={17} />}>
              Explorar tienda
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-cream/70">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Asistente Kabod"
              title="Resuelve dudas antes de pedir tu cita."
              text="Consulta de forma inicial sobre servicios, tratamientos, productos y reservas con un asistente demo de respuesta rápida."
            />
            <Button className="mt-8" variant="secondary" icon={<MessageCircle size={17} />}>
              Probar asistente
            </Button>
          </div>
          <div className="border border-border bg-warmWhite p-5 shadow-salon">
            <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-coffee">
                <MessageCircle size={17} />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-none">Asistente Kabod</h3>
                <p className="text-xs text-muted">Vista previa</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="ml-auto max-w-[78%] bg-charcoal px-4 py-3 text-sm leading-6 text-warmWhite">
                ¿Qué tratamiento necesito si tengo el cabello seco?
              </p>
              <p className="max-w-[86%] bg-cream px-4 py-3 text-sm leading-6 text-muted">
                Podemos orientarte según tu tipo de cabello. Para sequedad y falta de brillo, normalmente recomendamos una valoración y un tratamiento nutritivo personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Opiniones"
            title="Clientas que vuelven a reconocerse."
            text="Testimonios breves creados para el prototipo, con un tono realista y cuidado."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-warmWhite">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Preguntas habituales antes de reservar."
            text="Información clara para elegir mejor tu primera cita o consulta."
          />
          <FaqAccordion />
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
