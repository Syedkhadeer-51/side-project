import { useState } from "react";
// import "./Sidebar.css";

import {ChartPieIcon, BuildingOfficeIcon, UserGroupIcon, ChartBarIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline"

function Sidebar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-100 border-r-2 border-slate-200">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ChartPieIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BuildingOfficeIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Properties</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <StarIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Agents</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <UserGroupIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Customers</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ChartBarIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <UserIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
