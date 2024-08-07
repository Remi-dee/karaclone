import React from "react";

type RadioButton = {
  label: string;
  name: string;
  checked: boolean;
  onChange: any;
};

const RadioButton = ({ label, name, checked, onChange }: RadioButton) => (
  <div className="w-full flex items-center   align-middle">
    <label
      htmlFor={name}
      className="font-semibold  align-middle text-sm flex  gap-[2px] items-center"
    >
      <input
        type="radio"
        name={name}
        value={String(checked)}
        checked={checked}
        onChange={onChange}
        className="mr-2  self-center"
        style={{
          backgroundColor: checked ? "lightpurple" : "transparent",
        }}
      />
      <span className=" mt-[3px] md:mt-0 self-center ">{label}</span>
    </label>
  </div>
);

type questionSection = {
  question: string;
  name: any;
  options: Array<any>;
};

const QuestionSection = ({ question, name, options }: questionSection) => (
  <>
    <div className="mt-10 mb-5">
      <p className="text-[#1E1E1E] text-[16px] md:text-xl font-bold">
        {question}
      </p>
    </div>
    <div className="sm:space-y-8 space-y-4">
      <div className=" flex  flex-col gap-[0.5rem]">
        {options.map((option: any, index: any) => (
          <RadioButton
            key={index}
            label={option.label}
            name={name}
            checked={option.checked}
            onChange={option.onChange}
          />
        ))}
      </div>
    </div>
  </>
);

export default QuestionSection;
