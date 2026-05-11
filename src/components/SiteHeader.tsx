import { CalendarDays, Menu } from 'lucide-react';
import { useState } from 'react';
import { externalLinks } from '../config/links';
import { AppLink, useRouter } from '../lib/routing';
import { Button } from './Button';
import { MobileNav } from './MobileNav';

export type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Tratamientos', to: '/tratamientos' },
  { label: 'Tienda', to: '/tienda' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Sobre Kabod', to: '/sobre-kabod' },
  { label: 'Contacto', to: '/contacto' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isActive } = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-warmWhite/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-5 md:px-8">
        <AppLink to="/" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <img
            src="/images/kabod/logo.webp"
            alt=""
            className="h-12 w-12 rounded-full border border-border bg-warmWhite object-contain p-1 shadow-sm"
            loading="eager"
          />
          <span>
            <span className="block font-display text-3xl font-semibold leading-none tracking-normal">Kabod Hair</span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-muted sm:block">Madrid</span>
          </span>
        </AppLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <AppLink
              key={item.to}
              to={item.to}
              className={`rounded-[4px] px-3 py-2 text-sm font-semibold transition ${
                isActive(item.to) ? 'bg-cream text-charcoal' : 'text-muted hover:bg-cream hover:text-charcoal'
              }`}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href={externalLinks.koiboxBooking} icon={<CalendarDays size={17} />}>
            Reservar cita
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-charcoal md:hidden"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>
      <MobileNav navItems={navItems} isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
