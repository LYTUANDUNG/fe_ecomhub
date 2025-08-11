import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
const http = axios.create({ baseURL, timeout: 10000 })
http.interceptors.request.use(config => {
  // you can add authorization header here if token exists
  return config
})
export default http
