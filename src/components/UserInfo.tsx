import { profile_icon } from "../images/index.ts";

export const UserInfo = () => {
  const profileData = {
    className: "A1", // Example value, replace with actual data from backend
    level: 2,
    points: 238,
    coins: 520,
  };

  return (
    <div className="flex flex-col items-center p-4 mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg flex-grow">
      {/* Profile Block with Relative Positioning */}
      <div
        className="relative w-full bg-[#fb9b07] rounded-lg"
        style={{ height: "19.2vh", width: "87.2vw" }}
      >
        {/* Black Box Overlay - Top Left */}
        <div
          className="absolute -top-3 -left-3 transform rotate-0 bg-[#141415] z-10 rounded-2xl"
          style={{ width: "50%", height: "28%" }}
        ></div>

        {/* Black Box Overlay - Bottom Right */}
        <div
          className="absolute -bottom-3 -right-3 transform rotate-0 bg-[#141415] z-10 rounded-2xl"
          style={{ width: "55%", height: "78%" }}
        ></div>

        {/* Content Inside Profile Block */}
        <div
          className="relative flex items-center justify-between p-4"
          style={{ height: "100%" }}
        >
          {/* Left Section */}
          <div className="flex items-center justify-center space-x-4 w-[50%] z-20 mt-4 mr-4">
            <div className="relative flex flex-col rounded-full">
              <img
                src={profile_icon}
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
              />
              <h2 className="text-black text-sm font-normal mt-2">Your Name</h2>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col w-[50%] space-y-2 z-20">
            <div
              className="text-black p-2 rounded-md flex justify-center items-center"
              style={{ height: "5.2vh" }}
            >
              <span className="text-gray-600">Клас: </span>{" "}
              {profileData.className}
            </div>
            <div
              className=" text-white p-4 rounded-md"
              style={{ height: "12.1vh", width: "42.6vw" }}
            >
              <div className="flex items-center justify-between">
                <span>Рівень:</span> <span>{profileData.level}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Бали:</span> <span>{profileData.points}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Монети:</span> <span>{profileData.coins}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
