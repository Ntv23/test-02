import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdSearch } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { RiMenu4Fill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { SiYoutube, SiZalo } from "react-icons/si";

import phone from "../assets/phone.png";
import logo from "../assets/logo.svg";
import flag from "../assets/flag.png";
import blueln from "../assets/blueline.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#", label: "GIỚI THIỆU" },
    { href: "#", label: "SẢN PHẨM" },
    { href: "#", label: "HỖ TRỢ KỸ THUẬT" },
    { href: "#", label: "TIN TỨC" },
    { href: "#", label: "LIÊN HỆ" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <div className="mx-auto hidden md:flex flex-row items-center justify-center space-x-6 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="HKK" />
        </div>

        {/*login & navbar */}
        <div className="flex flex-col items-center justify-center">
          {/* social */}
          <div className="flex flex-row items-center justify-end w-full space-x-4">
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500 hover:font-bold group">
              <div className="bg-gray-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500">
                <TiSocialFacebook className="w-[24px] h-[24px] text-white" />
              </div>
              <span className="transition-all duration-300">Facebook</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 hover:font-bold group">
              <div className="bg-gray-400 p-1 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-red-500">
                <SiYoutube className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="transition-all duration-300">Youtube</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500 hover:font-bold group">
              <div className="bg-gray-400 p-1 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500">
                <SiZalo className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="transition-all duration-300">Zalo</span>
            </button>
            
            <span className="text-gray-300">|</span>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-[#3474B4]">
              <TbLogin className="size-[24px]" />
              <span className="text-sm">ĐĂNG NHẬP</span>
            </button>
            <img src={flag} alt="HKK" className="w-14 h-auto" />
          </div>

          {/* navbar & phone */}
          <div className="flex flex-row items-center justify-center space-x-4 w-full">
            <div className="flex lg:gap-x-10">
              {navItems.map((item) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "#3474B4",
                    boxShadow: "0 0 10px rgba(255, 255, 224, 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={item.label}
                  className="text-md font-Ubuntu leading-4 cursor-pointer"
                >
                  <a
                    href={item.href}
                    className="text-black hover:text-[#3474B4] cursor-pointer"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>

            <div>
              <div className="flex items-center">
                <button>
                  <MdSearch className="text-2xl text-gray-400" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 border border-[#3474B4]">
              <img
                src={phone}
                alt="HKK"
                className="w-10 bg-[#3474B4] p-1 border"
              />
              <img src={blueln} alt="HKK" />
              <div className="flex flex-col">
                <p className="text-sm text-[#3474B4]">HOTLINE</p>
                <p className="text-sm text-[#3474B4] font-bold">0919.904.939</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center px-6 py-2">
        <button onClick={toggleMenu}>
          <RiMenu4Fill className="text-3xl text-[#3474B4] hover:text-[#2e0ea5]" />
        </button>
        <div className="flex items-center justify-end flex-1">
          {" "}
          <img src={logo} alt="HKK" />
        </div>
      </div>
      <div
        className={`absolute top-30 left-0 w-full bg-white z-10 transition-transform transform ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } origin-top duration-300 md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#3474B4", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            GIỚI THIỆU
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#3474B4", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            SẢN PHẨM
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#3474B4", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            HỖ TRỢ KỸ THUẬT
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#3474B4", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            TIN TỨC
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#3474B4", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            LIÊN HỆ
          </motion.a>

          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#3474B4", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            ĐĂNG NHẬP
          </motion.a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
