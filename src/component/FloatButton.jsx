import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsMessenger } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-40 right-4 flex flex-col items-end space-y-2 z-50">
      <div
        className={`flex flex-col items-end space-y-2 transition-transform duration-300 ${
          isOpen
            ? "transform translate-y-0"
            : "transform translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <button className="text-blue transition-transform duration-300 transform hover:scale-105">
          <BsMessenger className="text-blue-500" size={"32px"} />
        </button>
        <button className="text-white transition-transform duration-300 transform hover:scale-105">
          <FaYoutube className="text-red-500" size={"36px"} />
        </button>
        <button
          className="text-white transition-transform duration-300 transform hover:scale-105"
        >
          <IoCall className="text-yellow-500" size={"36px"} />
        </button>
      </div>

      <motion.button
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 15px rgba(52, 152, 219, 0.5)",
            "0 0 25px rgba(52, 152, 219, 0.8)",
            "0 0 15px rgba(52, 152, 219, 0.5)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={toggleMenu}
        className="bg-[#3474B4] text-white p-4 rounded-full shadow-lg focus:outline-none transition-transform duration-300 transform hover:scale-105"
      >
        {isOpen ? "Đóng" : "Mở"}
      </motion.button>
    </div>
  );
};

export default FloatButton;
