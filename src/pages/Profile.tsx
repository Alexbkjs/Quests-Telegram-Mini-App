import BottomNavBar from "../components/BottomNavBar";
import Header from "../components/Header";
import ProfileInfoBlock from "../components/ProfileInfoBlock";
import { UserInfo } from "../components/UserInfo";
import { basic } from "../assets/images/index";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-white bg-[#141415]">
      <Header pageName="Профіль" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          <UserInfo />
          <ProfileInfoBlock
            title="Досягнення"
            icons={[
              { src: basic, isLocked: false },
              { src: basic, isLocked: true },
              { src: basic, isLocked: false },
              { src: basic, isLocked: true },
            ]}
            dynamicText="Всі аватари"
          />
          <ProfileInfoBlock
            title="Досягнення"
            icons={[
              { src: basic, isLocked: false },
              { src: basic, isLocked: true },
              { src: basic, isLocked: false },
              { src: basic, isLocked: true },
            ]}
            dynamicText="Всі аватари"
          />
          <BottomNavBar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
