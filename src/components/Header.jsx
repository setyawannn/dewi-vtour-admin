import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const [userAcc, setUserAcc] = useState(false);

  const handleAcc = () => {
    setUserAcc(!userAcc);
  };

  return (
    <header className="user-wrap w-full flex justify-end">
      <div
        onClick={handleAcc}
        className="flex gap-2 items-center cursor-pointer"
      >
        <h4>ADMIN DEWI VTOUR</h4>
        <MdArrowDropDown />
      </div>
      {userAcc ? (
        <div className="bg-white shadow-md border rounded absolute right-16 top-16 w-52 mt-1 h-14 p-4">
          <ul className="text-base font-medium">Logout</ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
