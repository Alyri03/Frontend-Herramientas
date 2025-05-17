

import { useState } from "react";
import BannerHeader from "@/pages/pagina-publica/Especilidades/components/BannerHeader";
import Breadcrumb from "@/pages/pagina-publica/Especilidades/components/Breadcrumb";
import SearchBar from "@/pages/pagina-publica/Especilidades/components/SearchBar";
import SpecialtyGrid from "@/pages/pagina-publica/Especilidades/components/SpecialtyGrid";
import Preefooter from "@/components/Preefooter";

import {
  faStethoscope,
  faBone,
  faChild,
  faHospitalUser,
  faVenusMars,
  faUserDoctor,
  faBrain,
  faUserNurse,
  faNotesMedical,
  faHeartPulse,
  faLungs,
  faEye,
  faAppleAlt,
  faHeadSideVirus,
} from "@fortawesome/free-solid-svg-icons"

const PaginaEspecialidades = () => {
  const [searchTerm, setSearchTerm] = useState("")

  // Lista de especialidades médicas con los iconos de Font Awesome
  const especialidades = [
    { id: 1, titulo: "Medicina General", icono: faStethoscope },
    { id: 2, titulo: "Traumatología", icono: faBone },
    { id: 3, titulo: "Pediatría", icono: faChild },
    { id: 4, titulo: "Urología", icono: faHospitalUser },
    { id: 5, titulo: "Ginecología y Obstetricia", icono: faVenusMars },
    { id: 6, titulo: "Cirugía General", icono: faUserDoctor },
    { id: 7, titulo: "Neurología", icono: faBrain },
    { id: 8, titulo: "Neurocirugía", icono: faBrain },
    { id: 9, titulo: "Medicina física", icono: faUserNurse },
    { id: 10, titulo: "Medicina Interna", icono: faNotesMedical },
    { id: 11, titulo: "Cardiología", icono: faHeartPulse },
    { id: 12, titulo: "Flebología", icono: faLungs },
    { id: 13, titulo: "Gastroenterología", icono: faStethoscope },
    { id: 14, titulo: "Otorrinolaringología", icono: faEye },
    { id: 15, titulo: "Nutrición", icono: faAppleAlt },
    { id: 16, titulo: "Psicología", icono: faHeadSideVirus },
  ]

  // Filtrar especialidades basado en el término de búsqueda
  const filteredEspecialidades = especialidades.filter((especialidad) =>
    especialidad.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header con título y subtítulo */}
      <BannerHeader />

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Barra de búsqueda */}
        <div className="my-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Grid de especialidades */}
        <SpecialtyGrid especialidades={filteredEspecialidades} />
      </main>
      <Preefooter/>
    </div>
  )
}

export default PaginaEspecialidades
