import React, { useState } from "react";
import Header from "../components/Header";
import DynamicForm from "../components/DynamicForm";
import { phoneFormInputs, emailFormInputs } from "../utils/formInputs";
import DividerWithText from "../components/DividerWithText";
import SocialButtons from "../components/SocialButtons";
import PolicyTerms from "../components/PolicyTerms";

const Register: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<"phone" | "email">(
    "phone"
  );

  const handleOptionClick = (option: "phone" | "email") => {
    setSelectedOption(option);
  };

  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log("Form submitted with data:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col main text-white">
      <Header pageName="Реєстрація" />
      <div className="w-full p-4 mt-16 sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          <div>
            <div className="flex justify-center mt-4 mx-3">
              <div
                className={`cursor-pointer flex-1 ${
                  selectedOption === "phone"
                    ? "text-white-500 border-b-4 border-white-500"
                    : "text-gray-400 border-b-4 border-gray-400"
                }`}
                onClick={() => handleOptionClick("phone")}
              >
                Номер телефону
              </div>
              <div
                className={`cursor-pointer flex-1 ${
                  selectedOption === "email"
                    ? "text-white-500 border-b-4 border-white-500"
                    : "text-gray-400 border-b-4 border-gray-400"
                }`}
                onClick={() => handleOptionClick("email")}
              >
                Email
              </div>
            </div>

            <div className="mt-6">
              {selectedOption === "phone" && (
                <DynamicForm
                  inputs={phoneFormInputs}
                  submitText="Зареєструватись"
                  onSubmit={handleFormSubmit}
                />
              )}

              {selectedOption === "email" && (
                <DynamicForm
                  inputs={emailFormInputs}
                  submitText="Зареєструватись"
                  onSubmit={handleFormSubmit}
                />
              )}
            </div>
            <DividerWithText text="або" />
          </div>

          {/* ButtonSet Component */}
          <SocialButtons />
        </div>
        <PolicyTerms />
      </div>
    </div>
  );
};

export default Register;
