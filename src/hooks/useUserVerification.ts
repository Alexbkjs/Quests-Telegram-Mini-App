import { useEffect, useState, useCallback } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../api/auth";
import { useUser } from "../context/UserContext";

const useUserVerification = () => {
  const navigate = useNavigate();
  const { setUser } = useUser(); // Access setUser from context
  const [state, setState] = useState({
    loading: true,
    title: "Loading...",
  });

  const verifyUser = useCallback(async () => {
    const { initDataRaw } = retrieveLaunchParams();

    if (!initDataRaw) {
      setState({ loading: false, title: "Error: Missing authentication data" });
      return;
    }

    try {
      const {
        data: { user, redirect },
      } = await authenticate(initDataRaw); // retriving user details and instruction on redirect if succesfull

      // Store user data in context
      setUser(user);

      // Redirect to profile page after successful verification. Depending on if it is is a new user or not
      // navigate(redirect);
      navigate("/quests");
    } catch (error) {
      console.error("Error verifying user:", error);
      setState({ loading: false, title: "Error occurred" });
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  }, [navigate, setUser]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return state;
};

export default useUserVerification;
