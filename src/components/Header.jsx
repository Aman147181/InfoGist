import React from "react";

const Header = () => {
  return (
      <div className="flex fixed top-0 bg-inherit h-[60px] w-screen justify-start items-center sm:px-12 px-6 ">
        <div className="flex items-center">
          <img src="/logosum.png" className="w-10" alt="Logo" />
          <h1 className="text-3xl dark:text-gray-200 font-lobster ml-2 hidden sm:flex">InfoGist</h1>
        </div>
          </div>
  );
};

export default Header;
