import axios from "axios";
import { TaskData, UpdateTaskData, QueryParams } from "../utils/types"; // Import types

// Define the base URL using the environment variable
const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/tasks`;

// Function to get a task by ID
export const getTask = (taskId: string) => axios.get(`${BASE_URL}/${taskId}`);

// Function to create a new task
export const createTask = (taskData: TaskData) =>
  axios.post(BASE_URL, taskData);

// Function to update a task by ID
export const updateTask = (taskId: string, taskData: UpdateTaskData) =>
  axios.put(`${BASE_URL}/${taskId}`, taskData);

// Function to delete a task by ID
export const deleteTask = (taskId: string) =>
  axios.delete(`${BASE_URL}/${taskId}`);

// Function to get a list of tasks with optional query parameters
export const getTasks = (queryParams?: QueryParams) => {
  const queryString = queryParams
    ? new URLSearchParams(queryParams as Record<string, string>).toString()
    : "";
  return axios.get(`${BASE_URL}?${queryString}`);
};

// Function to get tasks for a specific user
export const getUserTasks = (userId: string) =>
  axios.get(`${BASE_URL}/user/${userId}`);

// Function to update the status of a task
export const updateTaskStatus = (taskId: string, status: string) =>
  axios.patch(`${BASE_URL}/${taskId}/status`, { status });
