import React from "react";
import { MdEdit } from "react-icons/md";
import { HiTrash, HiEye } from "react-icons/hi";

const TableBody = (props) => {
  return (
    <>
      <td className="px-5 py-3">
        <p>{props.name}</p>
      </td>
      <td className="px-5 py-3">
        <p>{props.price}</p>
      </td>
      <td className="px-5 py-3 max-w-md">
        <p>{props.location}</p>
      </td>
      <td className="px-5 py-3 text-right">
        <button className="hover:bg-blue-200 p-2 transition rounded-md">
          <HiEye size={28} color={"green"} />
        </button>
        <button className="mx-3 hover:bg-blue-200 p-2 transition rounded-md">
          <MdEdit size={28} color={"blue"} />
        </button>
        <button className="hover:bg-blue-200 p-2 transition rounded-md">
          <HiTrash size={28} color={"red"} />
        </button>
      </td>
    </>
  );
};

export default TableBody;
