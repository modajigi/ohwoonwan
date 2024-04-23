interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;