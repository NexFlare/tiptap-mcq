import React from "react";

interface HeaderButtonProps {
  text: string;
  onClick: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-slate-950 text-slate-50 rounded px-2 hover:cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default HeaderButton;
