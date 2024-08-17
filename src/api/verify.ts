import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/verify`;

// Define types for request and response data
interface MentorData {
  email: string;
  name: string;
  // add other mentor-specific fields
}

interface CompanyData {
  name: string;
  registrationNumber: string;
  // add other company-specific fields
}

interface VerificationStatus {
  status: "Pending" | "Approved" | "Rejected";
}

interface UpdateStatus {
  approved: boolean;
}

// Request mentor verification
export const requestMentorVerification = (mentorData: MentorData) =>
  axios.post(`${BASE_URL}/mentor`, mentorData);

// Request company verification
export const requestCompanyVerification = (companyData: CompanyData) =>
  axios.post(`${BASE_URL}/company`, companyData);

// Get verification status
export const getVerificationStatus = (userId: string) =>
  axios.get<VerificationStatus>(`${BASE_URL}/status/${userId}`);

// Approve or reject mentor verification
export const updateMentorVerification = (mentorId: string, status: boolean) =>
  axios.put(`${BASE_URL}/mentor/${mentorId}`, {
    approved: status,
  } as UpdateStatus);

// Approve or reject company verification
export const updateCompanyVerification = (companyId: string, status: boolean) =>
  axios.put(`${BASE_URL}/company/${companyId}`, {
    approved: status,
  } as UpdateStatus);
