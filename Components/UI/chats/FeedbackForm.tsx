import React from "react";

const FeedbackForm = () => (
  <div className="h-[200px] w-full flex justify-center mt-[24px]">
    <div className="h-full flex flex-col w-[327px] p-[16px] gap-[10px] rounded-[8px] border border-[#EFEFEF]">
      <h1 className="font-semibold text-[12px] leading-[14.4px] tracking-[-2%] text-[#292929]">
        Share your thoughts or suggestions with us.
      </h1>

      <div className="mt-[8px] select-container text-[14px] leading-[20px] text-[#3D3D3D]">
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="text-[14px] mt-[12px] h-[44px] leading-[20px] text-[#3D3D3D] w-full">
        <p className="font-semibold text-[12px] leading-[14.4px] tracking-[-2%] text-[#292929]">
          Leave more details below
        </p>
        <input
          type="text"
          placeholder=""
          className="mt-[8px] outline-none border h-full p-[12px] w-full rounded-[12px] border-[#3D3D3D]"
          name=""
          id=""
        />
      </div>
    </div>
  </div>
);

export default FeedbackForm;
