import axiosInstance from "@/services/axiosInstance";

export const obtenerCitasPorPaciente= async (pacienteId) =>{
    try{
        const responde = await axiosInstance.get()
        return response.data;
    }catch(error){
        console.error("Error al obtener las citas del paciente",error)
        throw error;
    }
}