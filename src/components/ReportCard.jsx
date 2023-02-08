import React from "react";

const ReportCard = (props) => {
  return (
    <div className="card-wrap bg-blue-100 min-h-fit p-5 rounded-md">
      <span className="text-base text-gray-800 font-medium">{props.title}</span>
      <h3 className="text-3xl font-bold text-gray-700">{props.value}</h3>
    </div>
  );
};

export default ReportCard;
