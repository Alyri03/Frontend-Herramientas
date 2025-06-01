"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons"

const ModalPaciente = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    genero: "",
    telefono: "",
    email: "",
    direccion: "",
    contactoEmergencia: "",
    historiaMedica: "",
    alergias: "",
  })

  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false)

  const genderOptions = ["Masculino", "Femenino"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleGenderSelect = (gender) => {
    setFormData((prev) => ({
      ...prev,
      genero: gender,
    }))
    setIsGenderDropdownOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Datos del paciente:", formData)
    onClose()
  }

  const handleCancel = () => {
    setFormData({
      nombre: "",
      apellido: "",
      edad: "",
      genero: "",
      telefono: "",
      email: "",
      direccion: "",
      contactoEmergencia: "",
      historiaMedica: "",
      alergias: "",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold">Añadir Nuevo Paciente</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
              <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required/>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Edad</label>
              <input type="number" name="edad" value={formData.edad} onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Género</label>
              <div className="relative">
                <button type="button" onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex justify-between items-center">
                  <span className={formData.genero ? "text-gray-900" : "text-gray-500"}>
                    {formData.genero || "Seleccionar género"}
                  </span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-gray-400" />
                </button>
                {isGenderDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {genderOptions.map((option) => (
                      <button key={option} type="button" onClick={() => handleGenderSelect(option)}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required/>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
            <input type="text" name="direccion" value={formData.direccion} onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Contacto de Emergencia</label>
            <input type="text" name="contactoEmergencia" value={formData.contactoEmergencia} onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Historia Médica</label>
            <textarea name="historiaMedica" value={formData.historiaMedica} onChange={handleInputChange} rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"/>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Alergias</label>
            <textarea name="alergias" value={formData.alergias} onChange={handleInputChange} rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"/>
          </div>
          <div className="flex justify-end gap-3">
            <button type="button" onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Cancelar
            </button>
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 transition-colors">
              Añadir Paciente
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalPaciente
