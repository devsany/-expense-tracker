import { Dock, View, ViewIcon } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const ViewSection = () => {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="flex pl-4 pr-4 pt-2 pb-2 cursor-pointer shadow-md bg-purple-600 rounded-md font-mono text-white  ">
          <ViewIcon />
          <NavLink to="/registration">
            <span className="ml-2"> View</span>
          </NavLink>
        </div>
        <div className="flex pl-4 pr-4 pt-2 pb-2 cursor-pointer shadow-md ml-3 bg-orange-600 rounded-md font-mono text-white  ">
          <Dock />
          <span className="ml-2  "> Documentation</span>
        </div>
      </div>
    </div>
  );
};

export default ViewSection;
