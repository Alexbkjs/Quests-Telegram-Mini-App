import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./styles/App.css";

const InitialPage = lazy(() => import("./pages/InitialPage")); // Displays while loading other pages
const MainPage = lazy(() => import("./pages/MainPage"));
const Quests = lazy(() => import("./pages/Quests"));
const Profile = lazy(() => import("./pages/Profile"));
const Academy = lazy(() => import("./pages/Academy"));
const Inventory = lazy(() => import("./pages/Inventory"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const Settings = lazy(() => import("./pages/Settings"));
import Fallback from "./components/Fallback";
const App: React.FC = () => {
  window.Telegram.WebApp.expand();

  return (
    <Router>
      <Suspense fallback={<Fallback />}>
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
      </Suspense>
    </Router>
  );
};

export default App;
