"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faCalendarPlus, faSave, faUser, faClock, faStethoscope } from "@fortawesome/free-solid-svg-icons"

export default function ModalProgramarCita({ pacientes, onCerrar }) {
  const doctores = ["Dr. García", "Dr. López", "Dr. Martínez", "Dr. Rodríguez", "Dra. Fernández", "Dra. Morales"]

  const tiposCita = [
    { value: "consulta", label: "Consulta General" },
    { value: "seguimiento", label: "Seguimiento" },
    { value: "emergencia", label: "Emergencia" },
    { value: "especialista", label: "Especialista" },
    { value: "laboratorio", label: "Laboratorio" },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold flex items-center">
            <FontAwesomeIcon icon={faCalendarPlus} className="mr-2 text-blue-600" />
            Programar Nueva Cita
          </h2>
          <button onClick={onCerrar} className="text-gray-500 hover:text-gray-700 text-xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Selección de Paciente */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-600" />
              Información del Paciente
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Paciente *</label>
                <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Seleccione un paciente...</option>
                  {pacientes.map((paciente) => (
                    <option key={paciente.id} value={paciente.id}>
                      {paciente.id} - {paciente.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Detalles de la Cita */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-green-600" />
              Detalles de la Cita
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha *</label>
                <input type="date" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min={new Date().toISOString().split("T")[0]}/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hora *</label>
                <input type="time" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Cita *</label>
                <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {tiposCita.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Asignado *</label>
                <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Seleccione un doctor...</option>
                  {doctores.map((doctor) => (
                    <option key={doctor} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Motivo de la Cita *</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Control rutinario, Seguimiento, Consulta por síntomas"/>
              </div>
            </div>
          </div>

          {/* Notas Adicionales */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faStethoscope} className="mr-2 text-yellow-600" />
              Notas Adicionales
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Observaciones</label>
              <textarea className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3}
                placeholder="Notas adicionales, preparación especial"/>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-end space-x-4 p-6 border-t">
          <button onClick={onCerrar} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors">
            Cancelar
          </button>
          <button onClick={onCerrar} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <FontAwesomeIcon icon={faSave} />
            <span>Programar Cita</span>
          </button>
        </div>
      </div>
    </div>
  )
}