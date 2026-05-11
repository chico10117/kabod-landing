const trustItems = ['+10 años de experiencia', 'Dos centros en Madrid', 'Asesoría personalizada', 'Reserva fácil online'];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-warmWhite/72 px-5 py-5 md:px-8">
      <div className="mx-auto grid max-w-[1180px] gap-4 text-sm font-semibold text-coffee sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-clay" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
