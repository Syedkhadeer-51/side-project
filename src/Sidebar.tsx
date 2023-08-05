
import {
  Link
} from "react-router-dom";
import {ChartPieIcon, BuildingOfficeIcon, UserGroupIcon, ChartBarIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline"

function Sidebar() {

  return (
    <>
      <aside
        id="default-sidebar"
        className="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-100 border-r-2 border-slate-200">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <ChartPieIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/properties" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <BuildingOfficeIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Properties</span>
              </Link>
            </li>
            <li>
              <Link to="/agents" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <StarIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Agents</span>
              </Link>
            </li>
            <li>
              <Link to="/customers" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <UserGroupIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Customers</span>
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <ChartBarIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Analytics</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <UserIcon className="text-slate-600 h-6 w-6" />
                <span className="ml-4">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
