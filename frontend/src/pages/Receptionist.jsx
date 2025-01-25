import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postData } from "../utils/axios";

const Receptionist = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const generateToken = () => Math.floor(100000 + Math.random() * 900000);

    console.log("Form Data: ", data);
    const { cnic, name, contact, address, purpose} = data;
    postData("receptionist/register", {
      cnic: cnic,
      name: name,
      contactDetails: contact,
      address: address,
      purpose:purpose,
      token:generateToken(),
    })
      .then((data) => console.log("User Registered:", data))
      .catch((err) => console.error(err));
    console.log(generateToken());
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center mb-6"> Receptionist</h2>
        <h2 className="text-2xl font-bold text-center mb-6"> Register User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* CNIC Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CNIC
            </label>
            <input
              type="text"
              {...register("cnic", {
                required: "CNIC is required",
                pattern: {
                  value: /^\d{5}-\d{7}-\d{1}$/,
                  message: "CNIC must be in the format 12345-1234567-1",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.cnic ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.cnic && (
              <p className="text-red-500 text-sm mt-1">{errors.cnic.message}</p>
            )}
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Contact Details Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Details
            </label>
            <input
              type="text"
              {...register("contact", {
                required: "Contact details are required",
                pattern: {
                  value: /^\d{10,15}$/,
                  message: "Contact must be a valid phone number",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.contact ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contact.message}
              </p>
            )}
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Purpose Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Purpose
            </label>
            <select
              {...register("purpose", { required: "Purpose is required" })}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.purpose ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Purpose</option>
              <option value="Rasan">Rasan</option>
              <option value="Bijli">Bijli</option>
              <option value="Pani">Pani</option>
              <option value="Education">Education</option>
              <option value="Medical">Medical</option>
            </select>
            {errors.purpose && (
              <p className="text-red-500 text-sm mt-1">
                {errors.purpose.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Receptionist;
