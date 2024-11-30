import React from "react";
import Image1 from "../../assets/pb3.jpg";
import { FaBolt, FaLeaf } from "react-icons/fa";
import { MdPower } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-slate-100 min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="fade-up">
            <img
              src={Image1}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object cover"
            />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold text-primary"
            >
              Visi dan Misi
            </h1>
            {/* <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Menyediakan solusi pengisian daya yang mudah, cepat, dan fleksibel
              untuk mendukung mobilitas modern.
            </p> */}
            <div data-aos="fade-up" className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4 py-2">
                <FaBolt className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-teal-200" />
                <p>
                  Menjadi layanan power bank berbagi terbaik di Indonesia dengan
                  pendekatan yang ramah lingkungan.
                </p>
              </div>
              <div className="flex items-center gap-4 py-2">
                <MdPower className="text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-teal-200" />
                <p>
                  Menyediakan solusi pengisian daya yang mudah, cepat, dan
                  fleksibel untuk mendukung mobilitas modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
