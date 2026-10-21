function Portada() {
  return (
    <section className="bg-mar-900">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-widest text-marca-500 uppercase">
            Nueva colección 2026
          </p>
          <h1 className="font-titulo text-4xl leading-tight font-bold text-white md:text-5xl">
            Moda urbana con carácter
          </h1>
          <p className="mt-4 max-w-md text-stone-300">
            Buzos, jeans, accesorios y más. Haz tu pedido en línea y recíbelo en
            casa.
          </p>
          <a
            href="#catalogo"
            className="mt-6 inline-block rounded-full bg-marca-500 px-6 py-3 font-semibold
              text-white shadow hover:bg-marca-600"
          >
            Ver colección
          </a>
        </div>
        <img
          src="/img/portada.svg"
          alt="Prendas de la nueva colección"
          className="w-full max-w-md h-96 object-cover object-top rounded-2xl shadow-lg"
        />
      </div>
    </section>
  )
}

export default Portada