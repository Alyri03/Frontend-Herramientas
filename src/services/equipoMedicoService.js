import axiosInstance from "@/services/axiosInstance";

export const medicoEspecialidad = async () => {
  try {
    const response = await axiosInstance.get("/medico-especialidad");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los médicos:", error);
    throw error;
  }
};

export const obtenerTodosLosMedicos = async () => {
  try {
    const response = await axiosInstance.get("/medicos");
    return response.data;
  } catch (error) {
    console.error("Error al obtener todos los médicos:", error);
    throw error;
  }
};
export const obtenerEspecialidadPorMedico = async (medicoId) => {
  try {
    const response = await axiosInstance.get("/medico-especialidad");
    return response.data.find((m) => m.medicoId === parseInt(medicoId));
  } catch (error) {
    console.error("Error al obtener especialidad del médico:", error);
    return null;
  }
};

export const obtenerMedicoPorId = async (id) => {
  try {
    const response = await axiosInstance.get("/medicos/public");
    const lista = response.data;

    const medico = lista.find((m) => m.id === parseInt(id));
    return medico || null;
  } catch (error) {
    console.error("Error al obtener médico por ID:", error);
    return null;
  }
};
export const obtenerMedicosPorEspecialidad = async (especialidadId) => {
  try {
    const response = await axiosInstance.get(
      `/medico-especialidad/especialidad/${especialidadId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener médicos por especialidad:", error);
    throw error;
  }
};
