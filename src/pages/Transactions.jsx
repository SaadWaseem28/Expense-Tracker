import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import Sidebar from "../components/Sidebar";
import TransData from "../components/transaction/TransData";
import TransactionForm from "../components/transaction/TransactionForm";

const transactionData = [
  {
    name: "Electricity",
    category: "Utilities",
    amount: "$1400",
    date: "11/11/2023",
  },
  {
    name: "Groceries",
    category: "Food",
    amount: "$20000",
    date: "12/11/2023",
  },
  { name: "Rent", category: "Housing", amount: "$1200", date: "01/11/2023" },
  {
    name: "Internet",
    category: "Utilities",
    amount: "$5000",
    date: "02/11/2023",
  },
  {
    name: "Movies",
    category: "Entertainment",
    amount: "$3090",
    date: "03/11/2023",
  },
  {
    name: "Gas",
    category: "Transportation",
    amount: "$6020",
    date: "04/11/2023",
  },
  {
    name: "Phone Bill",
    category: "Utilities",
    amount: "$7580",
    date: "05/11/2023",
  },
];

function Transactions() {
  const { showForm, toggleShowForm } = useContext(FormContext);

  return (
    <div className="relative">
      <div
        className={`flex flex-col min-h-screen sm:flex-row transition-all ${
          showForm ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className=" md:px-4 px-0 md:mt-0 mt-9 flex-1 ">
          <div className="bg-[hsl(214,_32%,_91%)] px-4 py-3 m-4 sm:m-7 rounded-md lg:ml-64 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
              <h1 className="text-[#007BFF] text-xl font-semibold mb-4 sm:mb-0">
                Recent Transactions
              </h1>
              <div className="flex flex-wrap sm:flex-nowrap space-x-3 gap-3 sm:gap-0 justify-center sm:justify-start">
                <button
                  onClick={toggleShowForm}
                  className="px-3 py-2 bg-[#007BFF] hover:bg-blue-600 text-sm text-white rounded-md transition-colors duration-200 ease-in-out"
                >
                  + New Expenses
                </button>

                <i className="fa-solid fa-filter px-4 py-2 text-[#007BFF] hover:bg-[#ffffff] rounded-md"></i>
                <i className="fa-solid fa-sort px-4 py-2 text-[#007BFF] hover:bg-[#ffffff] rounded-md"></i>
              </div>
            </div>

            {/* Make table scrollable on smaller screens */}
            <div className="overflow-x-auto">
              <table className="min-w-full mt-8 table-auto text-[#9ca3af] border-collapse shadow-md rounded-lg table-fixed">
                <thead>
                  <tr className="text-[#9ca3af]">
                    <th className="px-6 py-3 text-left font-semibold">Name</th>
                    <th className="px-6 py-3 text-left font-semibold">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left font-semibold">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left font-semibold">Date</th>
                    <th className="px-6 py-3 text-left font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map(
                    ({ name, category, amount, date }, index) => (
                      <TransData
                        key={index}
                        name={name}
                        category={category}
                        amount={amount}
                        date={date}
                        bgColor={
                          index % 2 === 0
                            ? "bg-[hsl(214,_32%,_81%)]"
                            : "bg-[hsl(214,_32%,_94%)]"
                        }
                        toggleShowForm={toggleShowForm}
                      />
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <TransactionForm showDateField={true} />
        </div>
      )}
    </div>
  );
}

export default Transactions;
