import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import {
  inventory,
  leaderboard,
  profile,
  quests,
  settings,
  academy,
} from "../images";

// Define the type for a quest item
interface Quest {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  award: string;
}

// Define the type for an item in the menu
interface MenuItem {
  title: string;
  imageSrc: string;
  path: string;
}

const items: MenuItem[] = [
  { title: "Профіль", imageSrc: profile, path: "/profile" },
  { title: "Квести", imageSrc: quests, path: "/quests" },
  { title: "Академія", imageSrc: academy, path: "/academy" },
  { title: "Інвертар", imageSrc: inventory, path: "/inventory" },
  { title: "Лідерборд", imageSrc: leaderboard, path: "/leaderboard" },
  { title: "Налаштування", imageSrc: settings, path: "/settings" },
];

const generateRandomGradient = () => {
  const colors = [
    "#ADD8E6",
    "#D8A8F6",
    "#008000",
    "#FFFF00",
    "#FF0000",
    "#00FFFF",
  ];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${randomColor1} 0%, ${randomColor2} 100%)`;
};

const MainPage: React.FC = () => {
  const [questsData, setQuestsData] = useState<Quest[]>([]);
  const navigate = useNavigate();
  const pagesToLoad = 1; // Number of pages to load

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const allQuests: Quest[] = [];
        for (let page = 1; page <= pagesToLoad; page++) {
          const response = await axios.get<Quest[]>(
            `https://quests-express-vercel-backend.vercel.app/api/v1/quests?page=${page}`
          );
          allQuests.push(...response.data);
        }
        setQuestsData(allQuests);
        preloadImages(allQuests);
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
    };

    fetchQuests();
  }, []);

  const preloadImages = (quests: Quest[]) => {
    quests.forEach((quest) => {
      const img = new Image();
      img.src = quest.imageUrl;
    });
  };

  const handleNavigate = (path: string) => {
    navigate(path, { state: { quests: questsData } });
  };

  const gradients = useMemo(() => {
    return items.map(() => generateRandomGradient());
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-white flex-grow bg-[#141415]">
      <Header pageName="Головний екран" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          <div className="px-8 grid grid-cols-2 gap-16">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigate(item.path)}
                className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
              >
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: gradients[index],
                      filter: "blur(20px)",
                      opacity: 0.9,
                      zIndex: -1,
                    }}
                  ></div>
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-full"
                    style={{
                      filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
                <div className="mx-auto mt-2">
                  <h3 className="text-lg font-normal text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
