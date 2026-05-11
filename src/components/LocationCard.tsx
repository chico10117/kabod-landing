import { MapPin } from 'lucide-react';
import type { Location } from '../types';
import { Button } from './Button';

type LocationCardProps = {
  location: Location;
};

export function LocationCard({ location }: LocationCardProps) {
  return (
    <article className="border border-border bg-warmWhite p-6 shadow-sm">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-coffee">
        <MapPin size={20} />
      </div>
      <h3 className="font-display text-3xl font-semibold leading-none text-charcoal">{location.name}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{location.address}</p>
      <ul className="mt-5 space-y-2 text-sm text-coffee">
        {location.hours.map((hour) => (
          <li key={hour}>{hour}</li>
        ))}
      </ul>
      <Button href="#booking-demo" className="mt-6 w-full" variant="secondary">
        Reservar en este centro
      </Button>
    </article>
  );
}
