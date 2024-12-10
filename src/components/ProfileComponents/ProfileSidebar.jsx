import React from "react";

function ProfileSidebar({ activeComponent, setActiveComponent, hidden }) {
  const sideBarNames = [
    { name: "Password", activeComponent: "password" },
    { name: "Address", activeComponent: "address" },
    { name: "Users", activeComponent: "users" },
  ];

  return (
    <div className="flex items-center justify-center h-1/2 border-gray-400">
      <div
        className={`flex flex-col lg:flex ${
          hidden ? "hidden" : "lg:hidden mt-4"
        }`}
      >
        {sideBarNames.map((name, index) => (
          <div key={index} className="flex flex-start">
            <a
              href="#"
              className={`font-normal text-lg mb-4 transition-colors duration-300 ease-in-out ${
                activeComponent === name.activeComponent
                  ? "text-[#007bff]"
                  : "text-[#6c757d] hover:text-[#007bff]"
              }`}
              onClick={() => setActiveComponent(name.activeComponent)}
            >
              <i className="fa-solid fa-lock mr-2"></i> {name.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileSidebar;
