import { ChangeEventHandler } from "react";

interface SelectBoxProps {
  options: string[];
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

function SelectBox({ options, value, placeholder, onChange }: SelectBoxProps) {
  return (
    <div className="relative">
      <select
        className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
