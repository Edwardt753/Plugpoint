import React from "react";
import Image1 from "../../assets/image1.png";
import Profile1 from "../../assets/profile1.jpg";
import Profile2 from "../../assets/profile2.jpg";
import Profile3 from "../../assets/profile3.jpg";
import Profile4 from "../../assets/profile4.png";

const CreatorData = [
  {
    id: 1,
    img: Profile2,
    name: "Jordy Aprianto",
    nim: 53521073,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Profile4,
    name: "Giant Pratista",
    nim: 535210078,
    aosDelay: "0",
  },
  {
    id: 3,
    img: Profile3,
    name: "Edward Thomas Alexander",
    nim: 535210102,
    aosDelay: "0",
  },
  {
    id: 4,
    img: Profile1,
    name: "Ceciliana Takeshi",
    nim: 535210114,
    aosDelay: "0",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-3xl font-bold text-primary">
            The Creator of PlugPoint
          </p>
          <p data-aos="fade-up" className="text-xl text-gray-400">
            Anggota Kelompok dari Pembuat Ide Perusahaan PlugPoint
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-5">
            {/* card section */}
            {CreatorData.map((data) => (
              <div
                key={data.id}
                className="space-y-3"
                data-aos-delay={data.aosDelay}
                data-aos="fade-up"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.name}</h3>
                  <p className="text-sm text-gray-600">{data.nim}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
