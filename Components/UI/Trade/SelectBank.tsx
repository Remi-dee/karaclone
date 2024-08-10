import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useGetBeneficiariesQuery } from "@/redux/features/trade/tradeApi";
import { toggleBuyTradeSuccessModal } from "@/redux/features/user/userSlice";
import svgBank from "@/public/svg/svgBank.svg";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";
import { closeModal } from "@/redux/modal/modalSlice";

interface SelectBankProps {
  onSelect: (selected: string | number) => void;
  onAccountAndNameChange: (item: any) => void;
}

const SelectBank: React.FC<SelectBankProps> = ({
  onSelect,
  onAccountAndNameChange,
}) => {
  const [selected, setSelected] = useState<string | number>("");
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetBeneficiariesQuery("");

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleSuccessMessage = () => {
    if (!selected) {
      return toast.warn("Select an option!");
    }
    onSelect(selected);
    if (selected === "itemid") {
      dispatch(toggleBuyTradeSuccessModal(false));
    } else {
      dispatch(closeModal());
    }
  };

  const handleSelect = (item: any) => {
    setSelected(item._id);
    onAccountAndNameChange(item);
  };

  if (isLoading) return <div>Fetching your beneficiaries...</div>;
  if (error) return <div>Error fetching beneficiaries</div>;

  return (
    <div className="mb-[10rem] h-full w-full md:w-[350px] min-h-max">
      <div className="w-full justify-center flex">
        <Image src={svgBank} alt="Bank" />
      </div>
      <div className="text-center flex flex-col gap-[12px] mt-[24px]">
        <h1 className="leading-[34.8px] tracking-[-2%] font-[600] text-[29px]">
          Select Beneficiary
        </h1>
        <p className="leading-[24px] text-[#7C7C7C] text-[16px]">
          Please select a beneficiary from the list of existing ones, or
          alternatively, you can choose to add a new beneficiary.
        </p>
      </div>
      <div className="mt-[24px] w-full flex flex-col gap-[24px]">
        {data.map((item: any) => (
          <div
            key={item._id}
            className={`h-[75px] cursor-pointer flex justify-between items-center rounded-[8px] w-full border border-[#DCDCDC] p-4 gap-2 ${
              selected === item._id ? "border-purple-500" : ""
            }`}
            onClick={() => handleSelect(item)}
          >
            <div className="flex gap-[12px]">
              <input
                type="radio"
                className="w-[19px] h-[19px]"
                name="radio"
                id={`radio-${item._id}`}
                checked={selected === item._id}
                onChange={() => handleSelect(item)}
              />
              <div className="flex flex-col gap-[4px] justify-start">
                <h1 className="text-[16px] leading-[19.2px] tracking-[-2%] font-medium">
                  {item.name}
                </h1>
                <h2>{item.account}</h2>
              </div>
            </div>
            <Image
              src={
                item.currency === "NGN"
                  ? NGN
                  : item.currency === "USD"
                  ? USD
                  : GBP
              }
              alt="Currency"
            />
          </div>
        ))}
        <div
          className={`h-[75px] flex justify-between items-center rounded-[8px] w-full border border-[#DCDCDC] p-4 gap-2 ${
            selected === "itemid" ? "border-purple-500" : ""
          }`}
          onClick={() => setSelected("itemid")}
        >
          <div className="flex gap-[12px]">
            <input
              type="radio"
              className="w-[19px] h-[19px]"
              name="radio"
              id="radio-new"
              checked={selected === "itemid"}
              onChange={() => setSelected("itemid")}
            />
            <p className="text-[#7F56D9] leading-[20px] tracking-[-2%] font-semibold text-[14px]">
              New Recipient
            </p>
          </div>
        </div>
        <button
          onClick={handleSuccessMessage}
          className="p-[12px] rounded-[8px] text-white-100 bg-[#7F56D9] w-full h-[44px] mb-[2rem]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectBank;
