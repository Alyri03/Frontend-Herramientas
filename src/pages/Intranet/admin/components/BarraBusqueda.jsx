"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faFilter, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons"

export default function BarraBusqueda({ onBuscar, onFiltrar }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [mostrarFiltros, setMostrarFiltros] = useState(false)
  const [filtros, setFiltros] = useState({
    estado: "todos",
    genero: "todos",
    edadMin: 0,
    edadMax: 0,
    fechaDesde: "",
    fechaHasta: "",
  })

  const manejarCambio = (e) => {
    const valor = e.target.value
    setTerminoBusqueda(valor)
    onBuscar(valor)
  }

  const manejarCambioFiltro = (campo, valor) => {
    const nuevosFiltros = { ...filtros, [campo]: valor }
    setFiltros(nuevosFiltros)
    onFiltrar(nuevosFiltros)
  }

  const limpiarFiltros = () => {
    const filtrosVacios = {
      estado: "todos",
      genero: "todos",
      edadMin: 0,
      edadMax: 0,
      fechaDesde: "",
      fechaHasta: "",
    }
    setFiltros(filtrosVacios)
    onFiltrar(filtrosVacios)
  }

  const hayFiltrosActivos = () => {
    return (
      filtros.estado !== "todos" ||
      filtros.genero !== "todos" ||
      filtros.edadMin > 0 ||
      filtros.edadMax > 0 ||
      filtros.fechaDesde !== "" ||
      filtros.fechaHasta !== ""
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Buscar pacientes por nombre, ID o condición..."
            value={terminoBusqueda}
            onChange={manejarCambio}
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors whitespace-nowrap ${
              hayFiltrosActivos() ? "bg-blue-50 border-blue-300 text-blue-700" : "hover:bg-gray-50 border-gray-300"
            }`}
          >
            <FontAwesomeIcon icon={faFilter} />
            <span>Filtros</span>
            {hayFiltrosActivos() && (
              <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">Activos</span>
            )}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-transform ${mostrarFiltros ? "rotate-180" : ""}`}
            />
          </button>

          {/* Menú Desplegable de Filtros */}
          {mostrarFiltros && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-10">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Filtros Avanzados</h3>
                  <button
                    onClick={limpiarFiltros}
                    className="text-sm text-gray-600 hover:text-gray-800 flex items-center space-x-1"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                    <span>Limpiar</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Filtro por Estado */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                    <select
                      value={filtros.estado}
                      onChange={(e) => manejarCambioFiltro("estado", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="todos">Todos</option>
                      <option value="activo">Activo</option>
                      <option value="inactivo">Inactivo</option>
                    </select>
                  </div>

                  {/* Filtro por Género */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Género</label>
                    <select
                      value={filtros.genero}
                      onChange={(e) => manejarCambioFiltro("genero", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="todos">Todos</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                    </select>
                  </div>

                  {/* Rango de Edad */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Edad Mín.</label>
                      <input
                        type="number"
                        value={filtros.edadMin || ""}
                        onChange={(e) => manejarCambioFiltro("edadMin", Number.parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                        min="0"
                        max="120"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Edad Máx.</label>
                      <input
                        type="number"
                        value={filtros.edadMax || ""}
                        onChange={(e) => manejarCambioFiltro("edadMax", Number.parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="120"
                        min="0"
                        max="120"
                      />
                    </div>
                  </div>

                  {/* Rango de Fechas */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Desde</label>
                    <input
                      type="date"
                      value={filtros.fechaDesde}
                      onChange={(e) => manejarCambioFiltro("fechaDesde", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Hasta</label>
                    <input
                      type="date"
                      value={filtros.fechaHasta}
                      onChange={(e) => manejarCambioFiltro("fechaHasta", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
