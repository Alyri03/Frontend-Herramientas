import CardEspecialidad from "../../../components/CardEspecialidad"
const SpecialtyGrid = ({ especialidades }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {especialidades.map((especialidad) => (
        <div key={especialidad.id} className="flex justify-center items-center">
          <CardEspecialidad titulo={especialidad.titulo} icono={especialidad.icono} />
        </div>
      ))}
    </div>
  )
}

export default SpecialtyGrid