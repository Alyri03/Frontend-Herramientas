import CardServicio from "@/pages/pagina-publica/Servicios/components/CardServicio";
import Preefooter from "@/components/Preefooter";
import Spinner from "@/components/Spinner";
import { useDatosServicios } from "@/hooks/useDatosServicios";

const PaginaServicios = () => {
  const {
    servicios,
    cargandoServicios,
    errorServicios,
  } = useDatosServicios();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-6 px-4 py-16" data-aos="fade-down">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight text-left max-w-4xl mx-auto">
          Contamos con una amplia
          <br className="hidden sm:block" />
          variedad de <span className="text-[#1B669A]">servicios médicos</span>.
          <br className="hidden sm:block" />
          Al alcance de tus necesidades
        </h1>
      </div>

      {cargandoServicios ? (
        <div className="flex justify-center py-10">
          <Spinner size={10} />
        </div>
      ) : errorServicios ? (
        <p className="text-center text-red-500 py-10">
          Error al cargar los servicios.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {servicios.map((servicio, index) => (
            <CardServicio
              key={servicio.id}
              servicio={{
                ...servicio,
                colSpan: index === 0 ? "md:col-span-2" : "",
                aspectRatio:
                  index === 0
                    ? "aspect-[2/1] md:aspect-[2/1]"
                    : "aspect-square",
              }}
            />
          ))}
        </div>
      )}

      <Preefooter />
    </div>
  );
};

export default PaginaServicios;
