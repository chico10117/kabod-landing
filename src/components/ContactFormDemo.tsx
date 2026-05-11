import { FormEvent, useState } from 'react';
import { Button } from './Button';

export function ContactFormDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="border border-border bg-warmWhite p-6 shadow-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-3xl font-semibold leading-none text-charcoal">Escríbenos</h2>
      <p className="mt-3 text-sm leading-7 text-muted">Formulario demo. No se envía información a ningún servidor.</p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Nombre
          <input className="border border-border bg-warmWhite px-4 py-3 font-normal" name="name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Teléfono o email
          <input className="border border-border bg-warmWhite px-4 py-3 font-normal" name="contact" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          ¿Cómo podemos ayudarte?
          <textarea className="min-h-32 resize-y border border-border bg-warmWhite px-4 py-3 font-normal" name="message" required />
        </label>
      </div>
      {submitted ? (
        <p className="mt-5 border border-sage/35 bg-sage/10 px-4 py-3 text-sm font-semibold text-sage" role="status">
          Gracias. Este mensaje se ha registrado solo en el prototipo visual.
        </p>
      ) : null}
      <Button className="mt-6 w-full" type="submit">
        Enviar consulta demo
      </Button>
    </form>
  );
}
