"use client";

import React from "react";

function Success({ changeStep }: { changeStep: () => void }) {
  const handleClickEvent = () => {
    changeStep();
  };
  return (
    <div className="mb-36 ">
      <div className="bg-[white] border border-slate-200 mt-5  shadow-sm px-8 rounded-lg py-4 text-[dark] w-full  mx-auto flex flex-col items-center justify-center  text-center">
        <img
          src="/Images/check.png"
          alt="Success Image"
          className="my-8 p-4 border rounded-lg border-slate-100"
        />
        <h1 className="font-bold text-2xl">Transaction is being Processed</h1>
        <p className="text-gray-400 text-sm">
          Your withdrawal is being processed. You will receive your money soon
        </p>

        <button
          className="bg-purple-600 text-white-100 text-sm w-full py-3 my-5 rounded-lg"
          onClick={handleClickEvent}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Success;
