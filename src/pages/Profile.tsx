import Header from "../components/Header";
import ProfileInfoBlock from "../components/ProfileInfoBlock.tsx";
import { UserInfo } from "../components/UserInfo.tsx";
import { basic } from "../images/index.ts";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-white bg-[#141415]">
      <Header pageName="Профіль" />
      <UserInfo />
      <ProfileInfoBlock
        title="Achievements"
        icons={[
          { src: basic, isLocked: false },
          { src: basic, isLocked: true },
          { src: basic, isLocked: false },
          { src: basic, isLocked: true },
        ]}
        dynamicText="Progress"
      />
      <ProfileInfoBlock
        title="Achievements"
        icons={[
          { src: basic, isLocked: false },
          { src: basic, isLocked: true },
          { src: basic, isLocked: false },
          { src: basic, isLocked: true },
        ]}
        dynamicText="Progress"
      />
    </div>
  );
};

export default Profile;
