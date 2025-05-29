import CardEspecialidad from "../../../../components/CardEspecialidad"
import { Link } from "react-router-dom";

const SpecialtyGrid = ({ especialidades }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {especialidades.map((especialidad, index) => (
        <Link
          key={especialidad.id}
          className="flex justify-center items-center"
          data-aos="fade-up"
          to={`/detalle-especialidad/${especialidad.id}`}
          data-aos-delay={index * 50}
        >
          <CardEspecialidad
            titulo={especialidad.nombre}
            icono={especialidad.icono}
          />
        </Link>
      ))}
    </div>
  );
};

export default SpecialtyGrid;
