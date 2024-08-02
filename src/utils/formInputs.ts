// Define the type for form inputs
export interface FormInput {
  type: "text" | "email" | "password" | "select";
  name: string;
  placeholder: string;
  autoComplete?: string;
  options?: string[]; // For select fields
}

export const phoneFormInputs: FormInput[] = [
  {
    type: "select",
    name: "countryCode",
    placeholder: "+380",
    options: ["+380", "+2", "+3", "+4"], // Example country codes
  },
  {
    type: "text",
    name: "phoneNumber",
    placeholder: "Номер телефону",
  },
  {
    type: "text",
    name: "verificationCode",
    placeholder: "Код підтвердження",
  },
];

export const emailFormInputs: FormInput[] = [
  {
    type: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Пароль",
    autoComplete: "current-password",
  },
];

export const emailPhoneFormInputs: FormInput[] = [
  {
    type: "text",
    name: "emailPhone",
    placeholder: "Email/Номер телефону",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Пароль",
  },
];
