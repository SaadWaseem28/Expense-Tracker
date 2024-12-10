import React from "react";

const TransData = ({ name, category, amount, date, bgColor }) => {
  return (
    <tr className={`text-gray-200 ${bgColor}`}>
      <td className="px-6 py-4 w-1/5 text-md text-[#f38b68] font-bold">
        {name}
      </td>
      <td className="px-6 py-4 w-1/5 text-md">{category}</td>
      <td className="px-6 py-4 w-1/5 text-md text-green-400">{amount}</td>
      <td className="px-6 py-4 w-1/5 text-md text-gray-500">{date}</td>
      <td className="px-6 py-4 flex space-x-2">
        <button className="px-4 py-2 bg-[rgba(34,197,94,0.7)] hover:bg-[rgba(34,197,94,0.4)] text-white rounded-md text-sm font-medium">
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button className="px-4 py-2 bg-[rgba(220,38,38,0.7)] hover:bg-[rgba(220,38,38,0.4)] text-white rounded-md text-sm font-medium">
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TransData;
