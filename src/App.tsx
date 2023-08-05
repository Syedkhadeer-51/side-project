import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-100">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
        </button>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
