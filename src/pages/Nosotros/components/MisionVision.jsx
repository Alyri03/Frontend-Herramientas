const MisionVision = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-24 space-y-24">
        
        {/* Misión y Visión */}
        <div className="flex flex-col md:flex-row gap-32 md:gap-40">
          
          {/* Misión */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Misión</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              En Clínica Regional Ica, nos dedicamos a ofrecer atención médica de calidad, con un enfoque humano y profesional. Brindamos un servicio integral que prioriza el bienestar de nuestros pacientes, garantizando un trato cercano, respetuoso y eficiente en todas nuestras especialidades.
            </p>
          </div>
  
          {/* Visión */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Visión</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              Ser la clínica líder en Ica, reconocida por su excelencia médica y compromiso con la comunidad, brindando atención de calidad e innovación continua.
            </p>
          </div>
        </div>
  
        {/* Frase */}
        <div className="text-center px-4" data-aos="fade-up">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug max-w-5xl mx-auto">
            “Tu salud es nuestra prioridad, porque en Clínica Regional Ica, cada paciente es tratado con el cuidado y compromiso que merece.”
          </p>
        </div>
  
      </section>
    );
  };
  
  export default MisionVision;
  