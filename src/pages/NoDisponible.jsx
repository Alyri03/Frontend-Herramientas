import img404 from '../assets/images/404NotFound.png';

const NoDisponible = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAEAFE] px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img404}
            alt="Error 404"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-xl tracking-widest font-medium text-gray-800">ERROR</h2>
          <h1 className="text-5xl font-bold text-black">404</h1>
          <p className="text-gray-600">
            Lo sentimos, no se puede acceder a la página que estás buscando.
            <br />
            Vuelve al inicio para continuar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoDisponible;
