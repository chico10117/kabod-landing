import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Button } from './Button';

type ChatMessage = {
  role: 'assistant' | 'user';
  text: string;
};

const greeting = 'Hola, soy el Asistente Kabod. Puedo orientarte sobre servicios, tratamientos, productos y reservas.';
const quickChips = ['¿Qué servicio necesito?', 'Quiero reservar cita', 'Tengo el cabello seco', 'Me interesa un balayage', 'Productos recomendados'];

function createResponse(message: string) {
  const normalized = message.toLowerCase();

  if (normalized.includes('balayage')) {
    return 'El balayage ilumina el cabello de forma personalizada y suele requerir valoración previa para ajustar tono, técnica y mantenimiento. Te recomendamos reservar una consulta.';
  }
  if (normalized.includes('reserva') || normalized.includes('cita')) {
    return 'Puedes usar el botón de reserva demo o escribirnos por WhatsApp. En el salón te ayudaremos a elegir servicio y horario.';
  }
  if (normalized.includes('seco') || normalized.includes('dañado') || normalized.includes('frizz')) {
    return 'Para sequedad, daño o frizz, lo ideal es valorar tu cabello y elegir un tratamiento nutritivo o reparador personalizado.';
  }
  if (normalized.includes('producto')) {
    return 'En la tienda demo encontrarás productos seleccionados para mantener brillo, suavidad y cuidado profesional entre visitas.';
  }

  return 'Puedo orientarte de forma inicial. Para una recomendación exacta, el equipo de Kabod puede valorar tu cabello y ayudarte a elegir el servicio ideal.';
}

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'assistant', text: greeting }]);

  const sendMessage = (message: string) => {
    const trimmed = message.trim();
    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmed },
      { role: 'assistant', text: createResponse(trimmed) },
    ]);
    setInput('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? 'Cerrar Asistente Kabod' : 'Abrir Asistente Kabod'}
        className="fixed bottom-40 right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-warmWhite shadow-salon transition hover:-translate-y-1 hover:bg-coffee md:bottom-24 md:right-6"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={22} /> : <Bot size={23} />}
      </button>

      {isOpen ? (
        <section
          className="fixed bottom-56 right-4 z-40 flex max-h-[68vh] w-[calc(100vw-2rem)] max-w-sm flex-col border border-border bg-warmWhite shadow-salon md:bottom-40 md:right-6"
          aria-label="Asistente Kabod"
        >
          <header className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-coffee">
                <MessageCircle size={18} />
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold leading-none">Asistente Kabod</h2>
                <p className="text-xs text-muted">Demo frontend</p>
              </div>
            </div>
            <button className="rounded-full p-2 text-muted hover:bg-cream" type="button" aria-label="Cerrar chat" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[86%] px-4 py-3 text-sm leading-6 ${
                  message.role === 'assistant' ? 'bg-cream text-charcoal' : 'ml-auto bg-charcoal text-warmWhite'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-border p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickChips.map((chip) => (
                <button
                  key={chip}
                  className="shrink-0 rounded-full border border-border bg-warmWhite px-3 py-1.5 text-xs font-semibold text-coffee hover:bg-cream"
                  type="button"
                  onClick={() => sendMessage(chip)}
                >
                  {chip}
                </button>
              ))}
            </div>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <input
                className="min-w-0 flex-1 border border-border bg-warmWhite px-3 py-2 text-sm text-charcoal"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe tu duda"
                aria-label="Mensaje para el asistente"
              />
              <Button aria-label="Enviar mensaje" size="sm" type="submit">
                <Send size={16} />
              </Button>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
}
