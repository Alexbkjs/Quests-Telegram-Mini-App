// import { useEffect, useState, useCallback } from "react";
// import { retrieveLaunchParams } from "@telegram-apps/sdk";
// import { useNavigate } from "react-router-dom";
// import { authenticate } from "../api/auth";

// const useUserVerification = () => {
//   const navigate = useNavigate();
//   const [state, setState] = useState({
//     loading: true,
//     title: "Loading...",
//   });

//   const verifyUser = useCallback(async () => {
//     const { initDataRaw } = retrieveLaunchParams();

//     if (!initDataRaw) {
//       // Handle the case where initDataRaw is undefined
//       setState({ loading: false, title: "Error: Missing authentication data" });
//       return;
//     }

//     try {
//       const response = await authenticate(initDataRaw);
//       console.log("Received token from back:", response.data);

//       // Redirect to profile page after successful verification
//       navigate("/profile");
//     } catch (error) {
//       console.error("Error verifying user:", error);
//       setState({ loading: false, title: "Error occurred" });
//     } finally {
//       setState((prevState) => ({ ...prevState, loading: false }));
//     }
//   }, [navigate]);

//   useEffect(() => {
//     verifyUser();
//   }, [verifyUser]);

//   return state;
// };

// export default useUserVerification;

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
      const response = await authenticate(initDataRaw);
      console.log("Verification status and user object:", response.data);

      // Store user data in context
      setUser(response.data.user);

      // Redirect to profile page after successful verification
      navigate("/profile");
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
