import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/achievements`;

// Define types for request and response data
interface Achievement {
  id?: string;
  name: string;
  description: string;
  // Add other achievement-specific fields if needed
}

interface UserAchievements {
  userId: string;
  achievements: Achievement[];
}

// Get all achievements
export const getAllAchievements = () => axios.get<Achievement[]>(BASE_URL);

// Create a new achievement
export const createAchievement = (achievementData: Achievement) =>
  axios.post<Achievement>(BASE_URL, achievementData);

// Get user achievements
export const getUserAchievements = (userId: string) =>
  axios.get<UserAchievements>(`${BASE_URL}/${userId}`);
