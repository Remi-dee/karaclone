import React from "react";

interface TradeRowProps {
  item: any;
  isLoading: boolean;
  handleBuyButton: (tradeId: string) => void;
}

const TradeRow: React.FC<TradeRowProps> = ({
  item,
  isLoading,
  handleBuyButton,
}) => {
  return (
    <tr
      id={item.trade_id}
      className="leading-[24px] overflow-auto text-[#464646] tracking-[-2%] border-b text-[16px] border-b-gray-500"
    >
      <td className="p-4">{item.trade_id}</td>
      <td className="p-4">
        {item.price} {item?.exit_currency}
      </td>
      <td className="p-4">
        {Number(item.amount) - Number(item?.sold)} {item?.currency}
      </td>
      <td className="p-4">
        {item.minimum_bid +
          " " +
          "-" +
          " " +
          (Number(item.amount) - Number(item?.sold))}
      </td>
      <td className="p-4">
        <button
          disabled={isLoading}
          onClick={() => handleBuyButton(item.trade_id)}
          className="w-[130px] h-[30px] rounded-md text-sm text-white-100 bg-primaryBtn p-1"
        >
          Buy
        </button>
      </td>
    </tr>
  );
};

export default TradeRow;
