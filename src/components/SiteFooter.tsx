import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { externalLinks } from '../config/links';
import { AppLink } from '../lib/routing';

const footerLinks = [
  { label: 'Servicios', to: '/servicios' },
  { label: 'Tratamientos', to: '/tratamientos' },
  { label: 'Tienda', to: '/tienda' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal px-5 pb-28 pt-14 text-warmWhite md:px-8 md:pb-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="images/kabod/logo.webp" alt="" className="h-12 w-12 rounded-full bg-warmWhite object-contain p-1" loading="lazy" />
            <p className="font-display text-4xl font-semibold">Kabod Hair</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-warmWhite/70">
            Peluquería premium en Madrid para color, balayage, tratamientos y cambios de look con asesoría personalizada.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-warmWhite/75">
            <a className="inline-flex items-center gap-2 hover:text-warmWhite" href="tel:+34919354807">
              <Phone size={16} /> +34 919 35 48 07
            </a>
            <a className="inline-flex items-center gap-2 hover:text-warmWhite" href="mailto:kabodhair@gmail.com">
              <Mail size={16} /> kabodhair@gmail.com
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-sand">Navegación</p>
          <nav className="grid gap-3 text-sm" aria-label="Navegación de pie de página">
            {footerLinks.map((link) => (
              <AppLink key={link.to} className="text-warmWhite/70 transition hover:text-warmWhite" to={link.to}>
                {link.label}
              </AppLink>
            ))}
          </nav>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-sand">Madrid</p>
          <p className="flex gap-2 text-sm leading-7 text-warmWhite/70">
            <MapPin className="mt-1 shrink-0" size={16} />
            Dos centros: Marroquina y Camino de los Vinateros.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-warmWhite hover:text-sand"
            href={externalLinks.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={17} /> Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1180px] border-t border-warmWhite/12 pt-6 text-xs text-warmWhite/50">
        Frontend demo. Reservas, tienda, formulario y asistente funcionan como prototipo visual.
      </div>
    </footer>
  );
}
