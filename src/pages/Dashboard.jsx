import React from "react";
import Sidebar from "../components/Sidebar";
import Charts from "../components/BarChart";

function Dashboard() {
  const monthlyData = [
    { month: "Jan", value: 100000 },
    { month: "Feb", value: 20000 },
    { month: "Mar", value: 50000 },
    { month: "Apr", value: 30000 },
    { month: "May", value: 15000 },
  ];
  const categoryData = [
    { category: "Food", value: 23000 },
    { category: "Utilities", value: 20000 },
    { category: "Housing", value: 75000 },
    { category: "Entertainment", value: 5000 },
    { category: "Health", value: 9000 },
  ];

  const colors = ["#2f2f4e", "#692c2b", "#12403f", "#6d2650", "#34d85d"];
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 px-4 py-3 overflow-hidden relative lg:ml-64">
        <select
          className="text-[#6c757d] bg-[hsl(214,_31%,_91%)] py-1 px-2 mx-6 rounded-md text-sm absolute right-0"
          defaultValue={new Date().getFullYear()}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <option key={i} value={new Date().getFullYear() - i}>
              {new Date().getFullYear() - i}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {/* General Summary Box */}
          <div className="bg-[hsl(214,_32%,_91%)] p-6 rounded-lg shadow-md h-[265px]">
            {/* General Summary Title with Dropdown */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base text-[#007BFF] font-bold border-b-2 border-[hsl(60,_3%,_35%)] flex-grow">
                General Summary
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center w-full">
                <p className="text-sm h-6 font-medium text-gray-400">
                  Total Expense
                </p>
                <p className="text-sm h-6 font-medium text-[#6c757d]">$20000</p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-sm h-6 font-medium text-gray-400">
                  Total Income
                </p>
                <p className="text-sm h-6 font-medium text-[#6c757d]">$5000</p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-sm h-6 font-medium text-gray-400">Balance</p>
                <p className="text-sm h-6 font-medium text-[#6c757d]">$3000</p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-sm h-6 font-medium text-gray-400">
                  This Month
                </p>
                <p className="text-sm h-6 font-medium text-[#6c757d]">$1500</p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-sm h-6 font-medium text-gray-400">
                  Last Month
                </p>
                <p className="text-sm h-6 font-medium text-[#6c757d]">$12000</p>
              </div>
            </div>
          </div>

          {/* Recent Expenses Box */}
          <div className="bg-[hsl(214,_32%,_91%)] p-6 rounded-lg shadow-md h-[265px]">
            <h2 className="text-base text-[#007BFF] font-bold mb-4 border-b-2 border-[hsl(60,_3%,_35%)]">
              Recent Expenses
            </h2>
            {/* Header Row */}
            <div className="space-y-4 overflow-y-auto">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <p className="text-sm font-semibold text-gray-400 text-left">
                  Subject
                </p>
                <p className="text-sm font-semibold text-gray-400 text-center">
                  Category
                </p>
                <p className="text-sm font-semibold text-gray-400 text-right">
                  Amount
                </p>
              </div>
              {/* Expense Items */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <p className="text-sm font-medium text-[#6c757d] text-left">
                  Groceries
                </p>
                <p className="text-xs font-medium text-[#ae8de6] h-6 flex items-center justify-center rounded-full bg-[hsl(240,_43%,_24%,0.6)]">
                  Food
                </p>
                <p className="text-sm font-medium text-[#6c757d] text-right">
                  $150
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <p
                  className="text-sm font-medium text-[#6c757d] text-left overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ maxWidth: "10ch" }}
                >
                  Electricity
                </p>
                <p className="text-xs font-medium text-[#cb0619] h-6 flex items-center justify-center rounded-full bg-[hsl(1,_42%,_29%)]">
                  Utilities
                </p>
                <p className="text-sm font-medium text-[#6c757d] text-right">
                  $100
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <p className="text-sm font-medium text-[#6c757d] text-left">
                  Rent
                </p>
                <p className="text-xs font-medium text-[#01d1be] h-6 flex items-center justify-center rounded-full bg-[hsl(179,_57%,_16%)]">
                  Housing
                </p>
                <p className="text-sm font-medium text-[#6c757d] text-right">
                  $1200
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <p className="text-sm font-medium text-[#6c757d] text-left">
                  Movies
                </p>
                <p className="text-xs font-medium text-[#e0208f] h-6 flex items-center justify-center rounded-full bg-[hsl(325,_48%,_29%)]">
                  Entertainment
                </p>
                <p className="text-sm font-medium text-[#6c757d] text-right">
                  $230
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Graph Content*/}
        <div className="w-full h-auto bg-[hsl(214,_32%,_91%)] mt-6 px-4 pt-3 rounded-md shadow-md flex flex-col">
          <div className="w-full pb-2 border-b-2 border-[hsl(60,_3%,_35%)]">
            <h2 className="text-[#007BFF] font-bold text-lg md:text-base">
              Month on Month Insights
            </h2>
          </div>
          <div className="flex w-full flex-1 flex-col md:flex-row">
            {/* Left Section */}
            <div className="flex-1 pr-0 md:pr-4 mb-4 md:mb-0">
              <h3 className="text-gray-400 text-sm mb-4">
                Last 5 Months Summary
              </h3>
              <div className="h-[250px] w-full">
                {/* BarChart Component */}
                <Charts data={monthlyData} colors={["#007BFF"]} />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 pl-0 md:pl-4 border-l-0 md:border-l-2 border-[hsl(60,_3%,_35%)]">
              <h3 className="text-gray-400 text-sm mb-4">By Category</h3>
              <div className="h-[250px] w-full">
                {/* BarChart Component */}
                <Charts data={categoryData} colors={colors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
