import React, { useState } from "react";

const FilterMenu = ({ onFilterApply }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleFilterApply = () => {
    const filterData = {
      category: selectedCategory,
      amount: selectedAmount,
      date: selectedDate,
    };
    onFilterApply(filterData); // Pass the filter data to parent component
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-lg absolute top-14 right-0 z-10">
      <h3 className="text-lg font-semibold mb-4">Filter Options</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          className="mt-2 p-2 border rounded-md w-full"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Utilities">Utilities</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transportation">Transportation</option>
          <option value="Housing">Housing</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          className="mt-2 p-2 border rounded-md w-full"
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          className="mt-2 p-2 border rounded-md w-full"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <button
        onClick={handleFilterApply}
        className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterMenu;
