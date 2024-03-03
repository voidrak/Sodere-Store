import React from "react";

const Pagination = ({
  postPerPage,
  totalPost,
  currentPage,
  setCurrentPage,
}) => {
  const pages = [];

  const handlePrev = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentPage === Math.ceil(totalPost / postPerPage)) {
      setCurrentPage(Math.ceil(totalPost / postPerPage));
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  const mappedPages = pages.map((page) => (
    <li key={page}>
      <button
        onClick={() => {
          setCurrentPage(page);
        }}
        className={`flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-black hover:text-white  
         ${page === currentPage ? "bg-[#5394b9] text-white" : ""} ${(page > 3 && page > currentPage + 2) || page < currentPage ? "hidden" : ""} `}
      >
        {page}
      </button>
    </li>
  ));
  return (
    <nav
      aria-label="Page navigation example"
      className="my-8 flex justify-center"
    >
      <ul className="flex h-10 justify-center  text-base">
        <li>
          <button
            onClick={handlePrev}
            className="  flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 text-[12px] leading-tight text-gray-500 hover:bg-black hover:text-white  md:text-base  "
          >
            Previous
          </button>
        </li>
        {mappedPages}
        <li>
          <button
            onClick={handleNext}
            className=" flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 text-[12px] leading-tight text-gray-500 hover:bg-black  hover:text-white md:text-base "
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
