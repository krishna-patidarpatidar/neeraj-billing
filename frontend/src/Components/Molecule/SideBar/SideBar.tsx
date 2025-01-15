import { useState } from 'react';
import { MdOutlineDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { RiBillLine, RiAdminFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const SideBar = ({ isSidebarOpen, closeSidebar }: any) => {
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const navigate = useNavigate();

  const Logout = () => {
    alert('You are logged out');
    localStorage.clear();
    window.location.reload();
    navigate('/');
  };

  return (
    <aside
      className={`bg-gray-100 absolute z-20 lg:top-[97px] sm:top-[124px] md:top-[100px] top-[122px] h-[750px] md:h-screen text-blue-800 w-48 md:w-64 space-y-6 p-2 inset-y-0 left-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 text-xl md:text-2xl`}
      style={{
        overflowY: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      <nav>
        <Link to={'deshBord'} onClick={closeSidebar}>
          <div className="flex  p-2 md:py-4 gap-2 items-center font-bold border-b-2 hover:bg-blue-300 rounded-xl ">
            <MdOutlineDashboard />
            Dashboard
          </div>
        </Link>

        <Link to={'category'} onClick={closeSidebar}>
          <div className="flex  p-2 md:py-4 gap-2 items-center font-bold border-b-2 hover:bg-blue-300 rounded-xl ">
            <MdProductionQuantityLimits />
            Category
          </div>
        </Link>

        <Link to={'products'} onClick={closeSidebar}>
          <div className="flex  p-2 md:py-4 gap-2 items-center font-bold border-b-2 hover:bg-blue-300 rounded-xl ">
            <MdProductionQuantityLimits />
            Products
          </div>
        </Link>

        <Link to={'invoice'} onClick={closeSidebar}>
          <div className="flex  p-2 md:py-4 gap-2 items-center font-bold border-b-2 hover:bg-blue-300 rounded-xl ">
            <RiBillLine />
            Bills
          </div>
        </Link>

        <Link to={'transactions'} onClick={closeSidebar}>
          <div className="flex  p-2 md:py-4 gap-2 items-center font-bold border-b-2 hover:bg-blue-300 rounded-xl ">
            <RiBillLine />
            Transactions
          </div>
        </Link>

        <Link to={'customer'} onClick={closeSidebar}>
          <div className="flex  p-2 md:py-4 gap-2 items-center font-bold border-b-2 hover:bg-blue-300 rounded-xl ">
            <RiAdminFill />
            Customers
          </div>
        </Link>

        <div
          className="relative"
          onMouseDown={() => setShowSubMenu1(true)}
          onMouseLeave={() => setShowSubMenu1(false)}
        >
         <div className="flex py-2 md:py-4 gap-4 font-bold hover:bg-blue-300 rounded-xl ">
            <IoSettingsOutline />
            Settings
          </div>

          {showSubMenu1 && (
            <ul className="bottom-6 flex flex-col gap-1 w-[180px] text-[20px] font-normal">
              <button onClick={Logout}>
                <li className="py-2 px-4 rounded-lg bg-red-800 hover:bg-blue-500">
                  Logout
                </li>
              </button>
            </ul>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
