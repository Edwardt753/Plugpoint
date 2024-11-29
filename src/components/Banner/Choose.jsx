import React from "react";
import { FaCameraRetro } from "react-icons/fa6";

const Choose = () => {
  const skillsData = [
    {
      name: "Best Price",
      icon: (
        <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt cupiditate dolorum ipsa sed ab!",
      aosDelay: "0",
    },
    {
      name: "Best Price",
      icon: (
        <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt cupiditate dolorum ipsa sed ab!",
      aosDelay: "500",
    },
    {
      name: "Best Price",
      icon: (
        <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt cupiditate dolorum ipsa sed ab!",
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
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <a href={data.link}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
