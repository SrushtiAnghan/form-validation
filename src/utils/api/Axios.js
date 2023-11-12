import axios from "axios"

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
  })
  
  axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage?.getItem('mylo_expert_access_token')
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken || ''}`
    }
    return config
  })
  
  export default axiosInstance