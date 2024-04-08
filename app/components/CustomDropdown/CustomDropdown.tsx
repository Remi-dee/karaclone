import Image from "next/image";
import React, { useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
  imageUrl?: any; // Optional imageUrl prop for displaying images
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
  className?: string;
  displayImages?: boolean; // Optional prop to determine whether to display images
}

const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = "Select",
  className = "",
  displayImages = false,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`border border-gray-800 rounded-md p-2 text-gray-800 cursor-pointer ${
          isHovered ? "bg-white-100" : ""
        }`}
        onClick={() => setIsHovered(!isHovered)}
      >
        {selectedValue || placeholder}
        <svg
          className={`w-4 h-4 inline-block ml-1 transition-transform duration-300 transform ${
            isHovered ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 01-1.414 0 1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isHovered && (
        <div className="absolute top-full left-0 z-50 bg-white-100 rounded-md mt-1 shadow-md">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center px-5 py-2 font-semibold text-gray-400 rounded-md cursor-pointer hover:bg-[#F3EDFF]"
              onClick={() => handleOptionClick(option.value)}
            >
              {displayImages && option.imageUrl && (
                <Image
                  src={option.imageUrl}
                  alt={""}
                  className="w-4 h-4 mr-2"
                />
              )}
              <div className="px-2">{option.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
