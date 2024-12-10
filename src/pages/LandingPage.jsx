import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-custom-bg md:p-0 p-4">
      {/* Navbar (Fixed) */}
      <div className="bg-custom-bg flex justify-between items-center px-6 sm:px-8 py-4 fixed top-0 left-0 right-0 z-10 w-full">
        {/* Left Content (Heading) */}
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#007BFF] mr-2 sm:mr-0">
            Expense Tracker
          </h1>
        </div>

        {/* Right-Aligned Buttons */}
        <div className="flex space-x-4">
          <Link to="/Login">
            <button className="text-white py-2 px-4 rounded-md hover:bg-[hsl(214,_32%,_91%)] hover:text-[#007BFF]">
              Login
            </button>
          </Link>
          <Link to="/Signup">
            <button className="text-white py-2 px-4 rounded-md hover:bg-[hsl(214,_32%,_91%)] hover:text-[#007BFF]">
              Signup
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-12 pt-32 sm:pt-40">
        {/* Left Side Middle Content */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center mb-12 lg:mb-0 text-center sm:text-left">
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Manage Your Expenses Easily With{" "}
              <span className="text-[#007BFF]">Expense Tracker</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6">
              Track your daily expenses easily with the Expense Tracker app.
              Stay on top of your finances!
            </p>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="w-full lg:w-2/5 flex flex-col items-center space-y-6">
          <img
            src="https://cdn.pixabay.com/photo/2019/04/28/22/00/cost-4164541_960_720.jpg"
            alt="Expense Tracker Overview"
            className="w-[85%] sm:w-[70%] lg:w-[45%] rounded-lg shadow-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_1280.jpg"
            alt="Expense Chart Example"
            className="w-[85%] sm:w-[70%] lg:w-[45%] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
