import React, { useState } from "react";
import PurpleCheckBox from "../PurpleCheckBox";
import NigerianFlag from "@/public/svg/nigeriaflag.svg";
import Image from "next/image";
import CreateTradeSuccess from "./CreateTradeSuccess";
import { toast } from "react-toastify";
import { toggleBuyTradeSuccessModal } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import svgBank from "@/public/svg/svgBank.svg";
import { useGetBeneficiariesQuery } from "@/redux/features/user/userApi";
import { closeModal } from "@/redux/modal/modalSlice";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";
interface SelectBankProps {
  // onAccountChange: (account: string) => void;
  // onNameChange: (name: string) => void;
  onSelect: any;
  onAccountAndNameChange: (item: any) => void;
}

function SelectBank({ onSelect, onAccountAndNameChange }: SelectBankProps) {
  const [selected, setSelected] = useState<string | number>("");

  const dispatch = useDispatch();

  const handleSuccessMessage = () => {
    // setShowSuccess(true);

    if (selected === null) return toast.warn("Select an option!");
    onSelect(selected);
    if (selected === "itemid") {
      dispatch(toggleBuyTradeSuccessModal(false));
    } else {
      // instead of the modal that shows transaction success, close modal automatically.
      // dispatch(toggleBuyTradeSuccessModal(true));

      dispatch(closeModal());
    }
  };

  const handleSelect = (item: any) => {
    console.log("Selected item:", item); // Debugging log
    setSelected(item._id);
    // onAccountChange(item?.account);
    // onNameChange(item?.name);
    onAccountAndNameChange(item);
  };

  // if (ShowSuccess) {
  //   return <CreateTradeSuccess />;
  // }

  const { data, error, isLoading } = useGetBeneficiariesQuery("");

  if (isLoading) return <div>Fetching your beneficiaries...</div>;
  if (error) return <div>Error fetching beneficiaries</div>;

  return (
    <div className="  mb-[10rem] h-full w-[500px]  min-h-max">
      <div className=" w-full justify-center flex">
        <Image src={svgBank} alt="" />
      </div>

      <div className=" text-center flex flex-col gap-[12px] mt-[24px] ">
        <h1 className=" leading-[34.8px] tracking-[-2%] font-[600] text-[29px]   ">
          Select Beneficiary
        </h1>

        <p className=" leading-[24px] text-[#7C7C7C] text-[16px]   ">
          Please select a beneficiary from the list of existing ones, or
          alternatively, you can choose to add a new beneficiary.
        </p>
      </div>

      <div className=" mt-[24px] w-full flex flex-col gap-[24px]">
        {data.map((item: any) => (
          <div
            key={item._id}
            className={`h-[75px]  cursor-pointer flex justify-between items-center rounded-[8px] w-full border border-[#DCDCDC] p-4 gap-2 ${
              selected === item._id ? "border-purple-500" : ""
            }`}
            onClick={() => {
              setSelected(item.id);
              handleSelect(item);
            }}
          >
            <div className="flex gap-[12px]">
              <div>
                <input
                  type="radio"
                  className="w-[19px] h-[19px]"
                  name="radio"
                  id="radio"
                  checked={selected === item._id}
                  onChange={() => {
                    setSelected(item._id);
                    handleSelect(item);
                  }}
                />
              </div>
              <div className="flex flex-col gap-[4px] justify-start">
                <h1 className="text-[16px] leading-[19.2px] tracking-[-2%] font-medium">
                  {item?.name}
                </h1>
                <h2>{item?.account}</h2>
              </div>
            </div>
            <div>
              <Image
                src={
                  item?.currency === "NGN"
                    ? NGN
                    : item?.currency === "USD"
                    ? USD
                    : GBP
                }
                alt=""
              />
            </div>
          </div>
        ))}

        <div
          className={`h-[75px] flex justify-between items-center rounded-[8px] w-full border border-[#DCDCDC] p-4 gap-2 ${
            selected === "itemid" ? "border-purple-500" : ""
          }`}
          onClick={() => setSelected("itemid")}
        >
          <div className="flex gap-[12px]">
            <div>
              <input
                type="radio"
                className="w-[19px] h-[19px]"
                name="radio"
                id="radio"
                checked={selected === "itemid"}
                onChange={() => setSelected("itemid")}
              />
            </div>
            <div>
              <p className=" text-[#7F56D9] leading-[20px] tracking-[-2%] font-semibold text-[14px]  ">
                New Recipient
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <button
          onClick={handleSuccessMessage}
          className="p-[12px]  rounded-[8px] text-white-100 bg-[#7F56D9]  w-full h-[44px]["
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SelectBank;
