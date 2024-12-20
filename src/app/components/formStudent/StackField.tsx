import React from "react";

interface StackFieldProps {
  stacks: string[];
  selectedStacks: string[];
  onChange: (stackName: string) => void;
  className?: string;
}

const StackField: React.FC<StackFieldProps> = ({ stacks, selectedStacks, onChange, className }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Stack</label>
      <div className={className}>
        {stacks.map((stack) => (
          <label key={stack} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              id={stack}
              name="stack"
              value={stack}
              checked={selectedStacks.includes(stack)}
              onChange={() => onChange(stack)}
              className="form-checkbox"
            />
            <span className="ml-2">{stack}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StackField;