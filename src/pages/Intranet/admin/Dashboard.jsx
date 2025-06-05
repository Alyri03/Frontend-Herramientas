"use client"

import EstadisticasPanel from "./components/EstadisticasPanel"
import CitasDeHoy from "./components/CitasDeHoy"

const Dashboard = () => {

  return (
    <div className="p-4 md:p-6">
      {}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Panel de Admin</h1>
      </div>
      
      {}
      <EstadisticasPanel />

      {}
      <CitasDeHoy />
    </div>
  )
}

export default Dashboard
