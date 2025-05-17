import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://backend-dev-desarrollo.up.railway.app/api", 
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json"
  }
})

export default axiosInstance
