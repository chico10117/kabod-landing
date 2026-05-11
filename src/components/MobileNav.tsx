import { X } from 'lucide-react';
import { AppLink, useRouter } from '../lib/routing';
import type { NavItem } from './SiteHeader';

type MobileNavProps = {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ navItems, isOpen, onClose }: MobileNavProps) {
  const { isActive } = useRouter();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Menú principal">
      <button className="absolute inset-0 drawer-backdrop" aria-label="Cerrar menú" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[84vw] max-w-sm border-l border-border bg-warmWhite p-6 shadow-salon">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-3xl font-semibold">Kabod Hair</span>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-charcoal"
            type="button"
            aria-label="Cerrar menú"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex flex-col gap-2" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <AppLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`rounded-[4px] px-3 py-3 text-base font-semibold transition ${
                isActive(item.to) ? 'bg-cream text-charcoal' : 'text-muted hover:bg-cream hover:text-charcoal'
              }`}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
