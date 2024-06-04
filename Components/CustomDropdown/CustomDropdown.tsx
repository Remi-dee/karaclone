import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface DropdownOption {
  value: string;
  label: string;
  imageUrl?: StaticImageData; // Updated type for imageUrl
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
  className?: string;
  displayImages?: boolean;
}

const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = "Select",
  className = "",
  displayImages = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsHovered(false); // Close dropdown after selecting an option
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={` border-[#DCDCDC] p-[4px_24px_4px_24px]  flex justify-center items-center content-center rounded-md  text-gray-800 gap-[10px] cursor-pointer ${
          isHovered ? "bg-white-100" : ""
        }`}
        onClick={() => setIsHovered(!isHovered)}
      >
        {selectedOption ? (
          <>
            {displayImages && selectedOption.imageUrl && (
              <Image
                src={selectedOption.imageUrl}
                alt={selectedOption.label}
                className="w-4 "
              />
            )}
            <div className="">{selectedOption.label}</div>
          </>
        ) : (
          placeholder
        )}
        <svg
          className={`w-4 h-4 min-w-4 min-h-4 inline-block ml-1 transition-transform duration-300 transform ${
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
        <div className="absolute top-full w-full left-0 z-50  bg-white-100 rounded-md mt-1 shadow-md">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center  px-5 py-2 font-semibold text-gray-400 rounded-md cursor-pointer hover:bg-[#F3EDFF]"
              onClick={() => handleOptionClick(option)}
            >
              {displayImages && option.imageUrl && (
                <Image
                  src={option.imageUrl}
                  alt={option.label}
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
