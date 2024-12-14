
interface StackFieldProps {
  stacks: string[];
  selectedStacks: string[];
  onChange: (stackName: string) => void;
  className?: string;
}

const StackField: React.FC<StackFieldProps> = ({ stacks, selectedStacks, onChange, className }) => (
  <fieldset className={`form-field space-y-2 ${className}`}>
    <legend className="block text-sm font-medium text-gray-700">Stack</legend>
    <div className="space-y-1">
      {stacks.map((stack) => (
        <label key={stack} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={stack}
            name={stack}
            checked={selectedStacks.includes(stack)}
            onChange={() => onChange(stack)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            aria-describedby={`${stack}-description`}
          />
          <span className="text-sm text-gray-900">{stack}</span>
          <span id={`${stack}-description`} className="sr-only">
            {selectedStacks.includes(stack) ? "Selected" : "Not selected"}
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default StackField;
