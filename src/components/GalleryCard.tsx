import type { GalleryItem } from '../types';
import { VisualPlaceholder } from './VisualPlaceholder';

type GalleryCardProps = {
  item: GalleryItem;
};

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <article className="group overflow-hidden border border-border bg-warmWhite shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <VisualPlaceholder alt={item.alt} src={item.imageSrc} objectPosition={item.objectPosition} tone={item.tone} className="aspect-[4/5] w-full">
        {item.beforeAfter ? (
          <div className="absolute left-4 top-4 rounded-full bg-charcoal px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-warmWhite">
            Antes / Después
          </div>
        ) : null}
      </VisualPlaceholder>
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-clay">{item.tag}</span>
        <p className="mt-3 text-sm leading-7 text-muted">{item.caption}</p>
      </div>
    </article>
  );
}
