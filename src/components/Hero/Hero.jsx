import React from "react";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "PlugPoint Sewa PowerBank Cepat & Flexibel",
    description:
      "PlugPoint merupakan perusahaan jasa penyewaan powerbank berdomisili di Jakarta, dengan fitur pertama yang menyesuaikan kabel charge sesuai dengan brand Device Anda",
  },
  {
    id: 2,
    img: Image2,
    title: "Plugpoint Siap Pakai, Kapan Saja Kamu Butuh",
    description: "",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center w-full">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/80 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

      {/* Full-width slider */}
      <Slider {...settings} className="w-screen">
        {ImageList.map((data) => (
          <div key={data.id} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center w-screen">
              {/* Text content */}
              <div className="flex flex-col justify-center gap-4 pt-12 relative z-10 px-4 sm:px-8">
                <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold">
                  {data.title}
                </h1>
                <p className="text-sm">{data.description}</p>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full w-fit">
                  Download Now
                </button>
              </div>
              {/* Image content */}
              <div className="order-1 sm:order-2">
                <img
                  src={data.img}
                  alt=""
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
