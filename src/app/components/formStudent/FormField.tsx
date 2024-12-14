
interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  accept?: string;
  required?: boolean;
  className?: string;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  accept,
  required,
  className,
  error,
}) => {
  return (
    <div className={`form-field space-y-2 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full p-2 border rounded focus:outline-none focus:ring ${
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
          aria-describedby={`${name}-description`}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={type === "file" ? undefined : value}
          onChange={onChange}
          accept={accept}
          required={required}
          className={`w-full p-2 border rounded focus:outline-none focus:ring ${
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
          aria-describedby={`${name}-description`}
          aria-invalid={!!error}
        />
      )}
      {error ? (
        <span id={`${name}-description`} className="text-sm text-red-600">
          {error}
        </span>
      ) : (
        <span id={`${name}-description`} className="text-sm text-gray-500">
          {required ? "This field is required" : "This field is optional"}
        </span>
      )}
    </div>
  );
};

export default FormField;
