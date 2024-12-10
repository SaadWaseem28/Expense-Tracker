import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import Sidebar from "../components/Sidebar";
import PageHeading from "../components/PageHeading";
import TransactionForm from "../components/transaction/TransactionForm";

function Income() {
  const incomeData = [
    { amount: "2000$", type: "Freelance" },
    { amount: "2000$", type: "Salary" },
    { amount: "2000$", type: "Rent" },
    { amount: "2000$", type: "Freelance" },
    { amount: "2000$", type: "Rent" },
    { amount: "2000$", type: "Trading" },
    { amount: "2000$", type: "Freelance" },
  ];

  const [inputField, setInputField] = useState("Select");
  const [buttonName, setButtonName] = useState("Add Category");
  const [inputValue, setInputValue] = useState("");
  let [categoryOptions, setCategoryOptions] = useState([
    "Freelance",
    "Rent",
    "Trading",
    "Consulting",
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const incomeButtonHandler = () => {
    if (buttonName === "Add Category") {
      setInputField("Text");
      setButtonName("Save");
    } else {
      // Add the input value to category options
      if (inputValue.trim() !== "") {
        setCategoryOptions((prevOptions) => {
          return [...prevOptions, inputValue];
        });
      }
      setInputValue(""); // Reset the input field to empty
      setButtonName("Add Category"); // Reset the button to Add Category
      setInputField("Select");
    }
  };
  const { showForm, toggleShowForm } = useContext(FormContext);

  return (
    <div className="relative">
      <div
        className={`flex flex-col lg:flex-row transition-all ${
          showForm ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <Sidebar />
        <div className="flex-1 px-4 py-2 lg:ml-64 ">
          <PageHeading headingName="Income" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 min-h-[89vh]">
            <div className="grid grid-col-1 md:grid-rows-2 gap-4">
              <div className="flex flex-col justify-center items-center p-6 rounded-md bg-[hsl(214,_31%,_91%)] shadow-md">
                <p className="text-4xl font-bold mb-6">Total </p>
                <p className="md:text-6xl text-5xl font-bold text-green-600">
                  6000$
                </p>
              </div>
              <div className="rounded-md bg-[hsl(214,_31%,_91%)] p-4 shadow-md">
                <div className="flex justify-center">
                  <p className="text-2xl font-semibold text-[#007BFF] mb-6">
                    Add Income
                  </p>
                </div>
                <form action="" className="space-y-6">
                  <div className="flex flex-col sm:flex-row">
                    <label
                      htmlFor="amount"
                      className="w-full sm:w-28 flex items-center text-lg font-medium text-gray-700 mb-4 sm:mb-0"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      className="flex-1 font-light block w-full sm:w-2/3 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      id="amount"
                      placeholder="Enter Amount"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <label
                      htmlFor=""
                      className="w-full sm:w-28 text-lg font-medium text-gray-700 flex items-center mb-4 sm:mb-0"
                    >
                      Category
                    </label>
                    {inputField === "Select" && (
                      <select
                        name=""
                        id=""
                        className="flex-1 font-light block w-full sm:w-2/3 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">-- Select Category --</option>
                        {categoryOptions.map((option, index) => (
                          <option key={index} value="Freelance">
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    {inputField === "Text" && (
                      <input
                        type="text"
                        className="flex-1 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                        id="amount"
                        placeholder="Enter Category"
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <button
                      type="submit"
                      className="w-full flex-1 sm:w-auto py-3 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#007BFF] transition duration-300 ease-in-out"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="w-full flex-1 sm:w-auto py-3 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#007BFF] transition duration-300 ease-in-out"
                      onClick={incomeButtonHandler}
                    >
                      {buttonName}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="space-y-4 bg-[hsl(214,_31%,91%)] rounded-md p-4 shadow-md">
              {incomeData.map((income, index) => (
                <div
                  key={index}
                  className="border border-gray-300 p-5 rounded-lg shadow-lg flex justify-between items-center bg-white hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex space-x-7">
                    <p className="text-xl font-semibold text-blue-500">
                      {income.amount}
                    </p>
                    <p className="text-lg font-light text-gray-600">
                      {income.type}
                    </p>
                  </div>
                  <div className="flex space-x-4 text-sm font-medium">
                    <button
                      onClick={toggleShowForm}
                      className="text-green-500 cursor-pointer hover:text-green-700 transition-colors duration-200"
                    >
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button className="text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <TransactionForm showDateField={false} />{" "}
        </div>
      )}
    </div>
  );
}

export default Income;
