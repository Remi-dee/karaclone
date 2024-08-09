import React from "react";
import Image from "next/image";

const SellTradeMobileCard = ({ item, currencyImage, openOptionModal }: any) => {
  return (
    <div className="fd:py-[12px] fd:px-[8px] p-[20px] font-inter justify-between sm:hidden border rounded-[24px] flex w-full md:hidden gap-[12px]">
      <div className="flex w-full flex-col gap-[12px]">
        <div className="flex gap-[6px] items-center">
          <Image
            src={currencyImage}
            alt={item?.currency}
            width={16}
            height={16}
          />
          <p>{item?.currency}</p>
        </div>
        <div>
          <h1 className="font-bold fd:text-[18px] text-[#3D3D3D] leading-[30.51px] text-[24px]">
            {item?.available_amount}
            <span className="font-[500] leading-[17.8px] text-[17.8px]">
              {item?.currency}
            </span>
          </h1>
        </div>
        <div>
          <span className="flex items-center">
            <p className="flex">Limit:</p>
            <p className="text-[14px] flex fd:text-[11px] text-[#3D3D3D] leading-[17.8px] ml-[4px] font-bold">
              {`${item?.minimum_bid} - ${
                Number(item?.amount) - Number(item?.sold)
              }`}
            </p>
          </span>
        </div>
        <div>
          <span className="flex items-center">
            <p className="flex">Sold:</p>
            <p className="text-[14px] flex fd:text-[11px] text-[#3D3D3D] ml-[4px] leading-[17.8px] font-bold">
              {item?.sold + " " + item?.currency}
            </p>
          </span>
        </div>
        <div className="flex h-max w-full">
          <button
            onClick={() => openOptionModal()}
            className="p-[8px_14px_8px_14px] h-[48px] w-full rounded-[16px] leading-[20px] font-inter font-[600] text-sm text-white-100 bg-primaryBtn"
          >
            View History
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellTradeMobileCard;
