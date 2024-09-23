import React, { useState } from "react";
import { BsMessenger } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSupportClick = () => {
    window.Tawk_API && window.Tawk_API.toggle();
  };
  return (
    <div className="fixed bottom-10 right-4 flex flex-col items-end space-y-2 z-50">
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
        onClick={handleSupportClick}
        className="text-white transition-transform duration-300 transform hover:scale-105">
          <HiChatBubbleLeftRight className="text-black" size={"36px"}/>
        </button>
      </div>

      <button
        onClick={toggleMenu}
        className="bg-[#3474B4] text-white p-4 rounded-full shadow-lg focus:outline-none transition-transform duration-300 transform hover:scale-105"
      >
        {isOpen ? "Đóng" : "Mở"}
      </button>
    </div>
  );
};

export default FloatButton;
