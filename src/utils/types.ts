export type IconProps = {
  size?: number;
  className?: string;
};

// types.ts
export interface TaskData {
  title: string;
  description?: string;
  dueDate?: string;
  // Add other relevant fields based on your task schema
}

export interface UpdateTaskData {
  title?: string;
  description?: string;
  dueDate?: string;
  // Add other fields that can be updated
}

export interface QueryParams {
  [key: string]: string | number | boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  // Add other relevant fields based on your user schema
}

export interface UserClassData {
  className: string;
  // Add other fields related to user class data
}
export interface Quest {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  award: string;
  questDetails_goal: string;
  questDetails_requirements: string[];
  questDetails_rewards: string[];
  // Add any other properties your `Quest` type might have
}
