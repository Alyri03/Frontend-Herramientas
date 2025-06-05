import { useQuery } from "@tanstack/react-query";
import { datosPacientes } from "@/services/pacienteService";

// Función para calcular la edad a partir de la fecha de nacimiento
const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
};

export const usePacientes = () => {
  const {
    data: pacientes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pacientes"],
    queryFn: datosPacientes,
    staleTime: 1000 * 60 * 5, 
    select: (data) =>
      data.map((p) => ({
        id: p.id,
        nombre: `${p.nombres} ${p.apellidos}`,
        edad: calcularEdad(p.fechaNacimiento),
        genero: p.sexo,
        telefono: p.telefono,
        email: p.usuario?.correo || "",
        condicion: p.tipoSangre || "N/A", 
        estado: "Activo", // Puedes cambiarlo si tienes un campo
      })),
  });

  return { pacientes, isLoading, error };
};
