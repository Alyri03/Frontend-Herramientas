const BannerHeader = () => {
  return (
    <header className="bg-white py-16 px-4" data-aos="fade-down">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight text-left">
          Conoce todas nuestras
          <br className="hidden sm:block" />
          especialidades médicas.{" "}
          <span className="text-[#1B669A]">
            Tu salud
            <br className="hidden sm:block" />
            es nuestra prioridad
          </span>
        </h1>
      </div>
    </header>
  );
};

export default BannerHeader;
