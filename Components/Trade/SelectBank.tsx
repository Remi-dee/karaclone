import React from "react";
import PurpleCheckBox from "../PurpleCheckBox";
import NigerianFlag from "@/public/svg/nigeriaflag.svg";
import Image from "next/image";
function SelectBank() {
  return (
    <div className="  mb-[10rem] h-full  min-h-max">
      <div className=" w-full justify-center flex">
        <SvgBank />
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
        <Beneficiary />
        <Beneficiary />
        <Beneficiary />

        <div className="h-[75px] flex  items-center   rounded-[8px] w-full border border-[#DCDCDC] p-4 gap-2">
          <div className=" flex  gap-[12px]">
            <input
              type="radio"
              className=" w-[19px]  h-[19px]  "
              name=""
              id=""
            />
          </div>
          <div>
            <p className=" text-[#7F56D9] leading-[20px] tracking-[-2%] font-semibold text-[14px]  ">
              New Recipient
            </p>
          </div>
        </div>
        <button
        //   onClick={handleTradeDetails}
          className="p-[12px]  rounded-[8px] text-white-100 bg-[#7F56D9]  w-full h-[44px]["
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SelectBank;

function Beneficiary() {
  return (
    <div className="h-[75px] flex justify-between  items-center   rounded-[8px] w-full border border-[#DCDCDC] p-4 gap-2">
      <div className=" flex  gap-[12px]">
        <div>
          <input type="radio" className=" w-[19px]  h-[19px]  " name="" id="" />
        </div>
        <div className=" flex  flex-col gap-[4px]  justify-start">
          <h1 className=" text-[16px]  leading-[19.2px] tracking-[-2%] font-medium  ">
            Fakiya Favour
          </h1>
          <h2>92029284849</h2>
        </div>
      </div>
      <div>
        <Image src={NigerianFlag} alt="" />
      </div>
    </div>
  );
}

function SvgBank() {
  return (
    <svg
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1664_34703)">
        <path
          d="M3 13C3 6.64873 8.14873 1.5 14.5 1.5H46.5C52.8513 1.5 58 6.64873 58 13V45C58 51.3513 52.8513 56.5 46.5 56.5H14.5C8.14873 56.5 3 51.3513 3 45V13Z"
          stroke="#EAECF0"
          shape-rendering="crispEdges"
        />
        <path
          d="M40.5 35V38H20.5V35C20.5 34.45 20.95 34 21.5 34H39.5C40.05 34 40.5 34.45 40.5 35Z"
          fill="#292D32"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M25.5 27H23.5V34H25.5V27Z" fill="#292D32" />
        <path d="M29.5 27H27.5V34H29.5V27Z" fill="#292D32" />
        <path d="M33.5 27H31.5V34H33.5V27Z" fill="#292D32" />
        <path d="M37.5 27H35.5V34H37.5V27Z" fill="#292D32" />
        <path
          d="M41.5 38.75H19.5C19.09 38.75 18.75 38.41 18.75 38C18.75 37.59 19.09 37.25 19.5 37.25H41.5C41.91 37.25 42.25 37.59 42.25 38C42.25 38.41 41.91 38.75 41.5 38.75Z"
          fill="#292D32"
        />
        <path
          d="M39.87 21.7498L30.87 18.1498C30.67 18.0698 30.33 18.0698 30.13 18.1498L21.13 21.7498C20.78 21.8898 20.5 22.2998 20.5 22.6798V25.9998C20.5 26.5498 20.95 26.9998 21.5 26.9998H39.5C40.05 26.9998 40.5 26.5498 40.5 25.9998V22.6798C40.5 22.2998 40.22 21.8898 39.87 21.7498ZM30.5 24.4998C29.67 24.4998 29 23.8298 29 22.9998C29 22.1698 29.67 21.4998 30.5 21.4998C31.33 21.4998 32 22.1698 32 22.9998C32 23.8298 31.33 24.4998 30.5 24.4998Z"
          fill="#292D32"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1664_34703"
          x="0.5"
          y="0"
          width="60"
          height="60"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1664_34703"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1664_34703"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
