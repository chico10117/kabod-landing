import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'cut-wash',
    title: 'Corte y lavado',
    category: 'cut',
    description: 'Corte adaptado a tu rostro, textura natural y rutina diaria, con acabado pulido.',
    duration: '45 min',
    priceFrom: 'Desde 17€',
  },
  {
    id: 'wash-style',
    title: 'Lavado y peinado',
    category: 'styling',
    description: 'Preparación, lavado profesional y peinado con movimiento para cualquier ocasión.',
    duration: '40 min',
    priceFrom: 'Desde 18€',
  },
  {
    id: 'balayage',
    title: 'Balayage personalizado',
    category: 'color',
    description: 'Iluminación suave, estratégica y natural diseñada para favorecer tu tono y facciones.',
    duration: '3-4 h',
    priceFrom: 'Desde 100€',
    featured: true,
  },
  {
    id: 'highlights',
    title: 'Mechas / iluminación',
    category: 'color',
    description: 'Luz controlada, contraste equilibrado y acabado elegante sin perder salud capilar.',
    duration: '3 h',
    priceFrom: 'Desde 100€',
  },
  {
    id: 'nutritive-treatment',
    title: 'Tratamiento capilar nutritivo',
    category: 'treatment',
    description: 'Ritual de nutrición para aportar suavidad, brillo y un tacto más flexible.',
    duration: '45 min',
    priceFrom: 'Desde 30€',
  },
  {
    id: 'event-pack',
    title: 'Peinado y maquillaje pack',
    category: 'events',
    description: 'Look completo para eventos con asesoría de estilo y acabado de larga duración.',
    duration: '2 h',
    priceFrom: 'Desde 150€',
  },
  {
    id: 'personal-color',
    title: 'Coloración personalizada',
    category: 'color',
    description: 'Color global, matiz o corrección con diagnóstico previo y selección precisa del tono.',
    duration: '2 h',
    priceFrom: 'Consultar',
  },
  {
    id: 'look-consulting',
    title: 'Asesoría de cambio de look',
    category: 'cut',
    description: 'Valoración completa para definir corte, color y mantenimiento antes de transformar.',
    duration: '30 min',
    priceFrom: 'Consultar',
    featured: true,
  },
];

export const serviceCategoryLabels = {
  all: 'Todos',
  color: 'Color',
  cut: 'Corte',
  treatment: 'Tratamientos',
  styling: 'Peinados',
  events: 'Eventos',
} as const;
