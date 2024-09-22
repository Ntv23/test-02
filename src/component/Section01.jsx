import React from "react";
import { motion } from "framer-motion";
import i1 from "../assets/i1.png";
import icon from "../assets/icon.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import s1 from "../assets/01.png";
import bgImage from "../assets/bg.jpg";

const Section01 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-[300px] px-5 md:px-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-center md:gap-2">
        {/* Left Col */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] p-4 sm:pt-24 pt-10"
        >
          <img src={i1} alt="HKK" className="w-full md:w-auto md:max-w-none" />
        </motion.div>
        {/* Right Col */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <div className="flex flex-col">
            <div className="flex flex-row items-end">
              <img src={s1} alt="HKK" className="top-0" />
              <h1
                className="font-bold text-[#3474B4] ml-2"
                style={{
                  fontSize: "clamp(24px, 5vw, 36px)",
                  lineHeight: "clamp(30px, 5.5vw, 40px)",
                }}
              >
                GIỚI THIỆU
              </h1>
            </div>

            <h3
              className="text-xl font-bold mt-5"
              style={{ fontSize: "clamp(18px, 3vw, 24px)" }}
            >
              Về Kéo Hoàn Mỹ - HKK
            </h3>
            <p
              className="mt-5"
              style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}
            >
              Hoàn thành thành lập năm 1989, là một trong những công ty đi đầu
              tiên trong lĩnh vực sản xuất dây khóa tại Việt Nam. Với công nghệ,
              hiện đại thiết bị và đồng bộ của Đức, Đài Loan cùng với đội ngũ kỹ
              sư, nhân viên có trình độ nghiệp vụ cao, sản phẩm dây kéo HKK được
              sản xuất theo tiêu chuẩn quốc tế (ASTM D2016 : 2007, BS 3084:
              2006, CNS, JIS-S 3015 ....).
            </p>
            <div className="space-y-5">
              <div className="flex flex-row items-center mt-10">
                <img src={icon} alt="HKK" />
                <div className="text-lg">
                  <span className="text-2xl font-bold text-[#3474B4] ml-2 mr-1">
                    +31
                  </span>
                  NĂM KINH NGHIỆM
                </div>
              </div>
              <div className="flex flex-row items-center mt-2">
                <img src={icon} alt="HKK" />
                <div className="text-lg">
                  <span className="text-2xl font-bold text-[#3474B4] ml-2 mr-1">
                    +700
                  </span>
                  CÔNG NHÂN
                </div>
              </div>
              <div className="flex flex-row items-center mt-2">
                <img src={icon} alt="HKK" />
                <div className="text-lg">
                  <span className="text-2xl font-bold text-[#3474B4] ml-2 mr-1">
                    +200
                  </span>
                  NHÀ PHÂN PHỐI CHÍNH THỨC
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-5 items-center justify-start gap-4 mb-10 mx-16 md:mx-0">
              <motion.button
                onClick={"#"}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative inline-flex items-center justify-center px-4 py-2 text-sm group w-full"
              >
                <span className="absolute inset-0 w-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#3474B4] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full bg-white border-2 border-[#3474B4] group-hover:bg-[#3474B4]"></span>
                <span className="relative flex items-center space-x-2 text-[#3474B4] group-hover:text-white">
                  <AiOutlineYoutube className="size-[24px]" />
                  <span>VIDEO GIỚI THIỆU</span>
                </span>
              </motion.button>

              <motion.button
                onClick={"#"}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative inline-flex items-center justify-center px-4 py-2 text-sm group w-full"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#3474B4] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#3474B4] group-hover:bg-[#3474B4]"></span>
                <span className="relative flex items-center space-x-2 text-[#3474B4] group-hover:text-white">
                  <FaLongArrowAltRight className="size-[24px]" />
                  <span>TÌM HIỂU THÊM</span>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section01;
