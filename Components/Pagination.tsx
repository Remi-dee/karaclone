import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
const Pagination = () => {
  return (
    <div className="flex justify-between items-center my-4">
    <div className="w-auto flex justify-center items-center gap-2 p-1 rounded-md border border-primaryBtn text-primaryBtn  hover:bg-primaryBtn hover:text-white-100 cursor-pointer">
      <IoIosArrowRoundBack className="text-white-100 bg-primaryBtn" />
      <p className="text-xs font-semibold">Previous</p>
    </div>
    <div className="flex justify-start items-center gap-3 ">
      <button className="w-[30px] h-[30px] rounded-full bg-purple-200 text-primaryBtn active:bg-purple-200 active:text-primaryBtn">
        1
      </button>
      <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
        2
      </button>
      <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
        3
      </button>
      <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
        ...
      </button>
      <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
        8
      </button>
      <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
        9
      </button>
      <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
        10
      </button>
    </div>
    <div className="w-auto flex justify-center items-center gap-1 p-1 rounded-md border border-primaryBtn text-primaryBtn hover:bg-primaryBtn hover:text-white-100 cursor-pointer">
      <p className="text-xs font-semibold">Next</p>
      <IoIosArrowRoundForward className="text-white-100 bg-primaryBtn" />
    </div>
  </div>
  )
}

export default Pagination