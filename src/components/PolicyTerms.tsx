import React from "react";

// Define the props interface
interface PolicyTermsProps {
  className?: string;
  marginBottom?: string; // New prop for configurable margin from bottom
}

const PolicyTerms: React.FC<PolicyTermsProps> = ({
  className,
  marginBottom,
}) => {
  return (
    <footer
      className={`flex justify-center w-full ${className || ""}`}
      style={{ marginBottom }}
    >
      <p className="text-gray-600 mx-[1.75rem] mb-[3rem] text-[0.65rem] text-center">
        Продовжуючи, ви автоматично приймаєте наші Загальні положення та умови,
        Політику конфіденційності та політику використання файлів cookie
      </p>
    </footer>
  );
};

export default PolicyTerms;
