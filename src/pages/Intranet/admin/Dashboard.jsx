"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import EstadisticasPanel from "./components/EstadisticasPanel"
import CitasDeHoy from "./components/CitasDeHoy"
import ModalAñadirPaciente from "./components/ModalPaciente"

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="p-4 md:p-6">
      {}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Panel de Admin</h1>
        <button
          onClick={openModal}
          className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
          Añadir Paciente
        </button>
      </div>

      {}
      <EstadisticasPanel />

      {}
      <CitasDeHoy />

      {}
      <ModalAñadirPaciente isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Dashboard
