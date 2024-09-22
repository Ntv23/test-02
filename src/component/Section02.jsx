import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import s8 from "../assets/8.png";
import line from "../assets/Line.png";
import i1 from "../assets/1.png";
import i2 from "../assets/2.png";
import i3 from "../assets/3.png";
import i4 from "../assets/4.png";
import i5 from "../assets/5.png";
import i6 from "../assets/6.png";
import hline from "../assets/hline.png";

const Section02 = () => {

  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[300px]" ref={ref}>
      {/* Background Img*/}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${s8})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      {/* Background Color*/}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#061F3AF2",
          zIndex: 0,
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center px-10 sm:px-20">
          <img src={line} alt="HKK Product" className="mb-2" />
          <div className="flex flex-col md:flex-row items-center">
            <h1
              className="text-7xl mr-4 mb-4"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px grey",
                textStroke: "1px grey",
                fontWeight: "bold",
              }}
            >
              02
            </h1>
            <h1
              className="font-bold text-gray-200 mb-2"
              style={{
                fontSize: "clamp(24px, 5vw, 36px)",
                lineHeight: "clamp(30px, 5.5vw, 40px)",
              }}
            >
              CÁC SẢN PHẨM HKK
            </h1>
          </div>
          <div className="">
            <p
              className=" text-white"
              style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}
            >
              Biểu tượng của sự dẻo dai, bền bỉ, đại diện cho sức mạnh toàn thể
              công ty Sẵn sàng vượt qua mọi thử thách để đạt được tiêu chuẩn dài
              hạn là phát triển thương
            </p>
          </div>
          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-12 mt-10">
            {/* Card 1 */}
            <motion.div
              className="flex flex-col shadow-xl relative w-full md:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://nguyenvy.netlify.app/")
              }
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <figure className="flex justify-center items-center">
                <motion.img
                  src={i1}
                  alt="HKK Product"
                  whileHover={{ scale: 0.95, border: "2px solid #3474B4" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 26,
                  }}
                />
              </figure>
              <div className="absolute bottom-0 flex flex-col p-4">
                <div className="text-2xl font-bold uppercase text-white pb-2 inline-flex items-baseline">
                  <h1 className="text-6xl px-2">01</h1>
                  <span className="py-2">
                    <img src={hline} alt="HKK Product" />
                  </span>
                </div>
                <div className="text-lg text-white pb-4">NYLON ZIPPER</div>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="flex flex-col shadow-xl relative w-full md:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://nguyenvy.netlify.app/")
              }
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <figure className="flex justify-center items-center">
                <motion.img
                  src={i2}
                  alt="HKK Product"
                  whileHover={{ scale: 0.95, border: "2px solid #3474B4" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              </figure>
              <div className="absolute bottom-0 flex flex-col p-4">
                <div className="text-2xl font-bold uppercase text-white pb-2 inline-flex items-baseline">
                  <h1 className="text-6xl px-2">02</h1>
                  <span className="py-2">
                    <img src={hline} alt="HKK Product" />
                  </span>
                </div>
                <div className="text-lg text-white pb-4">PLASTIC ZIPPER</div>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="flex flex-col shadow-xl relative w-full md:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://nguyenvy.netlify.app/")
              }
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <figure className="flex justify-center items-center">
                <motion.img
                  src={i3}
                  alt="HKK Product"
                  whileHover={{ scale: 0.95, border: "2px solid #3474B4" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              </figure>
              <div className="absolute bottom-0 flex flex-col p-4">
                <div className="text-2xl font-bold uppercase text-white pb-2 inline-flex items-baseline">
                  <h1 className="text-6xl px-2">03</h1>
                  <span className="py-2">
                    <img src={hline} alt="HKK Product" />
                  </span>
                </div>
                <div className="text-lg text-white pb-4">METAL ZIPPER</div>
              </div>
            </motion.div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row justify-center gap-12 mt-7 mb-10">
            {/* Card 4 */}
            <motion.div
              className="flex flex-col shadow-xl relative w-full md:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://nguyenvy.netlify.app/")
              }
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <figure className="flex justify-center items-center">
                <motion.img
                  src={i4}
                  alt="HKK Product"
                  whileHover={{ scale: 0.95, border: "2px solid #3474B4" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              </figure>
              <div className="absolute bottom-0 flex flex-col p-4">
                <div className="text-2xl font-bold uppercase text-white pb-2 inline-flex items-baseline">
                  <h1 className="text-6xl px-2">04</h1>
                  <span className="py-2">
                    <img src={hline} alt="HKK Product" />
                  </span>
                </div>
                <div className="text-lg text-white pb-4">ZIPPER CHAIN</div>
              </div>
            </motion.div>
            {/* Card 5 */}
            <motion.div
              className="flex flex-col shadow-xl relative w-full md:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://nguyenvy.netlify.app/")
              }
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <figure className="flex justify-center items-center">
                <motion.img
                  src={i5}
                  alt="HKK Product"
                  whileHover={{ scale: 0.95, border: "2px solid #3474B4" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              </figure>
              <div className="absolute bottom-0 flex flex-col p-4">
                <div className="text-2xl font-bold uppercase text-white pb-2 inline-flex items-baseline">
                  <h1 className="text-6xl px-2">05</h1>
                  <span className="py-2">
                    <img src={hline} alt="HKK Product" />
                  </span>
                </div>
                <div className="text-lg text-white pb-4">PULLER</div>
              </div>
            </motion.div>
            {/* Card 6 */}
            <motion.div
              className="flex flex-col shadow-xl relative w-full md:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://nguyenvy.netlify.app/")
              }
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <figure className="flex justify-center items-center">
                <motion.img
                  src={i6}
                  alt="HKK Product"
                  whileHover={{ scale: 0.95, border: "2px solid #3474B4" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              </figure>
              <div className="absolute bottom-0 flex flex-col p-4">
                <div className="text-2xl font-bold uppercase text-white pb-2 inline-flex items-baseline">
                  <h1 className="text-6xl px-2">06</h1>
                  <span className="py-2">
                    <img src={hline} alt="HKK Product" />
                  </span>
                </div>
                <div className="text-lg text-white pb-4">SẢN PHẨM KHÁC</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;
