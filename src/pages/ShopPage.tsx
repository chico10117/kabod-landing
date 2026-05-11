import { ShoppingBag } from 'lucide-react';
import { useMemo, useState } from 'react';
import { BookingCTA } from '../components/BookingCTA';
import { Button } from '../components/Button';
import { CartDrawer } from '../components/CartDrawer';
import { ProductGrid } from '../components/ProductGrid';
import { SectionHeader } from '../components/SectionHeader';
import { productCategoryLabels, products } from '../data/products';
import type { CartLine, Product, ProductCategory } from '../types';

type ProductFilter = ProductCategory | 'all';

const filters = Object.entries(productCategoryLabels) as [ProductFilter, string][];

export function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>('all');
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartLine[]>([]);

  const visibleProducts = useMemo(
    () => (activeFilter === 'all' ? products : products.filter((product) => product.category === activeFilter)),
    [activeFilter],
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product: Product) => {
    setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...current, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const increment = (productId: string) => {
    setItems((current) => current.map((item) => (item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decrement = (productId: string) => {
    setItems((current) =>
      current
        .map((item) => (item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeader
              eyebrow="Tienda demo"
              title="Cuidado profesional seleccionado por Kabod."
              text="Productos mock para una experiencia ecommerce frontend. El carrito usa estado local y no procesa pagos."
            />
            <Button variant="secondary" icon={<ShoppingBag size={17} />} onClick={() => setCartOpen(true)}>
              Carrito ({itemCount})
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar productos">
            {filters.map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === value ? 'border-charcoal bg-charcoal text-warmWhite' : 'border-border bg-warmWhite text-muted hover:bg-cream'
                }`}
                onClick={() => setActiveFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <ProductGrid products={visibleProducts} onAdd={addToCart} />
          </div>
        </div>
      </section>
      <BookingCTA title="Productos y servicios con asesoría." text="Para una recomendación exacta, consulta con Kabod antes de elegir tu rutina." />
      <CartDrawer
        isOpen={cartOpen}
        items={items}
        onClose={() => setCartOpen(false)}
        onIncrement={increment}
        onDecrement={decrement}
      />
    </>
  );
}
