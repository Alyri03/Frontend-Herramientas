import SpecialtyCard from "./SpecialtyCard"

const SpecialtyGrid = ({ especialidades }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-4 px-4 justify-center items-center">
      {especialidades.map((especialidad) => (
        <div key={especialidad.id} className="flex justify-center items-center">
          <SpecialtyCard titulo={especialidad.titulo} icono={especialidad.icono} />
        </div>
      ))}
    </div>
  )
}

export default SpecialtyGrid