import { useQuery } from "@tanstack/react-query";
import {
  obtenerMedicoPorId,
  obtenerEspecialidadPorMedico,
  medicoEspecialidad,
  obtenerTodosLosMedicos,
} from "@/services/equipoMedicoService";

import { useMemo, useState } from "react";

export const useDatosMedico = (id = null) => {
  const [busqueda, setBusqueda] = useState("");

  // 🧑‍⚕️ Detalle del médico por ID
  const {
    data: medico,
    isLoading: cargandoMedico,
    error: errorMedico,
  } = useQuery({
    queryKey: ["medico", id],
    queryFn: () => obtenerMedicoPorId(id),
    enabled: !!id,
  });

  // 🧠 Especialidad del médico
  const {
    data: especialidad,
    isLoading: cargandoEspecialidad,
    error: errorEspecialidad,
  } = useQuery({
    queryKey: ["especialidad-medico", id],
    queryFn: () => obtenerEspecialidadPorMedico(id),
    enabled: !!id,
    select: (data) => data?.nombreEspecialidad || "Especialidad no registrada",
  });

  // 📦 Listado combinado de médicos con especialidad
  const {
    data: medicosFusionados = [],
    isLoading: cargandoLista,
    error: errorLista,
  } = useQuery({
    queryKey: ["medicos-fusionados"],
    queryFn: async () => {
      const [especialidades, medicos] = await Promise.all([
        medicoEspecialidad(),
        obtenerTodosLosMedicos(),
      ]);

      return especialidades.map((esp) => {
        const medico = medicos.find((m) => m.id === esp.medicoId);
        return {
          ...esp,
          imagen: medico?.imagen || "",
        };
      });
    },
    enabled: !id,
  });

  // 🔍 Filtrado por nombre o especialidad
  const medicosFiltrados = useMemo(() => {
    return medicosFusionados.filter((medico) => {
      const nombre = medico.nombreMedico?.toLowerCase() || "";
      const espec = medico.nombreEspecialidad?.toLowerCase() || "";
      return (
        nombre.includes(busqueda.toLowerCase()) ||
        espec.includes(busqueda.toLowerCase())
      );
    });
  }, [busqueda, medicosFusionados]);

  return {
    // Detalle
    medico,
    especialidad,
    cargandoMedico: cargandoMedico || cargandoEspecialidad,
    errorMedico: errorMedico || errorEspecialidad,

    // Lista
    medicos: medicosFiltrados,
    cargandoLista,
    errorLista,
    setBusqueda,
  };
};
