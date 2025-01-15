import { IoNotifications } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-wrap fixed z-30 left-0 right-0 top-0 justify-between bg-white shadow-md p-4 items-center md:flex-nowrap">
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <div>
            <img
              className="h-12 w-12 md:h-16 md:w-16 rounded-full"
              loading="lazy"
              src="https://www.shutterstock.com/image-vector/unique-light-bulb-logo-icon-260nw-1490973950.jpg"
              alt="Electranet Logo"
            />
            <span className="md:hidden" onClick={toggleSidebar} >
              <FiAlignJustify fontSize={25} />
            </span>
          </div>
          <div className="ml-3 hidden md:block">
            <h2 className="text-lg md:text-xl font-bold text-blue-600">
              Mafatal Patidar
            </h2>
            <p className="text-sm text-gray-600">Mob. 7999732728</p>
          </div>
        </div>
        {/* Title Section */}
        <div className="text-center mb-4 md:mb-0">
          <h1 className="text-lg md:text-2xl font-extrabold text-blue-700 italic">
            Electranet Power Pvt. Ltd.
          </h1>
          <h2 className="text-sm md:text-lg font-medium text-gray-600 italic">
            Enlightening You
          </h2>
        </div>

        {/* Notifications and Contact Section */}
        <div className="flex flex-wrap items-center space-x-4 justify-end md:flex-nowrap">
          {/* Neeraj Patidar Info */}
          <div className="text-right mb-4 md:mb-0 hidden md:block">
            <h2 className="text-lg md:text-xl font-bold text-blue-600">
              Neeraj Patidar
            </h2>
            <p className="text-sm text-gray-600">Mob. 9589022358</p>
          </div>
          {/* Notification Icon */}
          <div className="relative">
            <IoNotifications className="text-blue-700 text-2xl md:text-3xl" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>
      </div>

      {/* SideBar will always be shown on desktop */}
      <div className="z-30 fixed">
        <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default Header;
