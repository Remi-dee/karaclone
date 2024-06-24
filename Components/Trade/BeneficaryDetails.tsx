import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import svgBank from "@/public/svg/svgBank.svg";
import { useCreateBeneficiaryMutation } from "@/redux/features/user/userApi";
import { toast } from "react-toastify";

interface BeneficiaryInputProps {
  label: string;
  inputName: string;
  onChange: (value: ChangeEvent | any) => void;
}

const BeneficiaryInput: React.FC<BeneficiaryInputProps> = ({
  label,
  inputName,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<any>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event;

    setSelectedValue(event.target.value);
    onChange(value);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label className="font-lato text-lg font-semibold leading-6 tracking-tight text-left">
        {label}
      </label>
      <input
        value={selectedValue}
        onChange={handleChange}
        type="text"
        name={inputName}
        className="w-[433px] h-[48px] p-2 pl-4 pr-4 gap-2 rounded-[12px] border border-[#DCDCDC] focus:opacity-100"
      />
    </div>
  );
};

interface BeneficiarySelectProps {
  label: string;
  inputName: string;
  onChange: (value: string | any) => void;
}

const BeneficiarySelect: React.FC<BeneficiarySelectProps> = ({
  label,
  inputName,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<any>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event;
    setSelectedValue(event.target.value);
    onChange(value);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label className="font-lato text-lg font-semibold leading-6 tracking-tight text-left">
        {label}
      </label>
      <div className="relative w-[433px]">
        <select
          value={selectedValue}
          onChange={handleChange}
          name={inputName}
          className="appearance-none w-full h-[48px] p-2 pl-4 pr-10 rounded-[12px] border border-[#DCDCDC] focus:opacity-100"
        >
          <option value="" disabled hidden>
            Select an option
          </option>
          <option value="option1">Zenith Bank</option>
          <option value="option2">Wema Bank</option>
          <option value="option3">Kuda Bank</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

function BeneficaryDetails({ onSelect }: { onSelect: any }) {
  const [createBeneficiary, { isLoading, isError, isSuccess, data, error }] =
    useCreateBeneficiaryMutation();
  const [BeneficaryDetails, setBeneficaryDetails] = useState({
    name: "",
    account: "",
    bank_name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(e);
    setBeneficaryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setBeneficaryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleCreateBeneficiary = async (beneficiaryData: object) => {
    try {
      await createBeneficiary(beneficiaryData).unwrap();
      toast.success("created successfully!");
    } catch (error) {
      toast.error("There was an error creating Beneficiary!");
    }
  };
  const continueHanlder = (e: any) => {
    e.preventDefault();
    // onSelect("1");
    console.log(BeneficaryDetails);
    handleCreateBeneficiary(BeneficaryDetails);
  };

  return (
    <div className="   h-[1000px]  max-h-[1027px]  min-h-max">
      <div className=" w-full justify-center flex">
        <Image src={svgBank} alt="" />
      </div>

      <div className=" text-center flex flex-col gap-[12px] mt-[24px] ">
        <h1 className=" leading-[34.8px] tracking-[-2%] font-[600] text-[29px]   ">
          Recipient Details
        </h1>

        <p className=" leading-[24px] text-[#7C7C7C] text-[16px]   ">
          Fill the correct details below to complete trade
        </p>
      </div>

      <div className=" mt-[35px] w-full flex flex-col gap-[24px]">
        <BeneficiaryInput
          onChange={handleInputChange}
          inputName="name"
          label="  Account Name"
        />
        <BeneficiaryInput
          onChange={handleInputChange}
          inputName="account"
          label="  Account Number"
        />
        <BeneficiarySelect
          onChange={handleSelectChange}
          inputName="bank_name"
          label="Bank Name"
        />
        <BeneficiaryInput
          inputName="swift_code"
          onChange={handleInputChange}
          label="Swift Code"
        />
        <BeneficiaryInput
          inputName="ach_routing"
          onChange={handleInputChange}
          label="ACH Routing"
        />
        <BeneficiarySelect
          inputName="account_type"
          onChange={handleSelectChange}
          label="Account Type"
        />
        <BeneficiaryInput
          inputName="bank_address"
          onChange={handleInputChange}
          label="Bank Address"
        />

        <button
          onClick={continueHanlder}
          //   onClick={handleTradeDetails}
          className="p-[12px]  rounded-[8px] mt-[12px] text-white-100 bg-[#7F56D9]  w-full h-[44px]["
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default BeneficaryDetails;
