"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faUser,
  faHeartbeat,
  faHistory,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCalendarAlt,
  faTint,
  faAllergies,
  faPills,
} from "@fortawesome/free-solid-svg-icons"

export default function ModalDetallePaciente({ paciente, onCerrar }) {
  const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString)
    return fecha.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Detalles del Paciente</h2>
          <button onClick={onCerrar} className="text-gray-500 hover:text-gray-700 text-xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-600" />
              Información Personal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ID Paciente</label>
                <p className="text-gray-900">{paciente.id}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <p className="text-gray-900">{paciente.nombre}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                <p className="text-gray-900 flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-gray-500" />
                  {formatearFecha(paciente.fechaNacimiento)}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Edad</label>
                <p className="text-gray-900">{paciente.edad} años</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Género</label>
                <p className="text-gray-900">{paciente.genero}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                <p className="text-gray-900 flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-500" />
                  {paciente.telefono}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="text-gray-900 flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-500" />
                  {paciente.email}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Dirección</label>
                <p className="text-gray-900 flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-500" />
                  {paciente.direccion}
                </p>
              </div>
            </div>
          </div>
          {}
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faHeartbeat} className="mr-2 text-red-600" />
              Información Médica
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Condición Principal</label>
                <p className="text-gray-900">{paciente.condicion}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tipo de Sangre</label>
                <p className="text-gray-900 flex items-center">
                  <FontAwesomeIcon icon={faTint} className="mr-2 text-red-500" />
                  {paciente.tipoSangre}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Alergias</label>
                <p className="text-gray-900 flex items-center">
                  <FontAwesomeIcon icon={faAllergies} className="mr-2 text-orange-500" />
                  {paciente.alergias}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Medicamentos Actuales</label>
                <p className="text-gray-900 flex items-center">
                  <FontAwesomeIcon icon={faPills} className="mr-2 text-green-500" />
                  {paciente.medicamentos}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Estado</label>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    paciente.estado === "Activo" ? "bg-black text-white" : "bg-gray-400 text-white"
                  }`}
                >
                  {paciente.estado}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Última Visita</label>
                <p className="text-gray-900">{formatearFecha(paciente.ultimaVisita)}</p>
              </div>
            </div>
          </div>

          {}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faHistory} className="mr-2 text-green-600" />
              Historial de Visitas
            </h3>
            <div className="space-y-3">
              {paciente.historialVisitas.map((visita, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{visita.motivo}</p>
                      <p className="text-sm text-gray-600">Doctor: {visita.doctor}</p>
                    </div>
                    <span className="text-sm text-gray-500">{formatearFecha(visita.fecha)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {}
        <div className="flex justify-end p-6 border-t">
          <button onClick={onCerrar} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
