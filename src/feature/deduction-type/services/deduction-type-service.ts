import axiosInstance from "@/core/api/cms-axios";
import { DeductionType } from "../models/deduction-type-model";
import { AxiosError } from "axios";  // Import AxiosError

const API = '/api/v1/deduction-types';

// Create a new deduction type
export const createDeductionType = async (deductionType: DeductionType) => {
  try {
    const response = await axiosInstance.post(API, deductionType); // POST to create
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to create deduction type');
    } else {
      throw new Error('An unknown error occurred while creating deduction type');
    }
  }
};

// Update an existing deduction type
export const updateDeductionType = async (deductionType: DeductionType) => {
  try {
    const response = await axiosInstance.put(API, deductionType); // PUT to update
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to update deduction type');
    } else {
      throw new Error('An unknown error occurred while updating deduction type');
    }
  }
};

// Delete a deduction type by ID
export const deleteDeductionType = async (id: string) => {
  try {
    await axiosInstance.delete(`${API}/${id}`); // DELETE by ID
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to delete deduction type');
    } else {
      throw new Error('An unknown error occurred while deleting deduction type');
    }
  }
};

// Get a deduction type by ID
export const getDeductionTypeById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`${API}/${id}`); // GET by ID
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to fetch deduction type');
    } else {
      throw new Error('An unknown error occurred while fetching deduction type');
    }
  }
};

// Get all deduction types
export const getAllDeductionTypes = async (includeDeleted = false) => {
  try {
    const response = await axiosInstance.get('', {
      params: { includeDeleted }, // GET all with optional query
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to fetch deduction types');
    } else {
      throw new Error('An unknown error occurred while fetching deduction types');
    }
  }
};
