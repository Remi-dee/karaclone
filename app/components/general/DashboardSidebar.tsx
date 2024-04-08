import React, { FC } from "react";
import Link from "next/link";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
//import { toggleLogoutModal } from "@/store/reducers/modal";

// Define the DashboardSideBar component
const DashboardSideBar: FC = () => {
  // Initialize necessary hook and dispatch
  const dispatch = useDispatch();

  // Define the sidebar items
  const sidebarItems = [
    { name: "Dashboard", link: "/dashboard", icon: <AiOutlineHome /> },
    { name: "Settings", link: "/dashboard/settings", icon: <FiSettings /> },
    //{ name: "Logout", onClick: () => dispatch(toggleLogoutModal({ data: true })), icon: <FiLogOut /> },
  ];

  return (
    <>
      {/* Sidebar toggler button */}
      {/* Your existing toggle button code */}

      {/* Sidebar content */}
      <aside
        className={`fixed left-0 z-40 top-[3.475rem] h-screen w-[18.75rem] 
        bg-white transition-transform duration-700 ease-in-out py-16`}
        aria-label="Dashboard Sidebar"
      >
        {/* Sidebar items */}
        <div className="flex flex-col justify-between h-full pb-[4.06rem]">
          <ul className="px-[1.875rem] space-y-4">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                {/* Sidebar item */}
                {item.link ? (
                  <Link href={item.link}>
                    <div className="flex-1 flex flex-row items-center px-[0.5em] py-[1em] gap-x-[0.5em] cursor-pointer rounded-xl">
                      <span className="text-xl block float-left text-twinklly-dark-blue">
                        {item.icon}
                      </span>
                      <span className="flex-1 duration-200 text-twinklly-dark-blue">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <button
                    className="flex-1 flex flex-row items-center px-[0.5em] py-[1em] gap-x-[0.5em] cursor-pointer rounded-xl"
                    // onClick={item.onClick}
                  >
                    <span className="text-xl block float-left text-twinklly-dark-blue">
                      {item.icon}
                    </span>
                    <span className="flex-1 duration-200 text-twinklly-dark-blue">
                      {item.name}
                    </span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

// Export the DashboardSideBar component
export default DashboardSideBar;
