"use client"
import React from 'react';
import { useState } from "react"
import { usePacientes } from "../hooks/usePacientes" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faCalendarPlus } from "@fortawesome/free-solid-svg-icons"
import TablaPacientes from "./components/TablaPacientes"
import BarraBusqueda from "./components/BarraBusqueda"
import ModalDetallePaciente from "./components/ModalDetallePaciente"
import ModalEditarPaciente from "./components/ModalEditarPaciente"

export default function Pacientes() {
  const { pacientes, isLoading, error } = usePacientes()

  const [pacientesFiltrados, setPacientesFiltrados] = useState([])
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null)
  const [pacienteEditando, setPacienteEditando] = useState(null)
  const [mostrarModalDetalle, setMostrarModalDetalle] = useState(false)
  const [mostrarModalEditar, setMostrarModalEditar] = useState(false)

  React.useEffect(() => {
    if (pacientes) setPacientesFiltrados(pacientes)
  }, [pacientes])

  if (isLoading) return <p>Cargando pacientes...</p>
  if (error) return <p>Error al cargar pacientes: {error.message}</p>

  return (
    <div className="p-6 max-w-full mx-auto bg-white">
      <div className="flex flex-col space-y-6">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-3xl font-bold">Pacientes</h1>
        </div>

        {/* Búsqueda y Filtros */}
        <div className="border rounded-lg p-6">
          <BarraBusqueda
            onBuscar={(termino) => {
              if (termino) {
                const filtrados = pacientes.filter(
                  (p) =>
                    p.nombre.toLowerCase().includes(termino.toLowerCase()) ||
                    p.id.toLowerCase().includes(termino.toLowerCase()) ||
                    p.condicion.toLowerCase().includes(termino.toLowerCase()),
                )
                setPacientesFiltrados(filtrados)
              } else {
                setPacientesFiltrados(pacientes)
              }
            }}
            onFiltrar={(filtros) => {
              let resultado = pacientes

              if (filtros.estado && filtros.estado !== "todos") {
                resultado = resultado.filter((p) => p.estado.toLowerCase() === filtros.estado.toLowerCase())
              }
              if (filtros.genero && filtros.genero !== "todos") {
                resultado = resultado.filter((p) => p.genero.toLowerCase() === filtros.genero.toLowerCase())
              }
              if (filtros.edadMin > 0) {
                resultado = resultado.filter((p) => p.edad >= filtros.edadMin)
              }
              if (filtros.edadMax > 0) {
                resultado = resultado.filter((p) => p.edad <= filtros.edadMax)
              }

              setPacientesFiltrados(resultado)
            }}
          />
        </div>

        {/* Registros de Pacientes */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Registros de Pacientes ({pacientesFiltrados.length})</h2>
          <TablaPacientes
            pacientes={pacientesFiltrados}
            onVerDetalle={(paciente) => {
              setPacienteSeleccionado(paciente)
              setMostrarModalDetalle(true)
            }}
            onEditar={(paciente) => {
              setPacienteEditando(paciente)
              setMostrarModalEditar(true)
            }}
          />
        </div>
      </div>

      {/* Modales */}
      {mostrarModalDetalle && pacienteSeleccionado && (
        <ModalDetallePaciente paciente={pacienteSeleccionado} onCerrar={() => setMostrarModalDetalle(false)} />
      )}

      {mostrarModalEditar && pacienteEditando && (
        <ModalEditarPaciente paciente={pacienteEditando} onCerrar={() => setMostrarModalEditar(false)} />
      )}

    </div>
  )
}
