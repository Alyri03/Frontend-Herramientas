import axiosInstance from "@/services/axiosInstance";

export const informacionPaciente = async (pacienteId) =>{
    try {
        const response = await axiosInstance.get(`/pacientes/id/${pacienteId}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener información del paciente:", error);
        throw error;
    }
}

export const datosPacientes = async ()=>{
    try {
      const response = await axiosInstance.get("/pacientes");
      return response.data;
    } catch (error) {
      console.error("Error al obtener especialidades:", error);
      throw error;
    }
}