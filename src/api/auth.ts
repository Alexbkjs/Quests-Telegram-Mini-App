import axios from "axios";

// const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/auth`; nodejs back
const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/users`; // python back

export const register = (userData: { email: string; password: string }) =>
  axios.post(`${BASE_URL}/register`, userData);

export const login = (userData: { email: string; password: string }) =>
  axios.post(`${BASE_URL}/login`, userData);

export const logout = () => axios.post(`${BASE_URL}/logout`);

// Function to authenticate using initDataRaw
export const authenticate = (initDataRaw: string) =>
  axios.post(
    `${BASE_URL}`,
    {},
    {
      headers: {
        Authorization: `tma ${initDataRaw}`,
      },
    }
  );

// // Function to authenticate using initDataRaw
// export const authenticate = (initDataRaw: string) =>
//   axios.post(`${BASE_URL}`, { initDataRaw: initDataRaw });
