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
export const obtenerMedicosPorEspecialidad = async (especialidadId) => {
  try {
    const response = await axiosInstance.get(`/medico-especialidad/especialidad/${especialidadId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener médicos por especialidad:", error);
    throw error;
  }
};