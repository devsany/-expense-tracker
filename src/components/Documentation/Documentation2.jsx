import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Documentation2 = () => {
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedRoute = event.target.value;
    if (selectedRoute) {
      navigate(selectedRoute);
    }
  };
  return (
    <div>
      <div className="   pt-[20px]">
        <div className="ml-[40px]">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 w-[200px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleSelectChange}
          >
            <option value="">Select code Option</option>
            <option value="/documentation/v1">Home Page Code</option>
            <option value="/documentation/v2">Registration Page Code</option>
            <option value="/documentation/v3">Login Page Code</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Documentation2;
