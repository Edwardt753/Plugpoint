import React from "react";
import { FaPlug } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import { FaRecycle } from "react-icons/fa";

const Choose = () => {
  const skillsData = [
    {
      name: "Fleksibilitas",
      icon: (
        <FaPlug className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description: "Power bank dengan pilihan kabel sesuai Brand Device",
      aosDelay: "0",
    },
    {
      name: "Kemudahan",
      icon: (
        <BiMapPin className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description:
        "Tersedia di lokasi strategis seperti food court, mall, dan terminal.",
      aosDelay: "500",
    },
    {
      name: "Ramah Lingkungan",
      icon: (
        <FaRecycle className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description:
        "Mengurangi limbah elektronik dengan sistem berbagi power bank.",
      aosDelay: "1000",
    },
  ];
  return (
    <div className="py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif text-primary sm:text-4xl">
            Kenapa Kami?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((data) => (
            <div
              key={data.name}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="card text-center group space-y-3  sm:space-y-6 p-4 sm:py-16 bg-slate-200 hover:bg-primary"
            >
              <div className="grid place-items-center">
                <div>{data.icon}</div>
                <h1 className="font-bold text-2xl py-2  group-hover:text-white ">
                  {data.name}
                </h1>
                <p className="font-semibold  group-hover:text-white">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
