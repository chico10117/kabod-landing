import type { Product } from '../types';
import { ProductCard } from './ProductCard';

type ProductGridProps = {
  products: Product[];
  onAdd?: (product: Product) => void;
};

export function ProductGrid({ products, onAdd }: ProductGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
