import Preefooter from "@/components/Preefooter";
import InfoMedicos from "./components/InfoMedicos";
import Spinner from "@/components/Spinner";
import ReservaBusqueda from "./components/ReservaBusqueda";
import { useDatosMedico } from "@/hooks/useDatosMedico";

const EquipoMedico = () => {
  const {
    medicos,
    cargandoLista,
    errorLista,
    setBusqueda,
  } = useDatosMedico(); // sin ID → lista completa

  return (
    <>
      <ReservaBusqueda onSearch={setBusqueda} />
      {cargandoLista ? (
        <Spinner />
      ) : errorLista ? (
        <p className="text-center text-red-500">Error al cargar médicos</p>
      ) : (
        <InfoMedicos medicoss={medicos} />
      )}
      <Preefooter />
    </>
  );
};

export default EquipoMedico;
