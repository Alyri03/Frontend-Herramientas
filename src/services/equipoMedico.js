import axios from 'axios'

const baseUrl = "https://backend-dev-desarrollo.up.railway.app/api/medicos" 

export const medicoEspecialidad = () => {

    axios.get(`${baseUrl}`).then((response) => {
        return response.data
    })

}

