import {
  inventory,
  leaderboard,
  profile,
  quests,
  settings,
  academy,
} from "../images/index";
import { useNavigate } from "react-router-dom";

const icons = [
  { src: inventory, alt: "Inventory", path: "/inventory" },
  { src: leaderboard, alt: "Leaderboard", path: "/leaderboard" },
  { src: profile, alt: "Profile", path: "/profile" },
  { src: quests, alt: "Quests", path: "/quests" },
  { src: settings, alt: "Settings", path: "/settings" },
  { src: academy, alt: "Academy", path: "/academy" },
];

const BottomNavBar = () => {
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div className=" flex flex-col main text-white">
      <div className="w-full p-4 sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          {/* Your main content here */}

          {/* Bottom Sidebar */}
          <div
            className="fixed bottom-4 right-0 w-full bg-[#1d0c38] flex justify-center items-center rounded-xl"
            style={{ height: "60px", maxWidth: "440px" }}
          >
            {icons.map((icon, index) => (
              <button
                key={index}
                className="flex-1 flex justify-center items-center"
                onClick={() => navigateToPage(icon.path)}
              >
                <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
