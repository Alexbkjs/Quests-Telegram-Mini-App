import { profile_icon, coins, score, level } from "../images/index.ts";

export const UserInfo = () => {
  const profileData = {
    firstName: "Людмила",
    lastName: "К.",
    className: "Пригодник", // Example value, replace with actual data from backend
    level: 2,
    points: 238,
    coins: 520,
  };

  return (
    <div className="flex flex-col items-center mx-auto p-2 w-full max-w-[450px] flex-grow">
      {/* Profile Block with Relative Positioning */}
      <div className="relative w-full bg-[#fb9b07] rounded-lg mt-1 mb-1">
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
        <div className="relative flex items-center justify-between p-2 h-full">
          {/* Left Section */}
          <div className="flex items-center justify-center space-x-4 w-[50%] z-20 mt-4 mr-4">
            <div className="relative flex flex-col rounded-full">
              <img
                src={profile_icon}
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
              />
              <h2 className="text-black text-sm font-normal">
                {profileData.firstName + " " + profileData.lastName}
              </h2>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col w-[50%] space-y-2 z-20">
            <div className="text-black rounded-md flex justify-center items-center mb-2">
              <span className="text-gray-600">Клас:</span>
              <p className="ml-1">{profileData.className}</p>
            </div>
            <div className="text-white p-2 rounded-md w-full h-full">
              {/* Row 1 */}
              <div className="flex items-center justify-between mb-2 -mx-1 text-sm">
                <div className="flex items-center text-gray-300">
                  <img src={level} alt="Level Icon" className="w-6 h-6 mr-2" />
                  <span>Рівень:</span>
                </div>
                <span className="bg-[#fb9b07] text-black px-2 text-center rounded-full flex-1 max-w-16">
                  {profileData.level}
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between mb-2 text-sm text-gray-300 -mx-1">
                <div className="flex items-center">
                  <img src={score} alt="Points Icon" className="w-6 h-6 mr-2" />
                  <span>Бали:</span>
                </div>
                <span className="bg-[#fb9b07] text-black px-2 text-center rounded-full flex-1 max-w-16">
                  {profileData.points}
                </span>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between text-sm text-gray-300 -mx-1">
                <div className="flex items-center">
                  <img src={coins} alt="Coins Icon" className="w-6 h-6 mr-2" />
                  <span>Монети:</span>
                </div>
                <span className="bg-[#fb9b07] text-black px-2 text-center rounded-full flex-1 max-w-16">
                  {profileData.coins}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
