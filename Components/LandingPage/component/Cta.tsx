import React from "react";

export const Cta = () => {
  {
    /* CTA */
  }
  return (
    <div className="flex flex-col w-full md:h-full h-[411px] bg-[white] md:py-10 md:pt-20 mt-[24px] p-[60px_24px_60px_24px] md:px-5">
      <div className="container mx-0 md:mx-auto flex flex-col gap-[24px] md:gap-4 items-center ">
        {/* app logo */}
        <img
          src="/Images/Auto Layout Horizontal.png"
          alt="App logo"
          className=" w-[25.53px]  h-[25.53px]  "
        />
        <div className="text-center">
          <h1 className="font-bold text-[#171717]  text-[20px] leading-[30px] md:text-3xl">
            Join us today for simplified transactions.
          </h1>
          <p className="md:text-[#171717]/60 mt-[11px] leading-[28px] text-[14px] text-[#525252] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.Lorem ipsum dolor sit amet consectetur adipiscing
            elit.
          </p>
        </div>
        <button className="md:rounded-full rounded-[24px] bg-[#FF104B] md:px-6 md;py-3 p-[12px_32px_12px_32px] gap-[20px] text-[white]">
          Get Started
        </button>
      </div>
    </div>
  );
};
