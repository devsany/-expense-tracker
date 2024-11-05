import { Settings, User } from "lucide-react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const UserHome = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="grid border grid-cols-12">
        <div className="border col-span-2">
          <div className="flex justify-between">
            User Detail <User className=" cursor-pointer" />{" "}
          </div>
          <div className="flex justify-between">
            Setting
            <Settings className="transform hover:rotate-30 transition duration-300 cursor-pointer" />{" "}
          </div>
          <div>
            <NavLink to={`/home/${id}/Income`}>Income</NavLink>
          </div>
        </div>
        <div className="border col-span-10">hii</div>
      </div>
    </div>
  );
};

export default UserHome;
