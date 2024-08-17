import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/quests`;

import { Quest } from "../utils/types";

// Extended QuestResponse interface with additional fields
export interface QuestResponse extends Quest {
  // id: string;
  // createdAt: string; // Example additional field
  // updatedAt: string; // Example additional field
}

export const getAllQuests = (page: number) =>
  axios.get<QuestResponse[]>(`${BASE_URL}?page=${page}`);

// Get quest details
export const getQuestDetails = (questId: string) =>
  axios.get<QuestResponse>(`${BASE_URL}/${questId}`);

// Create a new quest
export const createQuest = (questData: Quest) =>
  axios.post<QuestResponse>(BASE_URL, questData);

// Update a quest
export const updateQuest = (questId: string, questData: Quest) =>
  axios.put<QuestResponse>(`${BASE_URL}/${questId}`, questData);

// Delete a quest
export const deleteQuest = (questId: string) =>
  axios.delete(`${BASE_URL}/${questId}`);
