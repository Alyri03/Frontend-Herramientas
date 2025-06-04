import { useParams } from "react-router-dom";
import { useDatosEspecialidades } from "@/hooks/useDatosEspecialidades";

import EncabezadoEspecialidad from "./components/EmcabezadoEspecialidades";
import CardMedico from "../Medicos/components/CardMedico";
import Preefooter from "@/components/Preefooter";
import Spinner from "@/components/Spinner";

export default function DetalleEspecialidades() {
  const { id } = useParams();
  const {
    especialidad,
    medicos,
    cargandoDetalle,
    errorDetalle,
  } = useDatosEspecialidades(id);

  if (cargandoDetalle) return <Spinner />;
  if (!especialidad || errorDetalle) {
    return (
      <p className="text-center text-red-500 py-10">
        Especialidad no encontrada
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Encabezado dinámico */}
      <section className="mb-16">
        <EncabezadoEspecialidad
          titulo={especialidad.nombre}
          descripcion={especialidad.descripcion}
          imagenSrc={especialidad.imagen}
        />
      </section>

      {/* Médicos de la especialidad */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Los especialistas en {especialidad.nombre?.toLowerCase()}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicos.map((medico) => (
            <CardMedico
              key={medico.medicoId}
              id={medico.medicoId}
              nombre={medico.nombreMedico}
              especialidad={medico.nombreEspecialidad}
              codigo={medico.numeroColegiatura}
              imagen={medico.imagen}
            />
          ))}
        </div>
      </section>

      <Preefooter />
    </div>
  );
}
