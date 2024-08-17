import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/inventory`;

// Define types for request and response data
interface InventoryItem {
  id?: string;
  name: string;
  quantity: number;
  // Add other inventory item-specific fields if needed
}

interface UserInventory {
  userId: string;
  items: InventoryItem[];
}

// Get user inventory
export const getUserInventory = (userId: string) =>
  axios.get<UserInventory>(`${BASE_URL}/${userId}`);

// Add items/skills to inventory
export const addItemToInventory = (userId: string, itemData: InventoryItem) =>
  axios.post(`${BASE_URL}/${userId}`, itemData);

// Update inventory item/skill
export const updateInventoryItem = (itemId: string, itemData: InventoryItem) =>
  axios.put(`${BASE_URL}/${itemId}`, itemData);

// Remove item/skill from inventory
export const removeItemFromInventory = (itemId: string) =>
  axios.delete(`${BASE_URL}/${itemId}`);
