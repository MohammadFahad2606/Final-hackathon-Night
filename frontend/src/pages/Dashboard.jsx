import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="text-lg text-gray-600">
          This is the main content area. Customize it as needed for your app.
        </p>

        {/* Example Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
            <p className="text-sm text-gray-500">
              Description of the first feature or data point.
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
            <p className="text-sm text-gray-500">
              Description of the second feature or data point.
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Feature 3</h3>
            <p className="text-sm text-gray-500">
              Description of the third feature or data point.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
