import React from "react";

const Input = (props) => {
  return (
    <div className={props.colspan}>
      <label className="block mb-2 text-md font-medium text-gray-900 ">
        {props.label}
      </label>
      <input
        type={props.type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-md focus:outline-none font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        defaultValue={props.value}
        name={props.name}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

export default Input;
