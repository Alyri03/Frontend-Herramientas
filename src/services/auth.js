import axiosInstance from './axiosInstance'

export const loginRequest = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      correo: email,
      password: password
    });

    return response.data;

  } catch (error) {
    console.error('Error al autenticar el usuario:', error);
    throw error;
  }
}

export const logoutRequest = async () => {
  try {
    const response = await axiosInstance.post('/auth/logout');
    return response.data; 
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    throw error;
  }
}
