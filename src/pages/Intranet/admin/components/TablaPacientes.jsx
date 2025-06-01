"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEdit,
  faEllipsisV,
  faPhone,
  faEnvelope,
  faUserSlash,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import EtiquetaEstado from "./EtiquetaEstado"

export default function TablaPacientes({ pacientes, onVerDetalle, onEditar }) {
  const [menuAbierto, setMenuAbierto] = useState(null)

  const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString)
    return fecha.toISOString().split("T")[0]
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
              ID Paciente
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
              Edad/Género
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
              Contacto
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
              Última Visita
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
              Condición
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
              Estado
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {pacientes.map((paciente) => (
            <tr key={paciente.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paciente.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paciente.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {paciente.edad} • {paciente.genero}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-400" />
                    <span>{paciente.telefono}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-400" />
                    <span>{paciente.email}</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatearFecha(paciente.ultimaVisita)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paciente.condicion}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <EtiquetaEstado estado={paciente.estado} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex space-x-3">
                  <button onClick={() => onVerDetalle(paciente)} className="text-gray-600 hover:text-blue-600 transition-colors"
                    title="Ver detalles">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button onClick={() => onEditar(paciente)} className="text-gray-600 hover:text-yellow-300 transition-colors"
                    title="Editar paciente">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <div className="relative">
                    <button onClick={() => setMenuAbierto(menuAbierto === paciente.id ? null : paciente.id)} className="text-gray-600 hover:text-gray-900 transition-colors"
                      title="Más opciones">
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>

                    {menuAbierto === paciente.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                        <div className="py-1">
                          <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <FontAwesomeIcon icon={faPhone} className="mr-3 text-green-600" />
                            Llamar
                          </button>
                          <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-600" />
                            Enviar Email
                          </button>
                          <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <FontAwesomeIcon icon={faUserSlash} className="mr-3 text-orange-600" />
                            {paciente.estado === "Activo" ? "Desactivar" : "Activar"}
                          </button>
                          <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <FontAwesomeIcon icon={faTrash} className="mr-3 text-red-600" />
                            Eliminar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
