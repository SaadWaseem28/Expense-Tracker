import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfileSidebar from "./ProfileComponents/ProfileSidebar";

function Sidebar({ activeComponent, setActiveComponent }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const navLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/transactions", label: "Transactions" },
    { to: "/income", label: "Income" },
    { to: "/profile", label: "Profile" },
    { to: "/invoiceimages", label: "Invoice" },
  ];

  return (
    <div className="lg:fixed">
      <button
        onClick={toggleSidebar}
        className="lg:hidden  fixed top-2 left-4 w-24 h-9 bg-[hsl(214,_32%,_91%)] text-white rounded-md z-50 shadow-[0px_8px_15px_rgba(0,0,0,0.4)]"
      >
        ☰
      </button>

      <div
        className={`lg:w-64 w-64 min-h-screen bg-[hsl(214,_32%,_91%)] flex flex-col items-center fixed top-0 left-0 transition-transform duration-300 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0 z-40`}
      >
        <img
          src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User Profile"
          className="w-24 h-24 rounded-full my-8"
        />
        <p className="text-[#007BFF] text-lg font-semibold mb-6">John Doe</p>

        <div className="px-3 mt-5 flex flex-col items-start w-60">
          {navLinks.map((navLink, index) => (
            <NavLink
              to={navLink.to}
              key={index}
              className={({ isActive }) =>
                `flex items-center  text-[#6c757d] py-3 px-5 w-full rounded-md mb-2 transition-transform duration-300 ease-in-out transform-gpu ${
                  isActive
                    ? "bg-[hsl(214,_32%,_101%)] shadow-md scale-105"
                    : "hover:bg-[hsl(214,_32%,_101%)] hover:shadow-md hover:scale-105"
                }`
              }
            >
              {navLink.label}
            </NavLink>
          ))}
        </div>

        {location.pathname === "/profile" && (
          <ProfileSidebar
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
            hidden={false}
          />
        )}

        <p className="text-[#007BFF] text-lg font-semibold mt-auto mb-4">
          <Link to="/" className="hover:underline">
            Expense Tracker
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
