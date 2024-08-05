import Image from "next/image";
import USD from "@/public/Images/USD.png";

const TradeHistory = () => {
  return (
    <div className=" w-[550px] m-0 overflow-auto  flex  justify-center   h-[485px]">
      <div className="  mt-[24px]   ">
        <p className="text-xl mb-[24px] text-center text-[#3D3D3D]  tracking-[-2%] leading-[24px]  font-bold ">
          Trade History
        </p>
        <div className="flex   w-[470px]  items-center  p-[8px_16px_8px_16px]  gap-10 rounded-md bg-[#7F56D91A]">
          <div className=" justify-center flex flex-col w-[312px] content-center   ">
            <div className="flex  mx-auto  w-max justify-start items-center gap-2">
              <Image src={USD} alt="" width={15} height={15} />
              <span className="font-semibold text-[14px] leadidng-[16.8px] text-[#1E1E1E]">
                US Dollar
              </span>
            </div>
            <div className=" w-max  mx-auto">
              <p className="text-[12px] w-max    text-[#7C7C7C] leading-[14.4px] mt-[8xp] tracking-[-2%]    ">
                Units left :{" "}
                <span className=" font-semibold text-[14px] leadidng-[16.8px] text-[#1E1E1E] tracking-[-2%]">
                  0 USD
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[8px] flex justify-center items-center ml-6 bg-[#FF104B1A] w-[102px] h-[30px]   ">
            <p className="text-xs font-semibold text-red-600  leading-[14.4px] tracking-[-2%]   ">
              Trade Closed
            </p>
          </div>
        </div>
        <table className="w-[100%] mt-6 text-black-200 overflow-auto border-collapse">
          <tr className="bg-gray-900  text-[16px] font-medium tracking-[-2%]  leading-[24%]   ">
            <th className="p-4 text-left">Date & Time</th>
            <th className="p-4 text-left">Amount Sold</th>
            <th className="p-4 text-left">Remaining Unit</th>
          </tr>
          <tr className="text-gray-800 border-b text-xs border-b-gray-500">
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-right  ">
              12/02/2024 <span className=" mr-[5px]"> </span> |{" "}
              <span className=" ml-[5px]">2.00PM</span>
            </td>
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-left">
              500 USD
            </td>
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-left">
              1500 USD
            </td>
          </tr>
          <tr className="text-gray-800 border-b text-xs border-b-gray-500">
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-right  ">
              12/02/2024 <span className=" mr-[5px]"> </span> |{" "}
              <span className=" ml-[5px]">2.00PM</span>
            </td>
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-left">
              500 USD
            </td>
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-left">
              1500 USD
            </td>
          </tr>
          <tr className="text-gray-800 border-b text-xs border-b-gray-500">
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-right  ">
              12/02/2024 <span className=" mr-[5px]"> </span> |{" "}
              <span className=" ml-[5px]">2.00PM</span>
            </td>
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-left">
              500 USD
            </td>
            <td className="p-4  text-[#7C7C7C] text-[16px] leading-[24px] text-left">
              1500 USD
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;
