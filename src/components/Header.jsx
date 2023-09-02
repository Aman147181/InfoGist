import React from "react";

const Header = () => {
  return (
      <div className="flex fixed top-0 bg-inherit h-[60px] w-screen justify-between items-center sm:px-12 px-6 ">
        <div className="flex items-center">
          <img src="/logosum.png" className="w-10" alt="Logo" />
          <h1 className="text-3xl font-lobster ml-2 hidden sm:flex">InfoGist</h1>
        </div>
        <button className="px-8 p-2 border-black border-1 bg-black text-white font-poppins hover:text-black hover:bg-white rounded-full">
          log in
        </button>
          </div>
  );
};

export default Header;
