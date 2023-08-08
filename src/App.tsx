import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Agents from "./pages/Agents";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";

import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <>
       <BrowserRouter>
        <div className="bg-slate-0 flex antialiased h-100">
          <Sidebar />
          <div id="main" className="p-8 w-8/12 h-screen overflow-y-auto overflow-x-auto grow">
            <button
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              type="button"
              className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
            </button>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="customers" element={<Customers />} />
              <Route path="profile" element={<Profile />} />
              {/* Use dynamic property details view */}
              <Route path="properties" element={<Properties/>} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="agents" element={<Agents />} />
              {/* If you want a catch-all route */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
