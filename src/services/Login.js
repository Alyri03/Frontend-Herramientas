import axios from 'axios'

const baseUrl = 'https://backend-dev-desarrollo.up.railway.app/api/auth/login'


export const loginRequest = async (email, password) => {
    try {
        const response = await axios.post(baseUrl, {
            correo : email, 
            password : password
        });
        return response.data;

    } catch (error) {
        console.error('Error al autenticar el usuario: ' , error)
    }
}