import axios from 'axios'
import { JwtResponse } from '../models/login-response'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})



// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Optionally fetch token from localStorage or a cookie
    //const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null
  const auth = JSON.parse(localStorage.getItem('jwt_response') || '{}') as JwtResponse;
    console.log(auth.token); // or auth.username, etc.  
    if (auth?.token) {
      config.headers.Authorization = `Bearer ${auth.token}`
    }

    // Add any other custom headers here
   // config.headers['X-User-Type'] = 'STAFF'

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default axiosInstance