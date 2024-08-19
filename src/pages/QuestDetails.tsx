import React from "react";
import Header from "../components/Header";
import QuestDetailsCard from "../components/QuestDetailsCard";
import { FaFlag, FaTasks, FaGift } from "react-icons/fa";
import useQuestDetails from "../hooks/useQuestDetails";
import StatusMessage from "../components/StatusMessage"; // Import the StatusMessage component
import Fallback from "../components/Fallback";

const QuestDetails: React.FC = () => {
  const { quest, loading, error } = useQuestDetails();

  if (loading) return <Fallback />;
  if (error) return <StatusMessage message={error} />;
  if (!quest) return <StatusMessage message="Quest not found" />;

  return (
    <div className="min-h-screen flex flex-col text-white bg-[#141415]">
      <Header pageName="Деталі квесту" />
      <main className="flex-grow p-6">
        <h2 className="text-3xl font-bold mb-6">{quest.name}</h2>

        <div className="space-y-4">
          <QuestDetailsCard
            icon={<FaFlag className="text-4xl text-yellow-500" />}
            title="Мета"
            content={<p>{quest.questDetails_goal}</p>}
          />
          <QuestDetailsCard
            icon={<FaTasks className="text-4xl text-blue-500" />}
            title="Вимоги"
            content={
              <ul className="list-disc list-inside">
                {quest.questDetails_requirements.map(
                  (req: string, index: number) => (
                    <li key={index}>{req}</li>
                  )
                )}
              </ul>
            }
          />
          <QuestDetailsCard
            icon={<FaGift className="text-4xl text-green-500" />}
            title="Нагороди"
            content={
              <ul className="list-disc list-inside">
                {quest.questDetails_rewards.map(
                  (reward: string, index: number) => (
                    <li key={index}>{reward}</li>
                  )
                )}
              </ul>
            }
          />
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Почати квест
          </button>
        </div>
      </main>
    </div>
  );
};

export default QuestDetails;
