import axios from "axios";
import { UserProfile, UserClassData } from "./types"; // Import types

// Define the base URL using the environment variable
const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/users`;

// Function to get a user profile by ID
export const getUserProfile = (userId: string) =>
  axios.get<UserProfile>(`${BASE_URL}/${userId}`); // Specify the response type

// Function to update a user profile by ID
export const updateUserProfile = (userId: string, userData: UserProfile) =>
  axios.put(`${BASE_URL}/${userId}`, userData);

// Function to delete a user profile by ID
export const deleteUserProfile = (userId: string) =>
  axios.delete(`${BASE_URL}/${userId}`);

// Function to get the user class by ID
export const getUserClass = (userId: string) =>
  axios.get(`${BASE_URL}/${userId}/class`); // Assuming the response type is not needed or defined elsewhere

// Function to update the user class by ID
export const updateUserClass = (userId: string, classData: UserClassData) =>
  axios.put(`${BASE_URL}/${userId}/class`, classData);
