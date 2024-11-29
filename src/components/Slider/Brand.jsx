import React from "react";
import Slider from "react-slick";
import Apple_Logo from "../../assets/Logo/apple.png";
import Huawei_Logo from "../../assets/Logo/huawei.png";
import Infinix_Logo from "../../assets/Logo/infinix.png";
import Oppo_Logo from "../../assets/Logo/oppo.png";
import Realme_Logo from "../../assets/Logo/realme.png";
import Samsung_Logo from "../../assets/Logo/samsung.png";
import Vivo_Logo from "../../assets/Logo/vivo.png";
import Xiaomi_Logo from "../../assets/Logo/xiaomi.png";

const Brand = () => {
  const settings = {
    dots: false, // Remove dots at the bottom
    infinite: true, // Enable infinite scrolling
    slidesToShow: 4, // Show 5 items at once
    slidesToScroll: 1, // Scroll 1 item at a time
    autoplay: true, // Enable autoplay
    speed: 2000, // Transition speed
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    cssEase: "linear", // Smooth linear scrolling
  };
  return (
    <div className="w-full overflow-hidden mx-auto py-8">
      <div
        data-aos="fade-up"
        className="flex items-center justify-center text-4xl text-primary font-bold mb-6"
      >
        Brand Yang Bekerja Sama
      </div>
      <Slider {...settings}>
        <div className="flex justify-center items-center h-16">
          {/* Ensure consistent height */}
          <img
            src={Apple_Logo}
            alt="Apple"
            className="max-h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-16">
          <img
            src={Huawei_Logo}
            alt="Huawei"
            className="max-h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-16">
          <img
            src={Infinix_Logo}
            alt="Infinix"
            className="max-h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-16">
          <img
            src={Oppo_Logo}
            alt="Oppo"
            className="max-h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-16">
          <img
            src={Realme_Logo}
            alt="Realme"
            className="max-h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-24">
          <img
            src={Samsung_Logo}
            alt="Samsung"
            className="max-h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-16">
          <img
            src={Vivo_Logo}
            alt="Vivo"
            className="max-h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-16">
          <img
            src={Xiaomi_Logo}
            alt="Xiaomi"
            className="max-h-full object-contain"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Brand;
