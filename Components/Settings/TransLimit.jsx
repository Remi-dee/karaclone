import React from "react";

function TransLimit() {
  return (
    <div className=" h-[200px] flex mt-[24px]  flex-col gap-[24px] bg-[#FFFFFF] w-[100%]  p-[24px] rounded-[8px]">
      <div className="  h-[85px] flex flex-col border-b border-b-[#EFEFEF] gap-[8px] ">
        <h1 className="  font-bold leading-[28px] tracking-[-2%] text-[18px]   ">
          Reversal
        </h1>

        <p className="  mt-[8px] text-[#656565] text-[14px] font-medium leading-[20px] tracking-[-2%]    ">
          Daily limit for transactions.
        </p>
      </div>

      <section className="  justify-between   flex content-between  w-full">
        <div className=" inline-flex flex-col justify-between gap-[8px] max-w-[45%]  flex-1  ">
          <div className=" flex flex-row justify-between gap-[8px]  w-full  ">
            <h2 className=" text-[#A3ADBF]     ">Withdraw: ₦50,000</h2>
            <h2 className=" text-[#A3ADBF]     ">Daily Limits: ₦500,000</h2>
          </div>

          <div className=" rounded-[8px] mt-[10px] h-[0.5rem] w-[100%] bg-[#A3ADBF]">
            <div className=" h-full w-[30%] bg-[black] rounded-[8px]"></div>
          </div>
        </div>

        <div className=" w-[0.5px] h-full bg-[#DCDCDC] inline-flex"></div>

        <div className="  inline-flex flex-col justify-between gap-[8px] max-w-[45%]  flex-1  ">
          <div className=" flex flex-row justify-between gap-[8px]  w-full  ">
            <h2 className=" text-[#A3ADBF]     ">Withdraw: ₦200,000</h2>
            <h2 className=" text-[#A3ADBF]     ">Monthly Limits: ₦500,000</h2>
          </div>

          <div className=" rounded-[8px] mt-[10px] h-[0.5rem] w-[100%] bg-[#A3ADBF]">
            <div className=" h-full w-[30%] bg-[black] rounded-[8px]"></div>
          </div>
        </div>

        {/* <div></div> */}
      </section>
    </div>
  );
}

export default TransLimit;
