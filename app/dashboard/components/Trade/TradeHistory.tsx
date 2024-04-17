import Image from "next/image";
import USD from "../../../../public/Images/USD.png";

const TradeHistory = () => {
  return (
    <div className="p-0 m-0">
      <div className="w-[90%] mx-auto">
        <p className="text-xl text-center text-black-200 font-semibold py-4">Trade History</p>
        <div className="flex justify-center items-center p-1 gap-10 rounded-md bg-[#7F56D91A]">
          <div>
            <div className="flex justify-start items-center gap-2">
              <Image src={USD} alt=""  width={15} height={15}/>
              <span className="font-semibold text-xs text-black-200">US Dollar</span>
            </div>
            <p className="text-xs">unit left : <span className="text-xs font-semibold text-black-200">0 USD</span></p>
          </div>
          <div className="rounded-md ml-6 bg-[#FF104B1A]">
            <p className="text-xs font-semibold text-red-600 p-1">Trade Closed</p>
          </div>
        </div>
        <table className="w-[100%] mt-6 text-black-200 overflow-auto border-collapse">
            <tr className="bg-gray-900  text-xs">
                <th className="p-4 text-left">Date & Time</th>
                <th className="p-4 text-left">Amount Sold</th>
                <th className="p-4 text-left">Remaining Unit</th>
            </tr>
            <tr className="text-gray-800 border-b text-xs border-b-gray-500">
                <td className="p-4">12/02/2024 | <span>2.00PM</span></td>
                <td className="p-4">500 USD</td>
                <td className="p-4">1500 USD</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;
