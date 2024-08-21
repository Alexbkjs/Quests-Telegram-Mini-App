// // ProfilePage.js
// import React, { useEffect, useState } from "react";

// const ProfilePage = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch user profile data
//     const fetchProfileData = async () => {
//       try {
//         const response = await fetch("/api/profile/12345"); // Assuming 12345 is the user ID
//         if (!response.ok) {
//           throw new Error("Failed to fetch profile data");
//         }
//         const data = await response.json();
//         setProfileData(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="profile-page">
//       <img src={profileData.avatar} alt="User Avatar" className="avatar" />
//       <h1>{`${profileData.firstName} ${profileData.lastName}`}</h1>
//       <p>Class: {profileData.class}</p>
//       <p>Level: {profileData.level}</p>
//       <p>Score: {profileData.score}</p>
//       <p>Coins: {profileData.coins}</p>

//       <div className="achievements">
//         <h2>Achievements</h2>
//         <ul>
//           {profileData.achievements.map((achievement, index) => (
//             <li key={index}>{achievement}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="active-quests">
//         <h2>Active Quests</h2>
//         <ul>
//           {profileData.activeQuests.map((quest, index) => (
//             <li key={index}>{quest}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
