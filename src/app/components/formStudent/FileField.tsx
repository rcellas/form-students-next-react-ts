import React, { useState } from "react";

interface FileFieldProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  className?: string;
}

const FileField: React.FC<FileFieldProps> = ({ label, name, onChange, accept, className }) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && accept && !accept.split(",").includes(file.type)) {
      setError(`Invalid file type. Accepted types: ${accept}`);
    } else {
      setError(null);
      onChange(e);
    }
  };

  return (
    <div className={`form-field space-y-2 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type="file"
        name={name}
        onChange={handleChange}
        accept={accept}
        className={`w-full p-2 border rounded focus:outline-none focus:ring ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
        aria-describedby={`${name}-description ${name}-error`}
        aria-invalid={!!error}
      />
      <span id={`${name}-description`} className="text-sm text-gray-500">
        {accept ? `Accepted file types: ${accept}` : "No file type restrictions"}
      </span>
      {error && (
        <span id={`${name}-error`} className="text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
};

export default FileField;
