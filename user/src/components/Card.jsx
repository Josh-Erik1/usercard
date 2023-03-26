import React from "react";

const Card = () => {
  return (
    <div className="bg-slate-50 rounded-lg shadow-xl p-3">
      <div className="w-full flex justify-center ">
        <div className="bg-slate-500 h-[70px] w-[70px] rounded-full shadow-md m-2">
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center border-b pb-3 mb-2">
        <p className="font-poppins font-semibold text-base text-[#050505]">
          Christitan Paul
        </p>
        <p className="font-poppins font-normal opacity-60 text-sm">@username</p>
      </div>
      <span />
      <div>
        <div className="py-2 flex items-start">
          <span className="mr-3">
            <p className="font-poppins font-semibold text-sm text-[#333333] whitespace-nowrap">
              E-mail:
            </p>
          </span>
          <span>
            <p className="font-poppins  text-sm font-normal ">
              emailaddress@address.com
            </p>
          </span>
        </div>
        <div className="py-2 flex items-start ite">
          <span className="mr-3">
            <p className="font-poppins font-semibold text-sm text-[#333333] whitespace-nowrap">
              Address:
            </p>
          </span>{" "}
          <p className="font-poppins  text-sm font-normal ">
            This is the address
          </p>
        </div>
        <div className="flex justify-center py-2">
          <p className="font-poppins font-bold uppercase text-xl text-[#050505] opacity-70 ">
            Maverick City
          </p>
        </div>
        <div className=" w-16 h-[5px] bg-[#222222] rounded-full mx-auto opacity-60 my-2" />
      </div>
    </div>
  );
};

export default Card;
