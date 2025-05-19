import axios from 'axios'

const baseUrl = "https://backend-dev-desarrollo.up.railway.app/api/medico-especialidad" 

export const medicoEspecialidad = async () => {


    try {
        const response = await axios.get(baseUrl);
        return response.data;
        
    } catch (error) {
        console.error('Error al obtener los medicos: ', error);
    }

}