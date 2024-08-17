import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/skills`;

// Define types for request and response data
interface Skill {
  id?: string;
  name: string;
  description: string;
  // Add other skill-specific fields if needed
}

// Get list of available skills
export const getSkills = () => axios.get<Skill[]>(BASE_URL);

// Add a new skill
export const addSkill = (skillData: Skill) =>
  axios.post<Skill>(BASE_URL, skillData);

// Update skill details
export const updateSkill = (skillId: string, skillData: Skill) =>
  axios.put(`${BASE_URL}/${skillId}`, skillData);

// Delete a skill
export const deleteSkill = (skillId: string) =>
  axios.delete(`${BASE_URL}/${skillId}`);
