import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AtencionMedica = () => {
  return (
    <>
      <section className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {}
          <div className="flex-1">
            <Link
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition mb-2" to="/intranet/medico">
              <ArrowLeft className="mr-1" /> Volver a mi agenda
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              Atención Médica
            </h1>
            <p className="text-sm md:text-base text-gray-700">
              Cita con <strong>Luis Enrique Martínez</strong> - Lunes, 24 de Mayo a las 09:00 AM
            </p>
          </div>
          {}
          <div className="md:w-auto w-full flex justify-start md:justify-end">
            <span className="px-3 py-1 rounded-xl bg-amber-100 text-amber-700 text-sm font-medium">
              En atención
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AtencionMedica;