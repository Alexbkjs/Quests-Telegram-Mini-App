import React, { useState } from "react";
import Header from "../components/Header";
import DynamicForm from "../components/DynamicForm";

// Define the type for form inputs
interface FormInput {
  type: "text" | "email" | "password" | "select";
  name: string;
  placeholder: string;
  options?: string[]; // For select fields
}

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

  // Define form inputs based on the selected option
  const phoneFormInputs: FormInput[] = [
    {
      type: "select",
      name: "countryCode",
      placeholder: "Country Code",
      options: ["+1", "+2", "+3", "+4"], // Example country codes
    },
    {
      type: "text",
      name: "phoneNumber",
      placeholder: "Phone Number",
    },
    {
      type: "text",
      name: "verificationCode",
      placeholder: "Verification Code",
    },
  ];

  const emailFormInputs: FormInput[] = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col main text-white ">
      <Header pageName="Реєстрація" />
      <div className="w-full p-4 mt-16">
        <div className="flex justify-center mb-4 mx-3">
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

        <div className="mt-4">
          {selectedOption === "phone" && (
            <DynamicForm
              inputs={phoneFormInputs}
              submitText="Register"
              onSubmit={handleFormSubmit}
            />
          )}

          {selectedOption === "email" && (
            <DynamicForm
              inputs={emailFormInputs}
              submitText="Register"
              onSubmit={handleFormSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
