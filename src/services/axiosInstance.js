import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://luminous-flow-staging-qa.up.railway.app/api", 
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json"
  }
})

export default axiosInstance
