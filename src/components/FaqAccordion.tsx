import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Necesito una valoración antes de un cambio de look?',
    answer: 'Sí, es recomendable. Así podemos valorar el estado del cabello, tu objetivo, el mantenimiento y la técnica más adecuada.',
  },
  {
    question: '¿Cuánto dura un balayage?',
    answer: 'Depende del cabello y del resultado buscado. Como referencia, una sesión suele requerir varias horas y el mantenimiento se planifica de forma personalizada.',
  },
  {
    question: '¿Cómo puedo reservar cita?',
    answer: 'Puedes usar el botón de reserva demo o escribir por WhatsApp para recibir orientación inicial.',
  },
  {
    question: '¿Tenéis productos para cuidar el cabello en casa?',
    answer: 'Sí. La tienda demo muestra una selección de productos recomendados para mantener el cabello entre visitas.',
  },
  {
    question: '¿Puedo consultar por WhatsApp antes de reservar?',
    answer: 'Sí. Puedes enviar tus dudas y el equipo te orientará sobre servicios, tratamientos y disponibilidad.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-border border border-border bg-warmWhite">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-charcoal"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              {faq.question}
              <ChevronDown className={`shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} size={18} />
            </button>
            {isOpen ? <p className="px-5 pb-5 text-sm leading-7 text-muted">{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
