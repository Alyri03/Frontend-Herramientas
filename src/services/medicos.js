import axiosInstance from "@/services/axiosInstance";

export const medicosPorIdUsuario = async (id) => {
    try {
        const response = await axiosInstance.get(``)
        return response.data
    } catch (error) {
        console.error("Error al obtener todos los medicos: ", error)
        throw Error
    }
}