export default function EncabezadoEspecialidad({ titulo, descripcion, imagenSrc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{titulo}</h1>
          <div className="text-gray-700 space-y-2">
            {typeof descripcion === "string" ? (
              <p>{descripcion}</p>
            ) : (
              descripcion.map((parrafo, index) => <p key={index}>{parrafo}</p>)
            )}
          </div>
        </div>
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <img
            src={imagenSrc || "/placeholder.svg"}
            alt={`Imagen de ${titulo}`}
            className="rounded-full w-64 h-64 object-cover"
          />
        </div>
      </div>
    </div>
  )
}
