import React from "react";
import Image, { StaticImageData } from "next/image";
import { SlOptions } from "react-icons/sl";
import { TradeItem, CurrencyImages } from "@/app/helpers/TradeTypes";

interface SellTableRowsProps {
  data: TradeItem[];
  currencyImages: CurrencyImages;
  GBP: StaticImageData;
  toggleOption: (id: string) => void;
  showOption: string | null;
  openOptionModal: () => void;
}

const SellTableRows: React.FC<SellTableRowsProps> = ({
  data,
  currencyImages,
  GBP,
  toggleOption,
  showOption,
  openOptionModal,
}) => {
  return (
    <>
      {data?.map((item) => {
        const currencyImage = currencyImages[item.currency] || GBP;

        return (
          <tr
            key={item._id}
            className="leading-[24px] tracking-[-2%] text-[16px] text-[#464646] border-b font-semibold border-b-gray-500"
          >
            <td className="flex justify-start items-center p-4 gap-1">
              <Image
                src={currencyImage}
                alt={item.currency}
                width={15}
                height={15}
              />
              <p className="text-sm">{item.currency}</p>
            </td>
            <td className="p-4">{`${item.price} ${item.exit_currency}`}</td>
            <td className="p-4">
              {`${item.available_amount} ${item.currency}`}
            </td>
            <td className="p-4">
              {`${item.minimum_bid} - ${
                Number(item.amount) - Number(item.sold)
              }`}
            </td>
            <td className="p-4">{item.payment_method || "X Method"}</td>
            <td className="p-4">{item.sold}</td>
            <td className="relative p-4">
              <span
                onClick={() => toggleOption(item._id)}
                className="flex items-center w-full relative text-center cursor-pointer"
              >
                <SlOptions className="text-[#989898] absolute left-[1.7rem]" />
              </span>
              {showOption === item._id && (
                <span className="absolute top-8 right-4 w-[110px] h-[50px] z-10 bg-white-100 rounded-md shadow-lg">
                  <span
                    onClick={openOptionModal}
                    className="px-4 pt-2 cursor-pointer text-black-200 text-xs font-semibold"
                  >
                    View History
                  </span>
                </span>
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default SellTableRows;
