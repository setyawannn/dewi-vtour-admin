import React from "react";
import { MdEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const TableBody = (props) => {
  return (
    <>
      <td className="px-5 py-3">
        <p>{props.name}</p>
      </td>
      <td className="px-5 py-3">
        <p>Rp {props.price}</p>
      </td>
      <td className="px-5 py-3 max-w-md leading-5">
        <p>{props.location}</p>
      </td>
      <td className="px-5 py-3 text-right flex">
        <button
          onClick={props.onClick}
          className="hover:bg-blue-200 p-2 transition rounded-md inline-block "
        >
          <HiTrash size={28} color={"red"} />
        </button>
        <Link
          to={`/detail/${props.id}`}
          className="ml-3 hover:bg-blue-200 p-2 transition rounded-md"
        >
          <MdEdit size={28} color={"blue"} />
        </Link>
      </td>
    </>
  );
};

export default TableBody;
