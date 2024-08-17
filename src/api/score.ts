import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/score`;

// Define types for request and response data
interface UserScore {
  userId: string;
  score: number;
}

interface ScoreUpdate {
  score: number;
}

// Get user score
export const getUserScore = (userId: string) =>
  axios.get<UserScore>(`${BASE_URL}/${userId}`);

// Update user score
export const updateUserScore = (userId: string, scoreUpdate: ScoreUpdate) =>
  axios.post(`${BASE_URL}/${userId}`, scoreUpdate);
