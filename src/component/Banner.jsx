import React from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import banner from "../assets/banner.png";

const Banner = () => {
  const slides = [
    {
      img: banner,
      welcome: "CHÀO MỪNG ĐẾN VỚI",
      title: "KHÓA KÉO HOÀN MỸ - HKK",
      description:
        'Thương hiệu dây khoá kéo HKK của Công ty TNHH Khóa kéo Hoàn Mỹ (HKK) đã gia nhập hàng loạt thị trường vốn được đánh giá là khó tính trong khu vực và trên thế giới. Chặng đường 31 năm của thương hiệu này là một hành trình nỗ lực không ngừng, với quyết tâm và tầm nhìn của những người lèo lái "con thuyền" HKK vươn ra biển lớn.',
      buttonText: "TÌM HIỂU THÊM",
      buttonLink: "#",
    },
    {
      img: banner,
      welcome: "SẢN PHẨM NỔI BẬT",
      title: "KHÓA KÉO HOÀN MỸ - HKK",
      description:
        'Thương hiệu dây khoá kéo HKK của Công ty TNHH Khóa kéo Hoàn Mỹ (HKK) đã gia nhập hàng loạt thị trường vốn được đánh giá là khó tính trong khu vực và trên thế giới. Chặng đường 31 năm của thương hiệu này là một hành trình nỗ lực không ngừng, với quyết tâm và tầm nhìn của những người lèo lái "con thuyền" HKK vươn ra biển lớn.',
      buttonText: "TÌM HIỂU THÊM",
      buttonLink: "#",
    },
    {
      img: banner,
      welcome: "SẢN PHẨM NỔI BẬT CỦA NĂM",
      title: "KHÓA KÉO HOÀN MỸ - HKK",
      description:
        'Thương hiệu dây khoá kéo HKK của Công ty TNHH Khóa kéo Hoàn Mỹ (HKK) đã gia nhập hàng loạt thị trường vốn được đánh giá là khó tính trong khu vực và trên thế giới. Chặng đường 31 năm của thương hiệu này là một hành trình nỗ lực không ngừng, với quyết tâm và tầm nhìn của những người lèo lái "con thuyền" HKK vươn ra biển lớn.',
      buttonText: "TÌM HIỂU THÊM",
      buttonLink: "#",
    },
  ];

  return (
    <div className="flex justify-center items-center mt-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
              <div className="hidden md:block w-1/2">
                <h2
                  className="text-xl mb-4"
                  style={{ fontSize: "clamp(18px, 2.5vw, 22px)" }}
                >
                  {slide.welcome}
                </h2>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-md mb-4"
                  style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
                >
                  {slide.description}
                </p>

                <motion.button
                  onClick={slide.buttonLink}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative inline-flex items-center px-4 py-2 text-sm group mt-5 md:mt-10"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#3474B4] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#3474B4] group-hover:bg-[#3474B4]"></span>
                  <span className="relative flex items-center space-x-2 text-[#3474B4] group-hover:text-white">
                    <span>{slide.buttonText}</span>
                    <FaLongArrowAltRight />
                  </span>
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
