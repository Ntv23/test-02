import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaLongArrowAltRight } from "react-icons/fa";
import s3 from "../assets/03.JPG";
import s7 from "../assets/7.png";
import s8 from "../assets/8.png";
import s9 from "../assets/9.png";
import s10 from "../assets/10.png";
import s11 from "../assets/11.png";
import line from "../assets/newsline.png";

const News = () => {
  const newsData = [
    {
      id: 1,
      imgSrc: s7,
      title: "Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...",
      description:
        "Là một trong những bước quan trọng hàng đầu để đảm bảo sự thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan trọng của nghiên cứu...",
    },
    {
      id: 2,
      imgSrc: s8,
      title: "Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...",
      description:
        "Là một trong những bước quan trọng hàng đầu để đảm bảo sự thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan trọng của nghiên cứu...",
    },
    {
      id: 3,
      imgSrc: s9,
      title: "Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...",
      description:
        "Là một trong những bước quan trọng hàng đầu để đảm bảo sự thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan trọng của nghiên cứu...",
    },
    {
      id: 4,
      imgSrc: s10,
      title: "Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...",
      description:
        "Là một trong những bước quan trọng hàng đầu để đảm bảo sự thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan trọng của nghiên cứu...",
    },
    {
      id: 5,
      imgSrc: s11,
      title: "Vị trí trưởng mang thương hiệu Việt hóa biển lớn ...",
      description:
        "Là một trong những bước quan trọng hàng đầu để đảm bảo sự thành công cho dự án, nghiên cứu thị trường là gì?, tầm quan trọng của nghiên cứu...",
    },
  ];

  return (
    <div className="container flex flex-col w-full items-center justify-center">
      <div className="flex flex-row justify-start w-full px-10 sm:px-20">
        <img src={s3} alt="HKK" className="w-24" />
        <h1
          className="font-semibold text-[#3474B4] mt-32 ml-4"
          style={{
            fontSize: "clamp(24px, 5vw, 36px)",
            lineHeight: "clamp(30px, 5.5vw, 40px)",
          }}
        >
          TIN TỨC <span className="font-bold">NỔI BẬT</span>
        </h1>
      </div>
      {/* News card*/}
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 flex px-10 sm:px-20"
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <a href="#" className="block">
              <div className="flex flex-col w-80 bg-white shadow-sm hover:shadow-2xl transition-shadow duration-300 group">
                <figure className="flex justify-center items-center">
                  <img src={news.imgSrc} alt="HKK" />
                </figure>
                <div className="flex flex-col py-4 w-full">
                  <div className="text-lg font-bold uppercase pb-4">
                    {news.title}
                  </div>
                  <div className="text-sm pb-4 w-full">{news.description}</div>
                  <div className="flex items-center text-sm text-[#374151] w-full px-1 gap-2">
                    <span className="text-[#3474B4] group-hover:font-bold transition-all duration-300 transform group-hover:scale-105">
                      Xem thêm
                    </span>
                    <img src={line} alt="HKK" className="w-2/3" />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div className="p-[clamp(20px,5vw,40px)] flex items-center justify-center">
        <motion.button
          onClick={"#"}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative inline-flex items-center px-4 py-2 text-sm group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#3474B4] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#3474B4] group-hover:bg-[#3474B4]"></span>
          <span className="relative flex items-center space-x-2 text-[#3474B4] group-hover:text-white">
            <FaLongArrowAltRight />
            <span>XEM THÊM TIN</span>
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default News;
