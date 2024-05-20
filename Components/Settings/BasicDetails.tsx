import React from "react";
import { useSelector } from "react-redux";

function BasicDetails() {
  const { user } = useSelector((state) => state?.auth);
  console.log(user);

  return (
    <div className=" h-[252px] flex  flex-col gap-[24px] bg-[#FFFFFF] w-[100%]  p-[24px] rounded-[8px]  ">
      <div className=" h-[44px]  min-h-[44px] border-b border-b-[#EFEFEF]">
        <h1 className="  font-bold leading-[28px] tracking-[-2%] text-[18px]   ">
          Personal Information
        </h1>
      </div>

      <section className=" h-full flex  justify-between  pr-[1rem] ">
        <div className=" flex flex-col content-between justify-between h-full">
          <div className=" flex flex-col gap-[4px]">
            <h2 className=" text-[#A3ADBF]   font-[500] tracking-[-2%] leading-[20px]  text-[14px] ">
              {" "}
              FIRST NAME
            </h2>

            <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
            {user.name.split(" ")[0]}
            </p>
          </div>

          <div className=" flex flex-col gap-[4px]">
            <h2 className=" text-[#A3ADBF]  text-[14px] font-[500] tracking-[-2%] leading-[20px]  ">
              EMAIL
            </h2>

            <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
              {user.email}
            </p>
          </div>
        </div>
        <div className=" flex flex-col content-between justify-between h-full">
          <div className=" flex flex-col gap-[4px]">
            <h2 className=" text-[#A3ADBF] text-[14px]   font-[500] tracking-[-2%] leading-[20px]  ">
              LAST NAME
            </h2>

            <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
              {user.name.split(" ")[1]}
            </p>
          </div>

          <div className=" flex flex-col gap-[4px]">
            <h2 className=" text-[#A3ADBF] text-[14px]  font-[500] tracking-[-2%] leading-[20px]  ">
              PHONE NUMBER
            </h2>

            <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
              {user.phone}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <h2 className=" text-[#A3ADBF]  text-[14px] font-[500] tracking-[-2%] leading-[20px]  ">
            GENDER
          </h2>

          <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
            {user.gender}
          </p>
        </div>
      </section>
    </div>
  );
}

export default BasicDetails;
