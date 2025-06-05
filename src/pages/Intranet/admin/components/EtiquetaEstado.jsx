export default function EtiquetaEstado({ estado }) {
  let colorFondo = ""
  let colorTexto = "text-white"

  switch (estado.toLowerCase()) {
    case "activo":
      colorFondo = "bg-green-600"
      break
    case "inactivo":
      colorFondo = "bg-gray-800"
      break
    default:
      colorFondo = "bg-gray-300"
      colorTexto = "text-gray-700"
  }

  return <span className={`${colorFondo} ${colorTexto} px-3 py-1 rounded-full text-sm font-medium`}>{estado}</span>
}
