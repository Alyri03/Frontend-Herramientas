import BannerHeader from "./components/BannerHeader";
import Breadcrumb from "./components/Breadcrumb";
import SearchBar from "./components/SearchBar";
import SpecialtyGrid from "./components/SpecialtyGrid";
import Preefooter from "@/components/Preefooter";
import Spinner from "@/components/Spinner";

import { useDatosEspecialidades } from "@/hooks/useDatosEspecialidades";

const PaginaEspecialidades = () => {
  const {
    especialidades,
    cargandoEspecialidades,
    errorEspecialidades,
    actualizarBusqueda,
  } = useDatosEspecialidades();

  return (
    <div className="min-h-screen bg-gray-100">
      <BannerHeader />
      <main className="container mx-auto px-4 py-6">
        <Breadcrumb />

        <div className="my-6">
          <SearchBar onSearch={actualizarBusqueda} />
        </div>

        {errorEspecialidades && (
          <p className="text-red-500">{errorEspecialidades}</p>
        )}

        {cargandoEspecialidades ? (
          <Spinner />
        ) : (
          <SpecialtyGrid especialidades={especialidades} />
        )}
      </main>

      <Preefooter />
    </div>
  );
};

export default PaginaEspecialidades;
