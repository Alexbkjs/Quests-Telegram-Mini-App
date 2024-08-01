import React from "react";

// Define the props interface
interface PolicyTermsProps {
  className?: string;
}

const PolicyTerms: React.FC<PolicyTermsProps> = ({ className }) => {
  return (
    <footer className={`flex mx-auto max-w-md ${className || ""}`}>
      <p className="text-gray-600 mx-3 text-[0.65rem] text-center">
        Продовжуючи, ви автоматично приймаєте наші Загальні положення та умови,
        Політику конфіденційності та політику використання файлів cookie
      </p>
    </footer>
  );
};

export default PolicyTerms;
