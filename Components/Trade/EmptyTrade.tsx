import Image from "next/image";
import emptyTrade from "@/public/Images/emptyTrade.png";

const EmptyTrade = () => {
  return (
    <div className="m-0 p-0 mt-[19px] h-[234px]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80px] h-[80px] mt-6 mb-2">
          <Image src={emptyTrade} alt="" className="w-[82px] h-[82px]" />
        </div>
        <h5 className="text-[18px]  leading-[28px] font-bold text-center">No Trade Found</h5>
        <p className="text-[16px] leading-[24px] text-[#989898] text-center  py-2">Sorry, but there are currently no trade matching your request.</p>
        <button className="my-4 p-[12px] rounded-[8px] bg-primaryBtn h-[44px] w-[430px] text-white-100 ">Create Ads</button>
      </div>
    </div>
  );
};

export default EmptyTrade;