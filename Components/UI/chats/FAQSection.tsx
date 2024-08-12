import React from "react";
import Image from "next/image";
import rightarrow from "@/public/svg/rightarrow.svg";

const FAQSection = ({
  data,
  handleFAQClick,
}: {
  data: number[];
  handleFAQClick: () => void;
}) => (
  <div className="pb-[1rem]">
    <div className="h-full w-full flex justify-center mt-[24px]">
      <div className="max-h-[248px] h-full flex flex-col w-[327px] p-[16px] gap-[10px] rounded-[8px] border border-[#EFEFEF]">
        {data.map((e, i) => (
          <React.Fragment key={i}>
            <div className="flex justify-between items-center">
              <p className="text-[10px] text-[black] leading-[16px] tracking-[-2%] h-full w-full">
                Can I trust the sellers/buyers on the platform?
              </p>
              <Image
                onClick={handleFAQClick}
                src={rightarrow}
                alt="Arrow right"
                className="w-[14px] cursor-pointer h-[12px]"
              />
            </div>
            {i < data.length - 1 && (
              <div className="bg-[#EFEFEF] h-[0.5px] mt-[12px] w-[295px]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default FAQSection;
