import React from "react";

interface MobileCardProps {
  item: any;
  handleBuyButton: (id: string) => void;
  isLoading: boolean;
}

const BuyMobileCards: React.FC<{
  listOfTrades: any[];
  handleBuyButton: (id: string) => void;
  isLoading: boolean;
}> = ({ listOfTrades, handleBuyButton, isLoading }) => {
  return (
    <>
      {listOfTrades.map((item: any, i: any) => (
        <div
          key={i}
          className="  fd:py-[12px] fd:px-[8px] p-[20px]  font-inter justify-between sm:hidden border rounded-[24px] grid grid-cols-[60%_40%] md:hidden gap-[12px]"
        >
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-[#464646] leading-[17.8px] text-[14px]">
              TZN-324532A
            </h2>
            <h1 className="font-bold fd:text-[18px]  text-[#3D3D3D] leading-[30.51px] text-[24px]">
              2000{" "}
              <span className="font-[500] leading-[17.8px] text-[17.8px]">
                USD
              </span>
            </h1>
            <p className="text-[17.8px] fd:text-[13px] text-[#656565]">
              1550 NGN / $1
            </p>
            <span className=" flex items-center">
              <p className=" hidden sm:flex">Limit:</p>
              <p className="text-[14px]  flex fd:text-[11px] text-[#3D3D3D] leading-[17.8px] font-bold">
                10 - 2000 USD
              </p>
            </span>
          </div>
          <div className="flex items-end">
            <button
              disabled={isLoading}
              onClick={() => handleBuyButton(item.trade_id)}
              className="w-[130px] h-[30px] rounded-md text-sm text-white-100 bg-primaryBtn p-1"
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BuyMobileCards;
