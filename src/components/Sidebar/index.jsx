import React from "react";
import { BiHomeAlt, BiBook, BiImageAlt } from "react-icons/bi";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <BiHomeAlt />, link: "/" },
    { name: "Destination", icon: <BiBook />, link: "/destination" },
    { name: "Pictures", icon: <BiImageAlt />, link: "/picture" },
  ];
  return (
    <div className="h-screen border-r border-gray-200 w-64 px-9 space-y-24">
      <figure className="flex flex-grow items-center pt-8">
        <img src="" alt="" />
        <div className="text-xl font-bold text-gray-800">DEWI VTOUR</div>
      </figure>
      <div>
        <ul>
          <div className="mb-4 text-blue-700 font-semibold">Menu</div>
          {menu.map((val, index) => {
            return (
              <a
                href={val.link}
                key={index}
                className="py-2 px-4 mb-7 flex flex-row items-center text-gray-500 rounded-md hover:bg-blue-700 hover:text-gray-50 active:bg-blue-700 active:text-gray-50"
              >
                <div className="mr-5">{val.icon}</div>
                <div>{val.name}</div>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
