import { MessageCircle } from 'lucide-react';
import { externalLinks } from '../config/links';

export function WhatsappFloatingButton() {
  return (
    <a
      href={externalLinks.whatsapp}
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-24 right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage text-warmWhite shadow-salon transition hover:-translate-y-1 hover:bg-coffee md:bottom-6 md:right-6"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={24} />
    </a>
  );
}
