import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getUserByTokenFronend, patchData } from "../utils/axios";

const DepartmentStaff = () => {
  const [data, setData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const { token } = formData;
    const res = await getUserByTokenFronend(token);
    setData(res);
  };

  const handleSubmitbtn = () => {
    if (data) {
      console.log('Assistance Status:', data.assistanceStatus);
      console.log('Remarks:', data.remarks);
      patchData('/api/user/update', {
        cnic: data.cnic,
        assistanceStatus: data.assistanceStatus,
        remarks: data.remarks,
      });
    } else {
      console.log('Data is not available');
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:bg-blue-700 p-2 rounded">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-blue-700 p-2 rounded">
            <a href="#">Users</a>
          </li>
          <li className="hover:bg-blue-700 p-2 rounded">
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Department Staff</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Search by Token</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Token Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Token
                </label>
                <input
                  type="text"
                  {...register("token", { required: "Token is required" })}
                  className={`w-full px-4 py-2 border rounded-md ${
                    errors.token ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.token && (
                  <p className="text-red-500 text-sm mt-1">{errors.token.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Show Data
                </button>
              </div>
            </form>
          </div>

          {/* User Data Section */}
          {data && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">User Data</h3>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">CNIC:</span> {data.cnic}
                </p>
                <p>
                  <span className="font-semibold">Name:</span> {data.name}
                </p>
                <p>
                  <span className="font-semibold">Contact Details:</span> {data.contactDetails}
                </p>
                <p>
                  <span className="font-semibold">Address:</span> {data.address}
                </p>
                <p>
                  <span className="font-semibold">Purpose:</span> {data.purpose}
                </p>

                {/* Assistance Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assistance Status
                  </label>
                  <select
                    value={data.assistanceStatus || ""} // Controlled by the state
                    onChange={(e) => setData({ ...data, assistanceStatus: e.target.value })} // Update state on change
                    className="w-full px-4 py-2 border rounded-md border-gray-300"
                  >
                    <option key="1" value="In Progress">In Progress</option>
                    <option key="2" value="Completed">Completed</option>
                  </select>
                </div>

                {/* Remarks */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Remarks / Actions Taken
                  </label>
                  <textarea
                    value={data.remarks || ""}
                    onChange={(e) => setData({ ...data, remarks: e.target.value })} // Update state on change
                    className="w-full px-4 py-2 border rounded-md border-gray-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleSubmitbtn()}  // Handling submit onClick
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentStaff;