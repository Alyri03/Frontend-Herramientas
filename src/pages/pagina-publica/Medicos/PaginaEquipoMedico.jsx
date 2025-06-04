import { useEffect, useState } from "react";
import Preefooter from "@/components/Preefooter";
import InfoMedicos from "./components/InfoMedicos";
import Spinner from "@/components/Spinner";
import ReservaBusqueda from "./components/ReservaBusqueda";
import { medicoEspecialidad, obtenerTodosLosMedicos } from "@/services/equipoMedicoService";

const EquipoMedico = () => {
  const [buscarMedicos, setBuscarMedicos] = useState("");
  const [loading, setLoading] = useState(true);
  const [medicosFusionados, setMedicosFusionados] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      setLoading(true);
      try {
        const [especialidades, medicos] = await Promise.all([
          medicoEspecialidad(),
          obtenerTodosLosMedicos(),
        ]);

        // Fusionamos los datos por ID
        const fusionados = especialidades.map((esp) => {
          const medico = medicos.find((m) => m.id === esp.medicoId);
          return {
            ...esp,
            imagen: medico?.imagen || "", // si no hay imagen, queda vacío
          };
        });

        setMedicosFusionados(fusionados);
      } catch (error) {
        console.error("Error al fusionar datos médicos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  const filtrarMedicos = medicosFusionados.filter((medico) => {
    return (
      medico.nombreMedico.toLowerCase().includes(buscarMedicos.toLowerCase()) ||
      medico.nombreEspecialidad.toLowerCase().includes(buscarMedicos.toLowerCase())
    );
  });

  return (
    <>
      <ReservaBusqueda onSearch={setBuscarMedicos} />
      {loading ? <Spinner /> : <InfoMedicos medicoss={filtrarMedicos} />}
      <Preefooter />
    </>
  );
};

export default EquipoMedico;
