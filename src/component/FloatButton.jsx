import React, { useState } from "react";

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed bottom-10 right-4 flex flex-col items-end space-y-2 z-50">
      <div
        className={`flex flex-col items-end transition-transform duration-300 ${
          isOpen
            ? "transform translate-y-0"
            : "transform translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
          Chat với admin
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
          Gửi email
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
          Gọi hỗ trợ
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
