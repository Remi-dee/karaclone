import React, { useState } from "react";
import { BiSolidBank } from "react-icons/bi";
import TradeSuccess from "./TradeSuccess";
const AddRecipient = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccessMessage = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return <TradeSuccess />;
  }
  return (
    <div className="fixed top-0 left-0 w-screen bg-opacity-80 h-screen overflow-auto bg-black-200">
      <div className="w-[400px] mx-auto rounded-md bg-white-100 mt-8 mb-6 shadow-lg">
        <div className="w-[380px] flex flex-col justify-start items-center mx-auto">
          <div className="w-[30px] h-[30px] flex justify-center items-center border border-gray-700 mt-4 rounded-sm shadow-lg">
            <BiSolidBank className="text-2xl" />
          </div>
          <h3 className="text-xl font-semibold py-2">Recipient Details</h3>
          <p className="text-gray-300 text-xs text-center">
            Fill the correct details below to complete trade
          </p>
          <form>
            <div className="my-4">
              <label htmlFor="" className="text-sm font-semibold ">
                Account Name
              </label>
              <input
                type="text"
                placeholder="Account Name"
                className="w-full outline-none placeholder:text-xs p-1 border border-gray-700 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="text-sm font-semibold ">
                Account Number
              </label>
              <input
                type=""
                placeholder="Enter Account Number"
                className="w-full outline-none placeholder:text-xs p-1 border border-gray-700 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="text-sm font-semibold ">
                Bank Name
              </label>
              <input
                type="text"
                placeholder="Enter Bank Name"
                className="w-full outline-none placeholder:text-xs p-1 border border-gray-700 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="text-sm font-semibold ">
                Swift Code
              </label>
              <input
                type="text"
                placeholder="Enter Swift Code"
                className="w-full outline-none placeholder:text-xs p-1 border border-gray-700 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="text-sm font-semibold ">
                ACH Routing
              </label>
              <input
                type="text"
                placeholder="Enter ACH routing"
                className="w-full outline-none placeholder:text-xs p-1 border border-gray-700 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="text-sm font-semibold ">
                Account Type
              </label>
              <select
                name=""
                id=""
                className="w-full outline-none text-xs p-1 border border-gray-700 rounded-md"
              >
                <option value="">Select Account Type</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="" className="text-sm font-semibold ">
                Bank Address
              </label>
              <input
                type="text"
                placeholder="Enter Bank Address"
                className="w-full outline-none placeholder:text-xs p-1 border border-gray-700 rounded-md"
              />
            </div>

            <button
              onClick={handleSuccessMessage}
              className={`p-2  mb-4 text-white-100 bg-primaryBtn w-full rounded-lg `}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipient;
