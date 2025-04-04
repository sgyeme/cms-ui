import axiosInstance from './cms-axios'

export const login = async (username: string, password: string) => {
  const res = await axiosInstance.post('/api/v1/auth/login', { username, password })
  return res.data
}