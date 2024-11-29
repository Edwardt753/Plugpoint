import React from "react";
import Logo from "../../assets/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Profile",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white">
      {/* Upper */}
      <div className="bg-primary/80 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-1xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              PlugPoint
            </a>
          </div>
          {/* search bar and order */}
          <div>
            <div className="group">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Lower */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block p-2 font-bold hover:text-primary duration-200 text-lg"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
