import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getUserByTokenFronend } from "../utils/axios";

const DepartmentStaff = () => {
  const [data, setdata] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data: ", data.token);
    const { token } = data;  // Extract the token from the form data
    const res = await getUserByTokenFronend(token); 
    setdata(res);
  };
  
  console.log(data);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">DepartmentStaff</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
       

          {/* Token Field */}
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

          {/* Assistance Status Field */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assistance Status
            </label>
            <select
              {...register("assistanceStatus", { required: "Status is required" })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.assistanceStatus ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            {errors.assistanceStatus && (
              <p className="text-red-500 text-sm mt-1">
                {errors.assistanceStatus.message}
              </p>
            )}
          </div> */}

          {/* Remarks Field */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Remarks / Actions Taken
            </label>
            <textarea
              {...register("remarks", { required: "Remarks are required" })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.remarks ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.remarks && (
              <p className="text-red-500 text-sm mt-1">
                {errors.remarks.message}
              </p>
            )}
          </div> */}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Show data
            </button>
          </div>
        </form>
        <div>
        {data && (
  <div className="mt-4">
    <h3 className="text-lg font-semibold mb-2">User Data</h3>
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
    {/* Assistance Status Field */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Assistance Status
      </label>
      <select
        value={data.assistanceStatus || ""}
        className="w-full px-4 py-2 border rounded-md border-gray-300"
      
      >
        <option value="In Progress" selected={data.assistanceStatus === "In Progress"}>
          In Progress
        </option>
        <option value="Completed" selected={data.assistanceStatus === "Completed"}>
          Completed
        </option>
      </select>
    </div>
    
    {/* Remarks Field */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Remarks / Actions Taken
      </label>
      <textarea
        value={data.remarks || ""}
        className="w-full px-4 py-2 border rounded-md border-gray-300"
        
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="mt-4">
      <button
        type="button"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default DepartmentStaff;
