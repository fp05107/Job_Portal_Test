import React from "react";

interface OptionButtonListProps {
  options: string[];
  onSelect: (option: string) => void;
}

const OptionButtonList: React.FC<OptionButtonListProps> = ({ options, onSelect }) => {
  return (
    <div className="space-y-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className="group w-full relative px-6 py-4 text-left font-medium text-gray-800 dark:text-white border-2 border-[#e9e9e9] dark:border-[#81004d4f] rounded-xl shadow-md transition-all duration-300 overflow-hidden bg-white/5 hover:bg-white/10 dark:bg-black/5 dark:hover:bg-black/10"
        >
          <span
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(129, 0, 77, 0.15), rgba(254, 81, 130, 0.15))',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          />
          {/* Content */}
          <span className="relative z-10 flex items-center">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#81004D] to-[#fe5182] mr-3"></span>
            {option}
          </span>
        </button>
      ))}
    </div>
  );
};

export default OptionButtonList;