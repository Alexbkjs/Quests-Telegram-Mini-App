// pages/MainPage.tsx
import React, { useMemo } from "react";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import { generateRandomGradient } from "../utils/randomGradient";
import {
  inventory,
  leaderboard,
  profile,
  quests,
  settings,
  academy,
} from "../assets/images";
import { useFetchQuests } from "../hooks/useFetchQuests";
import Fallback from "../components/Fallback";

// Define the type for an item in the menu
interface MenuItemType {
  title: string;
  imageSrc: string;
  path: string;
}

const items: MenuItemType[] = [
  { title: "Профіль", imageSrc: profile, path: "/profile" },
  { title: "Квести", imageSrc: quests, path: "/quests" },
  { title: "Академія", imageSrc: academy, path: "/academy" },
  { title: "Інвертар", imageSrc: inventory, path: "/inventory" },
  { title: "Лідерборд", imageSrc: leaderboard, path: "/leaderboard" },
  { title: "Налаштування", imageSrc: settings, path: "/settings" },
];

const MainPage: React.FC = () => {
  const pagesToLoad = 1;
  const { questsData, loading, error } = useFetchQuests(pagesToLoad);

  const gradients = useMemo(() => {
    return items.map(() => generateRandomGradient());
  }, []);

  if (loading) return <Fallback />;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen flex flex-col text-white flex-grow bg-[#141415]">
      <Header pageName="Головний екран" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          <div className="px-8 grid grid-cols-2 gap-16">
            {items.map((item, index) => (
              <MenuItem
                key={index}
                title={item.title}
                imageSrc={item.imageSrc}
                path={item.path}
                gradient={gradients[index]}
                questsData={questsData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
