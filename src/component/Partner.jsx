import React from "react";
import s4 from "../assets/04.png";
import bgImage2 from "../assets/bg2.jpg";
import partnerlogo from "../assets/partnerlogo.png";

const Partner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[300px] pb-10">
      {/* Background Img */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center px-10 sm:px-20">
          <div className="flex flex-col md:flex-row items-center">
            <img src={s4} alt="HKK" className="w-24" />
            <h1
              className="text-[#3474B4] mt-5 md:mt-28 mb-10 sm:mb-0 ml-4"
              style={{
                fontSize: "clamp(24px, 5vw, 36px)",
                lineHeight: "clamp(30px, 5.5vw, 40px)",
              }}
            >
              ĐỐI TÁC <span className="font-bold">CỦA HKK</span>
            </h1>
          </div>
          <div className="custom-scrollbar mt-0 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-3 max-h-[500px] overflow-auto">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-gray-300 rounded-xl">
                <img src={partnerlogo} alt="HKK" className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
