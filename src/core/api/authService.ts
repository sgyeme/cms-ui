import { JwtResponse } from '../models/login-response';
import axiosInstance from './cms-axios'; // Import axios instance
import { AxiosError } from "axios";  // Import AxiosError


// Login service function
export const login = async (username: string, password: string):Promise<JwtResponse> => {
  try {
    // Send POST request to login endpoint
    const res = await axiosInstance.post<JwtResponse>('/api/v1/auth/login', { username, password });
    return res.data; // Return response data
  } catch (error: unknown) {
    // Error handling: check if error is AxiosError and throw specific message
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Login failed due to server error');
    } else {
      // Handle any unknown errors
      throw new Error('An unexpected error occurred while logging in');
    }
  }
};
