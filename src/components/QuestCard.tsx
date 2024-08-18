import StarIcon from "../assets/icons/StarIcon";

interface QuestCardProps {
  quest: {
    imageUrl: string;
    name: string;
    description: string;
    award: string;
  };
}

const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  return (
    <div className=" bg-transparent rounded-lg p-3 my-4 flex items-center  ">
      <div className="w-1/3 ">
        <img src={quest.imageUrl} alt={quest.name} className="rounded-lg" />
      </div>
      <div className=" ml-4 w-2/3 ">
        <div className="font-semibold mb-1">{quest.name}</div>
        <div className="text-[0.7rem] mb-2">{quest.description}</div>
        <div className="flex items-center">
          <StarIcon className="star-icon w-4 h-4 mr-1" />
          <span className="text-[0.7rem]">{quest.award}</span>
        </div>
        <div className="mt-2 ">
          <button className=" button bg-purple-500 text-white px-3 py-1 rounded-full text-[0.7rem] font-semibold mr-2">
            Прийняти
          </button>
          <button className="button bg-gray-600 text-white px-3 py-1 rounded-full text-[0.7rem] font-semibold">
            Докладніше
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
