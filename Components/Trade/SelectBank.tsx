import React, { useState } from "react";
import PurpleCheckBox from "../PurpleCheckBox";
import NigerianFlag from "@/public/svg/nigeriaflag.svg";
import Image from "next/image";
import CreateTradeSuccess from "./CreateTradeSuccess";
import { toast } from "react-toastify";
import { toggleBuyTradeSuccessModal } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import svgBank from "@/public/svg/svgBank.svg";
function SelectBank({ onSelect }: { onSelect: any }) {
  const [selected, setSelected] = useState<string | number>("");
  const dispatch = useDispatch();
  const handleSuccessMessage = () => {
    // setShowSuccess(true);

    if (selected === null) return toast.warn("Select an option!");
    onSelect(selected);
    if (selected === "itemid") {
      dispatch(toggleBuyTradeSuccessModal(false));
    } else {
      dispatch(toggleBuyTradeSuccessModal(true));
    }
  };

  // if (ShowSuccess) {
  //   return <CreateTradeSuccess />;
  // }
  const items = [
    {
      id: 1,
      name: "Fakiya Favour",
      phone: "92029284849",
    },
    {
      id: 2,
      name: "Fakiya Tosin",
      phone: "92029284849",
    },
    {
      id: 3,
      name: "Fakiya Oluwatosin",
      phone: "92029284849",
    },
  ];
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
        {items.map((item) => (
          <div
            key={item.id}
            className={`h-[75px] flex justify-between items-center rounded-[8px] w-full border border-[#DCDCDC] p-4 gap-2 ${
              selected === item.id ? "border-purple-500" : ""
            }`}
            onClick={() => setSelected(item.id)}
          >
            <div className="flex gap-[12px]">
              <div>
                <input
                  type="radio"
                  className="w-[19px] h-[19px]"
                  name="radio"
                  id="radio"
                  checked={selected === item.id}
                  onChange={() => setSelected(item.id)}
                />
              </div>
              <div className="flex flex-col gap-[4px] justify-start">
                <h1 className="text-[16px] leading-[19.2px] tracking-[-2%] font-medium">
                  {item.name}
                </h1>
                <h2>{item.phone}</h2>
              </div>
            </div>
            <div>
              <Image src={NigerianFlag} alt="" />
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
