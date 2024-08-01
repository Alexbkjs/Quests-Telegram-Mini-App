import React, { useState } from "react";

interface InputField {
  name: string;
  placeholder: string;
  type?: string;
  options?: string[]; // For select fields
}

interface DynamicFormProps {
  inputs: InputField[];
  submitText: string;
  onSubmit: (formData: Record<string, string>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  inputs,
  submitText,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>(
    inputs.reduce((acc, input) => ({ ...acc, [input.name]: "" }), {})
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    !formData.countryCode && (formData.countryCode = "+380");
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {inputs.map((input, index) => {
        if (input.type === "select" && inputs[index + 1]) {
          return (
            <div key={index} className="flex space-x-4">
              <select
                name={input.name}
                value={formData[input.name] || ""}
                onChange={handleChange}
                className="select rounded-xl w-1/4 px-2 py-3 border-2 border-[#6527a4] bg-transparent placeholder-gray-500 "
                style={{ backgroundColor: "transparent", color: "gray" }}
              >
                {input.options?.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <input
                name={inputs[index + 1].name}
                type={inputs[index + 1].type || "text"}
                placeholder={inputs[index + 1].placeholder}
                value={formData[inputs[index + 1].name] || ""}
                onChange={handleChange}
                className="input rounded-xl w-3/4 px-4 py-3 border-2 border-[#6527a4] bg-transparent text-white placeholder-gray-500"
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </div>
          );
        } else if (index === 0 || inputs[index - 1].type !== "select") {
          return (
            <div key={index}>
              <input
                name={input.name}
                type={input.type || "text"}
                placeholder={input.placeholder}
                value={formData[input.name] || ""}
                onChange={handleChange}
                className="input rounded-xl w-full px-4 py-3 border-2 border-[#6527a4] bg-transparent text-white placeholder-gray-500"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              />
            </div>
          );
        } else {
          return null;
        }
      })}

      <button
        type="submit"
        className="btn rounded-xl w-full  py-3 mt-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-md border-2 border-[#6527a4] hover:bg-gradient-to-l"
      >
        {submitText}
      </button>
    </form>
  );
};

export default DynamicForm;
