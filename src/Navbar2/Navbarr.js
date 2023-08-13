import React from "react";

function Navbar() {
  return (
    <div className="">
      <div class="grid grid-cols-3 gap-4 h-20 bg-slate-50 justify-items-center items-center ">
        <div class="...">
          <div className="text-black  font-extrabold rounded-md text-2xl  hover:bg-gray-700   hover:text-white">
            Apollo.io
          </div>
        </div>
        <div class="...">
          <a
            href="#"
            className=" text-black rounded-md  hover:bg-gray-700 hover:text-white px-3 py-2 text-md font-medium"
            aria-current="page"
          >
            Platform
          </a>
          <a
            href="#"
            className=" text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
          >
            Teamst
          </a>
          <a
            href="#"
            className=" text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
          >
            Resources
          </a>
          <a
            href="#"
            className=" text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
          >
            Pricing
          </a>
        </div>
        <div className=" flex space-x-4">
          <a
            href="#"
            className=" text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
          >
            Request a demo
          </a>

          <button className="border px-2 py-2  hover:border-orange-400  rounded-md">
            Login in
          </button>
          <button className="border-2 border-slate-50 rounded-md  bg-orange-300  outline px-2 py-2">
            Sing up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
