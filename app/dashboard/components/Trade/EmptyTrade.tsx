import Image from "next/image";
import emptyTrade from "../../../../public/Images/emptyTrade.png";

const EmptyTrade = () => {
  return (
    <div className="m-0 p-0">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80px] h-[80px] mt-6 mb-2">
          <Image src={emptyTrade} alt="" className="w-full h-full" />
        </div>
        <h5 className="text-xs font-bold text-center">No Trade Found</h5>
        <p className="text-xs text-center text-gray-300 py-2">Sorry, but there are currently no trade matching your request.</p>
        <button className="my-4 p-1 rounded-md bg-primaryBtn text-white-100 w-[250px]">Create Ads</button>
      </div>
    </div>
  );
};

export default EmptyTrade;
