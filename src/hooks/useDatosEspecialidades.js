import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import {
  obtenerEspecialidades,
  obtenerEspecialidadPorId,
} from "@/services/especialidadesService";

import {
  obtenerMedicosPorEspecialidad,
  obtenerTodosLosMedicos,
} from "@/services/equipoMedicoService";

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

// Mapa de íconos según especialidad
const mapaIconos = {
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

export const useDatosEspecialidades = (id = null) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  // Obtener lista de especialidades
  const {
    data: especialidadesOriginales = [],
    isLoading: cargandoEspecialidades,
    error: errorEspecialidades,
  } = useQuery({
    queryKey: ["especialidades"],
    queryFn: obtenerEspecialidades,
    enabled: !id,
    select: (datos) =>
      datos.map((esp) => ({
        ...esp,
        icono: mapaIconos[esp.nombre] || faStethoscope,
      })),
  });

  // Filtrar especialidades según búsqueda
  const especialidadesFiltradas = useMemo(() => {
    return especialidadesOriginales.filter((esp) =>
      esp.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
  }, [especialidadesOriginales, terminoBusqueda]);

  // Obtener detalle de especialidad
  const {
    data: especialidad,
    isLoading: cargandoEspecialidad,
    error: errorDetalle,
  } = useQuery({
    queryKey: ["especialidad", id],
    queryFn: () => obtenerEspecialidadPorId(id),
    enabled: !!id,
  });

  // Obtener médicos por especialidad
  const {
    data: medicosBasicos = [],
    isLoading: cargandoMedicos,
    error: errorMedicos,
  } = useQuery({
    queryKey: ["medicosPorEspecialidad", id],
    queryFn: () => obtenerMedicosPorEspecialidad(id),
    enabled: !!id,
  });

  // Obtener todos los médicos (para conseguir sus imágenes)
  const {
    data: todosLosMedicos = [],
    isLoading: cargandoTodosLosMedicos,
    error: errorTodos,
  } = useQuery({
    queryKey: ["todosLosMedicos"],
    queryFn: obtenerTodosLosMedicos,
    enabled: !!id,
  });

  // Médicos con imagen incluida
  const medicosConImagen = useMemo(() => {
    if (!id || !medicosBasicos.length || !todosLosMedicos.length) return [];

    return medicosBasicos.map((medico) => {
      const datosCompletos = todosLosMedicos.find((m) => m.id === medico.medicoId);
      return {
        ...medico,
        imagen: datosCompletos?.imagen || null,
      };
    });
  }, [id, medicosBasicos, todosLosMedicos]);

  return {
    // Lista general
    especialidades: especialidadesFiltradas,
    cargandoEspecialidades,
    errorEspecialidades,
    actualizarBusqueda: setTerminoBusqueda,

    // Detalle
    especialidad,
    medicos: medicosConImagen,
    cargandoDetalle:
      cargandoEspecialidad || cargandoMedicos || cargandoTodosLosMedicos,
    errorDetalle: errorDetalle || errorMedicos || errorTodos,
  };
};
