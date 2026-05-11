import { ShoppingBag } from 'lucide-react';
import type { Product } from '../types';
import { Button } from './Button';
import { VisualPlaceholder } from './VisualPlaceholder';

type ProductCardProps = {
  product: Product;
  onAdd?: (product: Product) => void;
};

const formatPrice = (price: number) => `${price.toFixed(2).replace('.', ',')}€`;

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const disabled = product.stockStatus === 'sold-out';

  return (
    <article className="group flex h-full flex-col border border-border bg-warmWhite shadow-sm transition duration-200 hover:-translate-y-1 hover:border-caramel hover:shadow-soft">
      <VisualPlaceholder alt={`Cuidado profesional para ${product.name}`} src={product.image} tone="sage" className="aspect-[4/3] w-full">
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-warmWhite px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-clay shadow-sm">
            {product.badge}
          </span>
        ) : null}
      </VisualPlaceholder>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-none text-charcoal">{product.name}</h3>
          <span className="whitespace-nowrap text-sm font-bold text-coffee">{formatPrice(product.price)}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-taupe">
          {product.stockStatus === 'low-stock' ? 'Últimas unidades' : product.stockStatus === 'sold-out' ? 'Agotado' : 'Disponible'}
        </p>
        <Button
          className="mt-auto w-full"
          disabled={disabled}
          icon={<ShoppingBag size={16} />}
          onClick={() => onAdd?.(product)}
          size="sm"
          variant="secondary"
        >
          {disabled ? 'No disponible' : 'Añadir al carrito'}
        </Button>
      </div>
    </article>
  );
}
