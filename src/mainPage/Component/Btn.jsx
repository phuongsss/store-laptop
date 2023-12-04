import React from "react";

function Btn({ children, type, onClick }) {
  const style = {
    main1:
      "text-lg font-medium px-8 py-1 bg-red-500 rounded-lg hover:bg-red-700 text-stone-100 transition-all duration-500",
    sub1: "text-lg font-medium px-5 py-1 bg-blue-500 hover:bg-blue-700  rounded-lg text-stone-200 transition-all duration-500",
    main: "text-3xl px-3 py-2 bg-red-300 hover:bg-red-500 transition-all rounded-xl font-bold",
    sub: "text-3xl px-3 py-2 hover:bg-green-600 border-4 border-red-300 rounded-xl transition-all hover:border-green-600 font-bold",
    dis: "opacity-25 cursor-not-allowed text-lg font-medium px-5 py-1 bg-blue-500 hover:bg-blue-700  rounded-lg text-stone-200 transition-all duration-500",
  };

  return (
    <button
      disabled={type === "dis" ? true : false}
      onClick={onClick}
      className={`${style[type]}`}
    >
      {children}
    </button>
  );
}

export default Btn;
