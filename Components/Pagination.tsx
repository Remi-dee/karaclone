import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const handlePreviousClick = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextClick = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

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
    <div className="w-full mt-[30px]">
      <div className="flex justify-between items-center">
        <div
          onClick={handlePreviousClick}
          className={`flex justify-center items-center gap-2 p-[8px] rounded-md border border-primaryBtn text-primaryBtn hover:bg-primaryBtn hover:text-white-100 cursor-pointer ${
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
          className={`flex justify-center items-center gap-2 p-[8px] rounded-md border border-primaryBtn text-primaryBtn hover:bg-primaryBtn hover:text-white-100 cursor-pointer ${
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
