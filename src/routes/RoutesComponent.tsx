import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const InitialPage = lazy(() => import("../pages/InitialPage")); // Displays while loading other pages
const MainPage = lazy(() => import("../pages/MainPage"));
const Quests = lazy(() => import("../pages/Quests"));
const Profile = lazy(() => import("../pages/Profile"));
const Academy = lazy(() => import("../pages/Academy"));
const Inventory = lazy(() => import("../pages/Inventory"));
const Leaderboard = lazy(() => import("../pages/Leaderboard"));
const Settings = lazy(() => import("../pages/Settings"));

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<InitialPage />} />
    <Route path="/main" element={<MainPage />} />
    <Route path="/quests" element={<Quests />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/academy" element={<Academy />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/leaderboard" element={<Leaderboard />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default RoutesComponent;
