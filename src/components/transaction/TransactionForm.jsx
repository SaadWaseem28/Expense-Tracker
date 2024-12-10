import React, { useContext } from "react";

import { FormContext } from "../../context/FormContext";

function TransactionForm({ showDateField }) {
  const categoryOptions = [
    "Food",
    "Utilities",
    "Transport",
    "Entertainment",
    "Healthcare",
  ];
  const { showForm, toggleShowForm } = useContext(FormContext);
  return (
    <>
      <div
        className={`w-full sm:w-1/2 p-6 ${showForm === false ? "hidden" : ""}`}
      >
        <div className="h-full bg-[hsl(214,_32%,_91%)] p-6 rounded-md">
          <form className="w-full mt-5">
            <label className="text-[#1a202c] block mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="w-full rounded-md mb-4 sm:mb-6 p-2 text-white placeholder:text-[hsl(60,_3%,_65%)]"
              placeholder="Enter Name"
            />

            {/* Flex for amount and category */}
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <label className="text-[#1a202c] block mb-2" htmlFor="Amount">
                  Amount
                </label>
                <input
                  type="text"
                  className="rounded-md w-full text-white placeholder:text-[hsl(60,_3%,_65%)] mb-4 sm:mb-6 p-2"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="text-[#1a202c] block mb-2" htmlFor="Category">
                  Category
                </label>
                <select className="rounded-md text-[hsl(60,_3%,_65%)] w-full mb-4 sm:mb-6 p-2">
                  <option value="#">Select Category</option>
                  {categoryOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date and Save button */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 items-center mb-4">
              {showDateField && (
                <div className="w-full">
                  <label className="text-[#1a202c] block mb-2" htmlFor="Amount">
                    Date
                  </label>
                  <input
                    type="date"
                    className="text-[hsl(60,_3%,_65%)] rounded-md w-full p-2 h-12"
                  />
                </div>
              )}
              <div className={`w-full `}>
                <button
                  className={`text-white w-full mt-6 sm:mt-8 p-2 rounded-md bg-[#007BFF] h-12 hover:bg-blue-600 transition-colors duration-300 ease-in-out`}
                  onClick={toggleShowForm}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TransactionForm;
