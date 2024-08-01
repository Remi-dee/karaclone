import Image from "next/image";
import React from "react";
import emptyImg from "@/public/Images/EmptyImage.png";

const EmptyTransaction = () => {
  return (
    <div className="p-0 m-0 box-border">
      <div className=" w-[100%] flex flex-col justify-center items-center">
        <div className=" w-full h-full lg:w-[200px] lg:h-[200px] flex flex-col justify-center items-center">
          <Image
            src={emptyImg}
            alt="empty image"
            className="lg:w-full lg:h-full  h-[74px]  w-[66.76px] "
          />
        </div>
        <div className="  w-full  px-[2rem] lg:px-0 ">
          <h3 className="py-4 font-semibold text-[#3D3D3D] text-center text-sm">
            No Transactions Yet
          </h3>
          <p className="text-[#989898] text-center text-sm">
            Start making transactions and track your activity here
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyTransaction;
