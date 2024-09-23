import React from "react";
import f1 from "../assets/footer1.png";
import f2 from "../assets/footer2.png";
import f3 from "../assets/footer3.png";
import f4 from "../assets/footer4.png";
import s8 from "../assets/8.png";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Img*/}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${s8})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      >
      </div>
      {/* Background Color*/}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundColor: "#1C1C1C",
          zIndex: 0,
        }}
      >
      </div>
      {/* Content */}
      <div className="relative container mx-auto w-full z-10">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white pt-10 px-0 md:px-4 text-center md:text-left">
          CÔNG TY TNHH KHOÁ KÉO HOÀN MỸ
        </h1>
        <div className="grid grid-cols-1 gap-4 px-4 py-6 lg:py-8 md:grid-cols-3 md:justify-center">
          <div className="flex flex-col items-start">
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              Văn phòng chính:
            </h3>
            <p className="mb-2 text-sm text-gray-400 dark:text-white">
              455 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM
            </p>
            <p className="mb-8 text-sm text-gray-400 dark:text-white">
              028.3839.6231 – Fax: 028.3839.6235
            </p>
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              Nhà máy HKK – Tân Uyên:
            </h3>
            <p className="mb-2 text-sm text-gray-400 dark:text-white">
              Đường DT747, Khu phố 7, P.Uyên Hưng, TX.Tân Uyên, Tỉnh Bình Dương
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              Liên kết nhanh:
            </h3>
            <ul className="list-disc pl-5">
              <li className="mb-2 text-sm text-gray-400 dark:text-white">
                Chính sách và Quy định chung
              </li>
              <li className="mb-2 text-sm text-gray-400 dark:text-white">
                Chính sách bảo mật
              </li>
              <li className="mb-2 text-sm text-gray-400 dark:text-white">
                Sản phẩm
              </li>
              <li className="mb-2 text-sm text-gray-400 dark:text-white">
                Hỗ trợ kỹ thuật
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={f1} alt="HKK" />
            <div className="flex flex-row">
              <img src={f2} alt="HKK" />
              <img src={f4} alt="HKK" className="px-2" />
              <div className="flex flex-col justify-center">
                <h1 className="text-white font-bold text-md">Quét mã QR</h1>
                <p className="text-white text-xs">Để xem chi tiết</p>
              </div>
            </div>
            <img src={f3} alt="HKK" />
          </div>
        </div>
      </div>
      <div className="bg-gray-950 opacity-70 w-full">
        <div className="px-4 py-6  md:flex md:items-center md:justify-between container mx-auto">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2020 Bản quyền thuộc về HHK
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white px-2"
            >
              Facebook
            </a>
            <span className="text-gray-400"> | </span>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white px-2"
            >
              Twitter
            </a>
            <span className="text-gray-400"> | </span>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white px-2"
            >
              Zalo
            </a>
            <span className="text-gray-400"> | </span>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white px-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
