import React from "react";
import BottomNavBar from "../components/BottomNavBar";
import Header from "../components/Header";
import ProfileInfoBlock from "../components/ProfileInfoBlock";
import { UserInfo } from "../components/UserInfo";
// import { basic } from "../assets/images/index";
import { useUser } from "../context/UserContext";

const Profile: React.FC = () => {
  const { user } = useUser(); // Access user data from context

  if (!user) {
    return <div>Loading user data...</div>;
  }

  // Map user's achievements and quests to the format expected by ProfileInfoBlock
  const achievementIcons = user.achievements.map((achievement) => ({
    src: achievement.imageUrl, // Use the imageUrl from achievements
    isLocked: achievement.isLocked, // Assuming unlocked achievements
  }));

  const questIcons = user.activeQuests.map((activeQuest) => ({
    src: activeQuest.quest.imageUrl, // Placeholder icon for quests
    isLocked: activeQuest.isLocked, // Assuming active quests are not locked
  }));

  return (
    <div className="min-h-screen flex flex-col text-white bg-[#141415]">
      <Header pageName="Профіль" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          <UserInfo user={user} />
          <ProfileInfoBlock
            title="Досягнення"
            icons={achievementIcons}
            dynamicText="Всі досягнення"
          />
          <ProfileInfoBlock
            title="Активні квести"
            icons={questIcons}
            dynamicText="Всі квести"
          />
          <BottomNavBar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
