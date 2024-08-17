import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/leaderboards`;

// Define types for request and response data
interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  // Add other leaderboard-specific fields if needed
}

interface LeaderboardByClass {
  classType: "developers" | "mentors" | "companies";
  entries: LeaderboardEntry[];
}

// Get leaderboard data
export const getLeaderboardData = () => axios.get<LeaderboardEntry[]>(BASE_URL);

// Get leaderboard by class
export const getLeaderboardByClass = (
  classType: "developers" | "mentors" | "companies"
) => axios.get<LeaderboardByClass>(`${BASE_URL}/${classType}`);
