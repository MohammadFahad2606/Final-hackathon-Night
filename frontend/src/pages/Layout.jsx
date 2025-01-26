import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:bg-blue-700 p-2 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-blue-700 p-2 rounded">
            <Link to="/userdata">Users</Link>
          </li>
          <li className="hover:bg-blue-700 p-2 rounded">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        <header className="mb-6">
          <h2 className="text-3xl font-bold">Department Staff</h2>
        </header>
        {children}
      </div>
    </div>
  );
};

export default Layout;