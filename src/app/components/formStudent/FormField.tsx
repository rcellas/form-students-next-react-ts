import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  accept?: string;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, name, value, onChange, required, accept, className }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">{label}</label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={className}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          accept={accept}
          className={className}
        />
      )}
    </div>
  );
};

export default FormField;