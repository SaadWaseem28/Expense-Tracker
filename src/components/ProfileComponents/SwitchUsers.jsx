import React from "react";

function SwitchUser() {
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold text-gray-800">Manage Accounts</p>
        <p className="text-sm text-gray-500 font-light mb-2">
          Switch Account or Remove Account
        </p>
      </div>
      <div className="space-y-3">
        <div className="border-2 border-gray-300 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
          {/* Left Side: Profile Image, Name, and Email */}
          <div className="flex items-center space-x-4">
            {/* Profile Image and Active Dot */}
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
              />
              {/* Active Green Dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>

            {/* Name and Email */}
            <div className="flex flex-col">
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-600 font-normal">
                johndoe@gmail.com
              </p>
            </div>
          </div>

          {/* Right Side: Bin Icon */}
          <button className="text-gray-500 hover:text-red-500">
            {/* Font Awesome Trash Icon */}
            <i className="fas fa-trash-alt w-5 h-5"></i>
          </button>
        </div>

        <div className="border-2 border-gray-300 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
          {/* Left Side: Profile Image, Name, and Email */}
          <div className="flex items-center space-x-4">
            {/* Profile Image and Active Dot */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
              />
              {/* Active Green Dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>

            {/* Name and Email */}
            <div className="flex flex-col">
              <p className="font-semibold text-gray-800">John Wick</p>
              <p className="text-sm text-gray-600 font-normal">
                johnwick@gmail.com
              </p>
            </div>
          </div>

          {/* Right Side: Bin Icon */}
          <button className="text-gray-500 hover:text-red-500">
            {/* Font Awesome Trash Icon */}
            <i className="fas fa-trash-alt w-5 h-5"></i>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 p-4 rounded-lg min-w-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            Add Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwitchUser;
