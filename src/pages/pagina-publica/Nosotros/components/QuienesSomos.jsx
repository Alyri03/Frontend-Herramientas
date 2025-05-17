const QuienesSomos = () => {
    return (
      <section className="relative overflow-hidden bg-[#005BEA] rounded-b-[60px]">
        {/* Gradiente decorativo */}
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-[#005BEA] to-[#5FC6FF] z-0" />
  
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-0 flex flex-col md:flex-row items-center gap-10">
  
          {/* Texto */}
          <div
            className="w-full md:w-1/2 space-y-6 text-white text-center md:text-left pb-8 md:pb-20"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug sm:leading-tight">
              Un ambiente cálido y humano para nuestros pacientes
            </h2>
  
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed sm:leading-loose">
              Clínica Regional Ica es una Institución privada de salud, promovida por la Congregación Misioneras del Sagrado Corazón de Jesús; es reconocida por su experiencia y calidad puesta al servicio de la comunidad, para la recuperación y cuidado de la salud. Somos una familia donde el personal calificado se une para brindar la mejor atención y calidad de servicio para nuestros pacientes.
            </p>
          </div>
  
          {/* Imagen */}
          <div
            className="w-full md:w-1/2 flex justify-center md:items-end md:self-end"
            data-aos="fade-left"
          >
            <img
              src="https://www.stellamaris.com.pe/uploads/shares/nosotros_web/Nosotros_-__462_X_760_px.jpg"
              alt="Atención médica humanizada"
              className="w-[280px] sm:w-[320px] md:w-[320px] lg:w-[360px] max-h-[500px] rounded-t-full object-cover"
            />
          </div>
  
        </div>
      </section>
    );
  };
  
  export default QuienesSomos;
  