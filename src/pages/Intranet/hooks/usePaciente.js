import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { informacionPaciente } from "@/services/pacienteService";

export const usePaciente = (usuarioId) => {
  const {
    data,
    isLoading: cargandoPaciente,
    error: errorPaciente,
  } = useQuery({
    queryKey: ["paciente", usuarioId],
    queryFn: () => informacionPaciente(usuarioId),
    enabled: !!usuarioId,
    select: (data) => ({
      nombres: data.nombres,
      apellidos: data.apellidos,
      fechaNacimiento: data.fechaNacimiento,
      sexo: data.sexo,
      nacionalidad: data.nacionalidad,
      direccion: data.direccion || "",
      grupoSanguineo: data.tipoSangre,
      documento: data.numeroIdentificacion,
      correo: data.usuario?.correo || "",
    }),
  });

  const [pacienteEditable, setPacienteEditable] = useState(null);

  useEffect(() => {
    if (data) {
      setPacienteEditable(data);
    }
  }, [data]);

  const actualizarCampo = (campo, valor) => {
    setPacienteEditable((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const restaurarDatosOriginales = () => {
    if (data) {
      setPacienteEditable(data);
    }
  };

  return {
    paciente: pacienteEditable,
    cargandoPaciente,
    errorPaciente,
    actualizarCampo,
    restaurarDatosOriginales,
  };
};
