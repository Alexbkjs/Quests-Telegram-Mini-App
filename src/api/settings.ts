import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/settings`;

// Define types for request and response data
interface UserSettings {
  userId: string;
  settings: {
    theme: string;
    language: string;
    // Add other user settings fields if needed
  };
}

interface NotificationPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  // Add other notification preferences fields if needed
}

interface PrivacySettings {
  profileVisibility: "public" | "private";
  // Add other privacy settings fields if needed
}

interface SecuritySettings {
  password: string;
  twoFactorAuthEnabled: boolean;
  // Add other security settings fields if needed
}

// Get user settings
export const getUserSettings = (userId: string) =>
  axios.get<UserSettings>(`${BASE_URL}/${userId}`);

// Update user settings
export const updateUserSettings = (userId: string, settings: UserSettings) =>
  axios.put(`${BASE_URL}/${userId}`, settings);

// Update notification preferences
export const updateNotificationPreferences = (
  userId: string,
  preferences: NotificationPreferences
) => axios.post(`${BASE_URL}/${userId}/notification-preferences`, preferences);

// Update privacy settings
export const updatePrivacySettings = (
  userId: string,
  privacySettings: PrivacySettings
) => axios.post(`${BASE_URL}/${userId}/privacy`, privacySettings);

// Update security settings
export const updateSecuritySettings = (
  userId: string,
  securitySettings: SecuritySettings
) => axios.post(`${BASE_URL}/${userId}/security`, securitySettings);
