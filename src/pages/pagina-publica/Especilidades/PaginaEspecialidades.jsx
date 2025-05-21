import { useState, useEffect } from "react";
import { obtenerEspecialidades } from "@/services/especialidadesService";

import BannerHeader from "./components/BannerHeader";
import Breadcrumb from "./components/Breadcrumb";
import SearchBar from "./components/SearchBar";
import SpecialtyGrid from "./components/SpecialtyGrid";
import Preefooter from "@/components/Preefooter";
import Spinner from "@/components/Spinner"; // ✅ import del spinner

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
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  "Medicina General": faStethoscope,
  "Traumatología": faBone,
  "Pediatría": faChild,
  "Urología": faHospitalUser,
  "Ginecología y Obstetricia": faVenusMars,
  "Cirugía General": faUserDoctor,
  "Neurología": faBrain,
  "Neurocirugía": faBrain,
  "Medicina física": faUserNurse,
  "Medicina Interna": faNotesMedical,
  "Cardiología": faHeartPulse,
  "Flebología": faLungs,
  "Gastroenterología": faStethoscope,
  "Otorrinolaringología": faEye,
  "Nutrición": faAppleAlt,
  "Psicología": faHeadSideVirus,
};

const PaginaEspecialidades = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [especialidades, setEspecialidades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerEspecialidades()
      .then((data) => {
        const especialidadesConIconos = data.map((item) => ({
          ...item,
          icono: iconMap[item.nombre] || faStethoscope,
        }));
        setEspecialidades(especialidadesConIconos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar especialidades:", error);
        setError("Error al cargar los datos.");
        setLoading(false);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredEspecialidades = especialidades.filter((especialidad) =>
    especialidad.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <BannerHeader />
      <main className="container mx-auto px-4 py-6">
        <Breadcrumb />

        <div className="my-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {loading ? (
          <Spinner />
        ) : (
          <SpecialtyGrid especialidades={filteredEspecialidades} />
        )}
      </main>

      <Preefooter />
    </div>
  );
};

export default PaginaEspecialidades;
