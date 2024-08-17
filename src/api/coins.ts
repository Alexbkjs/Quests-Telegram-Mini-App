import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/coins`;

// Define types for request and response data
interface CoinUpdate {
  amount: number;
}

interface UserCoins {
  userId: string;
  coins: number;
}

// Get user coins
export const getUserCoins = (userId: string) =>
  axios.get<UserCoins>(`${BASE_URL}/${userId}`);

// Add or subtract coins
export const updateUserCoins = (userId: string, coinUpdate: CoinUpdate) =>
  axios.post(`${BASE_URL}/${userId}`, coinUpdate);
