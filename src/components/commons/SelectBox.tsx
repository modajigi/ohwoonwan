import { ChangeEventHandler } from "react";

interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

function SelectBox({ options, value, onChange }: SelectBoxProps) {
  return (
    <div className="relative">
      <select
        className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={value}
        onChange={onChange}
      >
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