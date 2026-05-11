import type { Treatment } from '../types';

export const treatments: Treatment[] = [
  {
    id: 'deep-nutrition',
    title: 'Nutrición profunda',
    description: 'Ritual para devolver flexibilidad, suavidad y sensación de confort al cabello seco.',
    details: ['Diagnóstico previo', 'Selección de activos nutritivos', 'Recomendación de cuidado en casa'],
  },
  {
    id: 'hair-repair',
    title: 'Reparación capilar',
    description: 'Cuidado enfocado en cabellos sensibilizados por color, calor o procesos técnicos.',
    details: ['Rutina adaptada al daño visible', 'Acabado más disciplinado', 'Plan de mantenimiento'],
  },
  {
    id: 'shine-softness',
    title: 'Brillo y suavidad',
    description: 'Tratamiento para mejorar el acabado, el tacto y la luminosidad del cabello.',
    details: ['Ideal antes de eventos', 'Compatible con color', 'Resultado pulido y natural'],
  },
  {
    id: 'frizz-control',
    title: 'Control de encrespamiento',
    description: 'Servicio para reducir frizz, facilitar el peinado y mantener movimiento natural.',
    details: ['Valoración de textura', 'Acabado flexible', 'Consejos para rutina diaria'],
  },
  {
    id: 'post-color',
    title: 'Mantenimiento post-color',
    description: 'Ritual para conservar matiz, brillo y salud visual después de balayage o coloración.',
    details: ['Matiz personalizado', 'Hidratación de apoyo', 'Plan entre visitas'],
  },
];
