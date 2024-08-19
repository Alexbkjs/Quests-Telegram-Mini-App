import React from "react";
import Header from "../components/Header";
import QuestDetailsCard from "../components/QuestDetailsCard";
import useQuestDetails from "../hooks/useQuestDetails";
import StatusMessage from "../components/StatusMessage"; // Import the StatusMessage component
import Fallback from "../components/Fallback";
import Icon from "../components/Icon";

import { goal, requirements, rewards } from "../assets/images/index";
import ButtonGradient from "../components/ButtonGradient";

const QuestDetails: React.FC = () => {
  const { quest, loading, error } = useQuestDetails();

  if (loading) return <Fallback />;
  if (error) return <StatusMessage message={error} />;
  if (!quest) return <StatusMessage message="Quest not found" />;

  return (
    <div className="min-h-screen flex flex-col text-white bg-[#141415]">
      <Header pageName="Деталі квесту" className="mb-4 text-gray-300" />
      <main className="flex-grow p-6">
        <h2 className="text-xl font-bold mb-6 flex justify-center text-gray-200">
          {quest.name}
        </h2>

        <div className="space-y-6">
          <QuestDetailsCard
            icon={<Icon src={goal} className="text-4xl text-yellow-500" />}
            title="Мета:"
            content={
              <>
                <div className="mt-2">{quest.questDetails_goal}</div>
              </>
            }
          />
          <QuestDetailsCard
            icon={
              <Icon src={requirements} className="text-4xl text-yellow-500" />
            }
            title="Вимоги:"
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
            icon={<Icon src={rewards} className="text-4xl text-yellow-500" />}
            title="Нагороди:"
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
          <ButtonGradient
            text="Почати квест"
            gradientColors="from-blue-500 to-purple-600"
            size="py-3 px-6"
          />
        </div>
      </main>
    </div>
  );
};

export default QuestDetails;
