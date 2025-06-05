import axios from "axios"
import axiosInstance from "@/services/axiosInstance";

export const obtenerPacientesPorMedicoId = async (id) => {

    try{
        const response = await axiosInstance.get(`/citas/medico/${id}/pacientes`)
        return response.data
    } catch(error){
        console.error("Error al obtener todos los medicos: ", error)
        throw Error
    }

}