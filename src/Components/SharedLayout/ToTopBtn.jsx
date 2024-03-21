import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const ToTopBtn = () => {
  return (
    <div
      className="fixed right-10 top-[80%] z-[50] animate-bounce cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowCircleUp size={50} color="#5a9bc1" />
    </div>
  );
};

export default ToTopBtn;
