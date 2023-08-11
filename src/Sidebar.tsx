
import {
  Link
} from "react-router-dom";
import {ChartPieIcon, BuildingOfficeIcon, UserGroupIcon, ChartBarIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline";
import  bayanLogo from "../src/assets/bayanLogo.png"

function Sidebar() {

  return (
    <>
      <aside
        id="default-sidebar"
        className="z-40 w-2/12 h-screen transition-transform -tranzinc-x-full sm:tranzinc-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full p-4 pt-5 overflow-y-auto bg-neutral-100">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center p-2 rounded-lg group">
                <div className="flex justify-center"> 
                <div ><img src={bayanLogo} className="h-20" alt="bayanLogo"/></div>
                <div className="p-1 align-center pt-5"><h3 className="font-extrabold text-xl">BAYAN</h3>
                <h6>INVESTMENTS</h6>
                </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center p-3 rounded-lg hover:bg-red-950 group my-3 hover:text-slate-50">
                <ChartPieIcon className="h-6 w-6 font-bold hover:text-slate-50" />
                <span className="ml-4 font-semibold text-lg">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/properties" className="flex items-center p-3 rounded-lg hover:bg-red-950 group my-3 hover:text-slate-50">
                <BuildingOfficeIcon className="hover:text-slate-50 h-6 w-6" />
                <span className="ml-4 font-semibold text-lg">Properties</span>
              </Link>
            </li>
            <li>
              <Link to="/agents" className="flex items-center p-3 rounded-lg hover:bg-red-950 group my-3 hover:text-slate-50">
                <StarIcon className="hover:text-slate-50 h-6 w-6" />
                <span className="ml-4 font-semibold text-lg">Agents</span>
              </Link>
            </li>
            <li>
              <Link to="/customers" className="flex items-center p-3 rounded-lg hover:bg-red-950 group my-3 hover:text-slate-50">
                <UserGroupIcon className="hover:text-slate-50 h-6 w-6" />
                <span className="ml-4 font-semibold text-lg">Customers</span>
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="flex items-center p-3 rounded-lg hover:bg-red-950 group my-3 hover:text-slate-50">
                <ChartBarIcon className="hover:text-slate-50 h-6 w-6" />
                <span className="ml-4 font-semibold text-lg">Analytics</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center p-3 rounded-lg hover:bg-red-950 group my-3 hover:text-slate-50">
                <UserIcon className="hover:text-slate-50 h-6 w-6" />
                <span className="ml-4 font-semibold text-lg">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
