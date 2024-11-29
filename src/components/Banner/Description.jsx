import React from "react";
import Image1 from "../../assets/image3.png";

const Description = () => {
  return (
    <div className="bg-slate-100 text-primary pb-12 min-h-[550px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div data-aos="fade-up">
            <img src={Image1} alt="" />
          </div>
          {/* Text Section */}
          <div data-aos="fade-up" className="">
            <p className="text-5xl font-primary font-bold mt-0 mb-3">
              Lorem, ipsum dolor.
            </p>
            <h1 className="text-3xl font-primary font-semibold my-2">
              Lorem ipsum
            </h1>
            <p className="text-black my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              ex nobis obcaecati dolorem ratione illo, suscipit velit omnis modi
              eligendi, facilis deleniti, quae officiis ipsum illum corporis
              asperiores. Blanditiis, tempore!
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
