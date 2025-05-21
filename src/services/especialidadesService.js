import axiosInstance from "@/services/axiosInstance";

export const obtenerEspecialidades = async () => {
  try {
    const response = await axiosInstance.get("/especialidades");
    return response.data;
  } catch (error) {
    console.error("Error al obtener especialidades:", error);
    throw error;
  }
};

export const obtenerEspecialidadPorId = async (id) => {
  try {
    const response = await axiosInstance.get(`/especialidades/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la especialidad con ID ${id}:`, error);
    throw error;
  }
};
