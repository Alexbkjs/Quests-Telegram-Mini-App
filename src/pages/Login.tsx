import Header from "../components/Header";
import DynamicForm from "../components/DynamicForm";
import { emailPhoneFormInputs } from "../utils/formInputs";
import DividerWithText from "../components/DividerWithText";
import SocialButtons from "../components/SocialButtons";
import PolicyTerms from "../components/PolicyTerms";

import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log("Form submitted with data:", formData);

    if (formData.emailPhone === "test" && formData.password === "test") {
      navigate("/main"); // Programmatically navigate to "/main"
    } else {
      // Handle other cases or show error message
    }
  };

  return (
    <div className="min-h-screen flex flex-col main text-white flex-grow">
      <Header pageName="Вхід" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          <DynamicForm
            inputs={emailPhoneFormInputs}
            submitText="Увійти"
            onSubmit={handleFormSubmit}
          />

          <DividerWithText text="або" />

          {/* ButtonSet Component */}
          <SocialButtons />
        </div>
      </div>
      <PolicyTerms className="" />
    </div>
  );
};

export default Login;
