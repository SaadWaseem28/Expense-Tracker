import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChangePassword from "../components/ProfileComponents/ChangePassword";
import SwitchUser from "../components/ProfileComponents/SwitchUsers";
import ProfileSidebar from "../components/ProfileComponents/ProfileSidebar";
import PageHeading from "../components/PageHeading";
import { set } from "react-hook-form";

function Profile() {
  const [activeComponent, setActiveComponent] = useState("password");
  const [buttonName, setButtonName] = useState("Edit");
  const [disable, setDisable] = useState("true");
  const toggleName = () => {
    // Toggle the state
    setButtonName((prevButtonName) =>
      prevButtonName === "Edit" ? "Save" : "Edit"
    );
    setDisable(!disable);
  };
  return (
    <div className="flex">
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className="lg:ml-64 px-4 py-2 flex-1">
        <PageHeading headingName="Profile" />
        {/* Main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 ">
          <div className="bg-[#e1e7ef] rounded-md lg:col-span-1 lg:row-span-2 text-white font-bold text-xl shadow-2xl py-2 px-6">
            {/* user details */}
            <div className="h-1/2 flex flex-col items-center md:border-b-2 md:border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User Profile"
                className="w-24 h-24 rounded-full my-6"
              />
              <p className="text-[#212529] text-xl font-bold leading-tight">
                John Doe
              </p>
              <p className="text-[#6c757d] text-sm font-light leading-relaxed">
                using since 2019
              </p>
              <p className="text-[#6c757d] text-sm font-light leading-relaxed">
                street 2, Los Angeles, US
              </p>
            </div>
            {/* small sidebar */}
            <ProfileSidebar
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
              hidden={true} //show only on large screen
            />
          </div>

          <div className="bg-[#e1e7ef] rounded-md sm:col-span-1 lg:col-span-2 text-white font-bold h-auto p-4">
            <form className="space-y-4 text-base mt-4 lg:mt-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-300 pb-2">
                <label
                  className="w-full sm:w-60 font-normal text-[#1a202c] text-sm sm:text-base"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="bg-transparent text-gray-500 placeholder-gray-500 border-none outline-none flex-1 font-light text-sm sm:text-base"
                  placeholder="John"
                  disabled={disable}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-300 pb-2">
                <label
                  className="w-full sm:w-60 font-normal text-[#1a202c] text-sm sm:text-base"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="bg-transparent text-gray-500 placeholder-gray-500 border-none outline-none flex-1 font-light text-sm sm:text-base"
                  placeholder="Doe"
                  disabled={disable}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-300 pb-2">
                <label
                  className="w-full sm:w-60 font-normal text-[#1a202c] text-sm sm:text-base"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="bg-transparent text-gray-500 placeholder-gray-500 border-none outline-none flex-1 font-light text-sm sm:text-base"
                  placeholder="johndoe@gmail.com"
                  disabled={disable}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-300 pb-2">
                <label
                  className="w-full sm:w-60 font-normal text-[#1a202c] text-sm sm:text-base"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  className="bg-transparent text-gray-500 placeholder-gray-500 border-none outline-none flex-1 font-light text-sm sm:text-base"
                  placeholder="090078601"
                  disabled={disable}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-300 pb-2">
                <label
                  className="w-full sm:w-60 font-normal text-[#1a202c] text-sm sm:text-base"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="bg-transparent text-gray-500 placeholder-gray-500 border-none outline-none flex-1 font-light text-sm sm:text-base"
                  placeholder="street 2, Los Angelos, Us"
                  disabled={disable}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4">
                {/* Edit Button */}

                <button
                  type="button"
                  className="bg-[hsl(188,_78%,_41%)] hover:bg-[hsl(188,_78%,_51%)] rounded-md mt-2 w-28 h-8 text-sm sm:text-base font-normal mr-3 transition-colors duration-300 ease-in-out"
                  onClick={toggleName}
                >
                  <i className="fa-regular fa-pen-to-square mr-1"></i>{" "}
                  {buttonName}
                </button>
              </div>
            </form>
          </div>

          <div className=" flex items-center bg-[#e1e7ef] rounded-md sm:col-span-2  text-white font-bold h-auto lg:h-72 p-4 pt-2 ">
            {activeComponent === "password" && <ChangePassword />}
            {activeComponent === "users" && <SwitchUser />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
