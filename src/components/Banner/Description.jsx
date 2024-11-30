import React from "react";
import Image1 from "../../assets/splashscreen.png";

const Description = () => {
  return (
    <div className="bg-slate-100 text-primary pb-12 min-h-[550px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
          <div data-aos="fade-up" className="">
            <img src={Image1} alt="" className="pt-9 ml-36" />
          </div>
          {/* Text Section */}
          <div data-aos="fade-up" className="">
            <p className="text-5xl font-primary font-bold mt-0 mb-3">
              Kenalan Yuk Sama PlugPoint
            </p>
            {/* <h1 className="text-3xl font-primary font-semibold my-2">
              Lorem ipsum
            </h1> */}
            <p className="text-black my-2 text-xl">
              Plugpoint adalah perusahaan Internet of Things (IoT) yang berfokus
              pada menghadirkan solusi praktis untuk memudahkan kehidupan
              sehari-hari melalui teknologi berbasis internet. Kami menyediakan
              layanan penyewaan powerbank yang mudah diakses dan ramah di
              kantong, sehingga kamu bisa tetap terhubung tanpa khawatir
              kehabisan daya.
            </p>
            <button className="bg-primary hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
