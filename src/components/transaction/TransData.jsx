import React from "react";
import { Link } from "react-router-dom";

const TransData = ({
  name,
  category,
  amount,
  date,
  bgColor,
  toggleShowForm,
}) => {
  return (
    <tr className={`text-[#6c757d] ${bgColor}`}>
      <td className="px-6 py-4 w-1/5 text-md text-[#007BFF] font-bold">
        {name}
      </td>
      <td className="px-6 py-4 w-1/5 text-md">{category}</td>
      <td className="px-6 py-4 w-1/5 text-md text-green-400 ">{amount}</td>
      <td className="px-6 py-4 w-1/5 text-md text-gray-500">{date}</td>
      <td className="px-6 py-4 flex space-x-2">
        <button
          onClick={toggleShowForm}
          className="px-4 py-2 bg-[rgba(34,197,94,0.7)] hover:bg-[rgba(34,197,94,0.9)] text-white rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"
        >
          <i className="fas fa-pencil-alt"></i>
        </button>

        <button className="px-4 py-2 bg-[rgba(220,38,38,0.7)] hover:bg-[rgba(220,38,38,0.9)] text-white rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TransData;
