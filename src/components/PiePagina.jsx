function PiePagina() {
  return (
    <footer id="contacto" className="mt-16 bg-mar-900 text-stone-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm sm:grid-cols-3">
        <div>
          <p className="font-titulo text-xl font-bold text-white">Luis Vargas</p>
          <p className="mt-2">Moda caribeña desde el Centro Histórico de Cartagena.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Visítanos</p>
          <p>Arjona, Bolívar · La maría</p>
          <p>Lunes a sábado, 9:00 a. m. a 7:00 p. m.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Escríbenos</p>
          <p>WhatsApp: 3213092513</p>
          <p>erickcantilloh@gmail.com</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-stone-400">
        © 2026 Luis Vargas · Proyecto formativo SENA ADSO
      </p>
    </footer>
  )
}

export default PiePagina

