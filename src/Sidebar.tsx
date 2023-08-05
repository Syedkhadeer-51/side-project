
import {
  Link
} from "react-router-dom";
import {ChartPieIcon, BuildingOfficeIcon, UserGroupIcon, ChartBarIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline"

function Sidebar() {

  return (
    <>
      <aside
        id="default-sidebar"
        className="z-40 w-48 h-screen transition-transform -tranzinc-x-full sm:tranzinc-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full p-4 pt-8 overflow-y-auto bg-zinc-100 border-r-2 border-zinc-200">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center p-2 rounded-lg hover:bg-zinc-200 group">
                <ChartPieIcon className="text-zinc-600 h-6 w-6" />
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/properties" className="flex items-center p-2 rounded-lg hover:bg-zinc-200 group">
                <BuildingOfficeIcon className="text-zinc-600 h-6 w-6" />
                <span className="ml-4">Properties</span>
              </Link>
            </li>
            <li>
              <Link to="/agents" className="flex items-center p-2 rounded-lg hover:bg-zinc-200 group">
                <StarIcon className="text-zinc-600 h-6 w-6" />
                <span className="ml-4">Agents</span>
              </Link>
            </li>
            <li>
              <Link to="/customers" className="flex items-center p-2 rounded-lg hover:bg-zinc-200 group">
                <UserGroupIcon className="text-zinc-600 h-6 w-6" />
                <span className="ml-4">Customers</span>
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="flex items-center p-2 rounded-lg hover:bg-zinc-200 group">
                <ChartBarIcon className="text-zinc-600 h-6 w-6" />
                <span className="ml-4">Analytics</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center p-2 rounded-lg hover:bg-zinc-200 group">
                <UserIcon className="text-zinc-600 h-6 w-6" />
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
