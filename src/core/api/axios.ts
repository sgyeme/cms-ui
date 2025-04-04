import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/', // Your backend API URL
  timeout: 10000,  // Timeout for requests
})
