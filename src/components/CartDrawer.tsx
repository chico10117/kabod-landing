import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { externalLinks } from '../config/links';
import type { CartLine } from '../types';
import { Button } from './Button';

type CartDrawerProps = {
  isOpen: boolean;
  items: CartLine[];
  onClose: () => void;
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
};

const formatPrice = (price: number) => `${price.toFixed(2).replace('.', ',')}€`;

export function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Carrito demo">
      <button className="absolute inset-0 drawer-backdrop" aria-label="Cerrar carrito" onClick={onClose} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border bg-warmWhite shadow-salon">
        <div className="flex items-center justify-between border-b border-border p-5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} />
            <h2 className="font-display text-3xl font-semibold">Carrito demo</h2>
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            type="button"
            aria-label="Cerrar carrito"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <p className="rounded-[4px] border border-border bg-cream p-5 text-sm leading-7 text-muted">
              Tu carrito está vacío. Añade productos para preparar una solicitud demo.
            </p>
          ) : (
            <div className="grid gap-4">
              {items.map((item) => (
                <div key={item.product.id} className="border border-border bg-warmWhite p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-charcoal">{item.product.name}</p>
                      <p className="mt-1 text-sm text-muted">{formatPrice(item.product.price)}</p>
                    </div>
                    <p className="font-bold text-coffee">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                  <div className="mt-4 inline-flex items-center border border-border">
                    <button className="p-2 text-charcoal" type="button" aria-label="Reducir cantidad" onClick={() => onDecrement(item.product.id)}>
                      <Minus size={16} />
                    </button>
                    <span className="min-w-10 border-x border-border px-3 py-2 text-center text-sm font-semibold">{item.quantity}</span>
                    <button className="p-2 text-charcoal" type="button" aria-label="Aumentar cantidad" onClick={() => onIncrement(item.product.id)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border p-5">
          <div className="mb-4 flex items-center justify-between text-lg font-bold">
            <span>Total estimado</span>
            <span>{formatPrice(total)}</span>
          </div>
          <p className="mb-4 text-xs leading-5 text-muted">Demo frontend: no se procesa pago ni pedido real.</p>
          <Button href={externalLinks.whatsapp} className="w-full" variant="primary">
            Solicitar por WhatsApp
          </Button>
        </div>
      </aside>
    </div>
  );
}
