import Header from "../components/Header";
import DynamicForm from "../components/DynamicForm";
import { emailPhoneFormInputs } from "../utils/formInputs";
import DividerWithText from "../components/DividerWithText";
import SocialButtons from "../components/SocialButtons";
import PolicyTerms from "../components/PolicyTerms";

const Login: React.FC = () => {
  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log("Form submitted with data:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col main text-white">
      <Header pageName="Вхід" />
      <div className="w-full p-4 mt-24 sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
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

        <PolicyTerms className="my-36" />
      </div>
    </div>
  );
};

export default Login;
