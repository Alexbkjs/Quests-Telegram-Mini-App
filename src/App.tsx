import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
import "./App.css";
import MainPage from "./pages/MainPage";
import Quests from "./pages/Quests";
import InitialPage from "./pages/InitialPage";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  window.Telegram.WebApp.expand();

  return (
    <Router>
      <Routes>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<InitialPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
