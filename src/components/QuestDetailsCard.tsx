import React from "react";

interface QuestDetailsCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const QuestDetailsCard: React.FC<QuestDetailsCardProps> = ({
  icon,
  title,
  content,
}) => {
  return (
    <div className="flex items-center p-4 bg-[#1e1e1f] rounded-lg">
      <div className="w-1/5 flex justify-center">{icon}</div>
      <div className="w-4/5">
        <h3 className="text-xl font-bold">{title}</h3>
        {content}
      </div>
    </div>
  );
};

export default QuestDetailsCard;
