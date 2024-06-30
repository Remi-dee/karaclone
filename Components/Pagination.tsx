import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const generateItems = (numItems: number) => {
  return Array.from({ length: numItems }, (_, i) => `Item ${i + 1}`);
};

const itemsPerPage = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const items = generateItems(1000);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxButtons = 10;

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 6) {
        for (let i = 1; i <= 8; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage > totalPages - 6) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 7; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) =>
      typeof number === "string" ? (
        <span
          key={index}
          className="w-[30px] h-[30px] flex items-center justify-center"
        >
          {number}
        </span>
      ) : (
        <button
          key={index}
          onClick={() => handlePageClick(number)}
          className={`w-[30px] h-[30px] rounded-full ${
            currentPage === number
              ? "bg-purple-200 text-primaryBtn"
              : "bg-white-100 hover:bg-purple-200 hover:text-primaryBtn"
          }`}
        >
          {number}
        </button>
      )
    );
  };

  return (
    <div className="w-full absolute bottom-0  p-4">
      <div className="flex justify-between items-center">
        <div
          onClick={handlePreviousClick}
          className={`flex justify-center items-center gap-2 p-1 rounded-md border border-primaryBtn text-primaryBtn hover:bg-primaryBtn hover:text-white-100 cursor-pointer ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <IoIosArrowRoundBack />
          <p className="text-xs font-semibold">Previous</p>
        </div>
        <div className="flex justify-start items-center gap-3">
          {renderPageNumbers()}
        </div>
        <div
          onClick={handleNextClick}
          className={`flex justify-center items-center gap-2 p-1 rounded-md border border-primaryBtn text-primaryBtn hover:bg-primaryBtn hover:text-white-100 cursor-pointer ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <p className="text-xs font-semibold">Next</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
