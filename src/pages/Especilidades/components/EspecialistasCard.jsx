import { ArrowRight } from "lucide-react"

export default function EspecialistaCard({ nombre, titulo, imagen }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
      <div className="h-48 overflow-hidden">
        <img src={imagen || "/placeholder.svg"} alt={nombre} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{nombre}</h3>
        <p className="text-gray-500 text-sm">{titulo}</p>
        <a href="#" className="mt-2 inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800">
          Conoce al médico
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
