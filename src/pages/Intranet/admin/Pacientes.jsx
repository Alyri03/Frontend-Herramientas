"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faCalendarPlus } from "@fortawesome/free-solid-svg-icons"
import TablaPacientes from "./components/TablaPacientes"
import BarraBusqueda from "./components/BarraBusqueda"
import ModalDetallePaciente from "./components/ModalDetallePaciente"
import ModalEditarPaciente from "./components/ModalEditarPaciente"
import ModalAñadirPaciente from "./components/ModalAnadir"
import ModalProgramarCita from "./components/ModalProgramarCita"

const pacientesEjemplo = [
  {
    id: "P001",
    nombre: "John Smith",
    edad: 45,
    genero: "Masculino",
    telefono: "(555) 123-4567",
    email: "john.smith@email.com",
    ultimaVisita: "2024-01-15",
    condicion: "Hipertensión",
    estado: "Activo",
    direccion: "123 Main St, Ciudad",
    fechaNacimiento: "1979-03-15",
    tipoSangre: "O+",
    alergias: "Penicilina",
    medicamentos: "Lisinopril 10mg",
    historialVisitas: [
      { fecha: "2024-01-15", motivo: "Control rutinario", doctor: "Dr. García" },
      { fecha: "2023-12-10", motivo: "Seguimiento hipertensión", doctor: "Dr. García" },
    ],
  },
  {
    id: "P002",
    nombre: "Emma Johnson",
    edad: 32,
    genero: "Femenino",
    telefono: "(555) 234-5678",
    email: "emma.j@email.com",
    ultimaVisita: "2024-01-20",
    condicion: "Diabetes",
    estado: "Activo",
    direccion: "456 Oak Ave, Ciudad",
    fechaNacimiento: "1992-07-22",
    tipoSangre: "A+",
    alergias: "Ninguna conocida",
    medicamentos: "Metformina 500mg",
    historialVisitas: [{ fecha: "2024-01-20", motivo: "Control diabetes", doctor: "Dr. López" }],
  },
  {
    id: "P003",
    nombre: "Michael Davis",
    edad: 28,
    genero: "Masculino",
    telefono: "(555) 345-6789",
    email: "m.davis@email.com",
    ultimaVisita: "2024-01-18",
    condicion: "Asma",
    estado: "Inactivo",
    direccion: "789 Pine St, Ciudad",
    fechaNacimiento: "1996-11-08",
    tipoSangre: "B+",
    alergias: "Polen, ácaros",
    medicamentos: "Salbutamol inhalador",
    historialVisitas: [{ fecha: "2024-01-18", motivo: "Crisis asmática", doctor: "Dr. Martínez" }],
  },
  {
    id: "P004",
    nombre: "Sarah Miller",
    edad: 55,
    genero: "Femenino",
    telefono: "(555) 456-7890",
    email: "sarah.miller@email.com",
    ultimaVisita: "2024-01-22",
    condicion: "Artritis",
    estado: "Activo",
    direccion: "321 Elm St, Ciudad",
    fechaNacimiento: "1969-04-12",
    tipoSangre: "AB+",
    alergias: "Aspirina",
    medicamentos: "Ibuprofeno 400mg",
    historialVisitas: [{ fecha: "2024-01-22", motivo: "Dolor articular", doctor: "Dr. Rodríguez" }],
  },
]

export default function Pacientes() {
  const [pacientesFiltrados, setPacientesFiltrados] = useState(pacientesEjemplo)
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null)
  const [pacienteEditando, setPacienteEditando] = useState(null)
  const [mostrarModalDetalle, setMostrarModalDetalle] = useState(false)
  const [mostrarModalEditar, setMostrarModalEditar] = useState(false)
  const [mostrarModalAñadir, setMostrarModalAñadir] = useState(false)
  const [mostrarModalCita, setMostrarModalCita] = useState(false)

  return (
    <div className="p-6 max-w-full mx-auto bg-white">
      <div className="flex flex-col space-y-6">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-3xl font-bold">Pacientes</h1>
          <button onClick={() => setMostrarModalAñadir(true)} className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <FontAwesomeIcon icon={faPlus}/>
            <span>Añadir Paciente</span>
          </button>
        </div>

        {/* Búsqueda y Filtros */}
        <div className="border rounded-lg p-6">
          <BarraBusqueda
            onBuscar={(termino) => {
              if (termino) {
                const filtrados = pacientesEjemplo.filter(
                  (p) =>
                    p.nombre.toLowerCase().includes(termino.toLowerCase()) ||
                    p.id.toLowerCase().includes(termino.toLowerCase()) ||
                    p.condicion.toLowerCase().includes(termino.toLowerCase()),
                )
                setPacientesFiltrados(filtrados)
              } else {
                setPacientesFiltrados(pacientesEjemplo)
              }
            }}
            onFiltrar={(filtros) => {
              let resultado = pacientesEjemplo

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
          <TablaPacientes pacientes={pacientesFiltrados}
            onVerDetalle={(paciente) => {
              setPacienteSeleccionado(paciente)
              setMostrarModalDetalle(true)
            }}
            onEditar={(paciente) => {
              setPacienteEditando(paciente)
              setMostrarModalEditar(true)
            }}/>
        </div>

        {/* Botón Programar Cita */}
        <div>
          <button onClick={() => setMostrarModalCita(true)} className="bg-black text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <FontAwesomeIcon icon={faCalendarPlus} />
            <span>Programar Cita</span>
          </button>
        </div>
      </div>
      {/* Modales */}
      {mostrarModalDetalle && pacienteSeleccionado && (
        <ModalDetallePaciente paciente={pacienteSeleccionado} onCerrar={() => setMostrarModalDetalle(false)} />
      )}

      {mostrarModalEditar && pacienteEditando && (
        <ModalEditarPaciente paciente={pacienteEditando} onCerrar={() => setMostrarModalEditar(false)} />
      )}

      {mostrarModalAñadir && <ModalAñadirPaciente onCerrar={() => setMostrarModalAñadir(false)} />}

      {mostrarModalCita && (
        <ModalProgramarCita pacientes={pacientesEjemplo} onCerrar={() => setMostrarModalCita(false)} />
      )}
    </div>
  )
}
