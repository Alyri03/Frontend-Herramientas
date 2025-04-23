import CardEspecialidad from "../../../components/CardEspecialidad";

const SpecialtyGrid = ({ especialidades }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {especialidades.map((especialidad, index) => (
        <div
          key={especialidad.id}
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay={index * 50}
        >
          <CardEspecialidad
            titulo={especialidad.titulo}
            icono={especialidad.icono}
          />
        </div>
      ))}
    </div>
  );
};

export default SpecialtyGrid;
