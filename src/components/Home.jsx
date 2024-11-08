import React, { useState } from "react";
import ImageCarousel from "../HomeUiComponents/ImageInterval";
import CardWork from "../HomeUiComponents/CardWork";
import { File, Folder } from "lucide-react";
import Child from "./Child/Child";
import ImageSideSection from "../HomeUiComponents/ImageSideSection";
import MemberShip from "../HomeUiComponents/MemberShip";
import ClientSection from "../HomeUiComponents/ClientSection";
import LocalUser from "../HomeUiComponents/LocalUser";

const Home = () => {
  const [allow, setAllow] = useState(false);
  const [valueId, setValueId] = useState(0);
  const [valuekey, setValuekey] = useState(0);
  const structure = {
    name: "root",
    type: "folder",
    children: [
      {
        name: "Documents",
        type: "folder",
        children: [
          {
            name: "Resume.pdf",
            type: "file",
          },
          {
            name: "Project",
            type: "folder",
            children: [
              {
                name: "Proposal.docx",
                type: "file",
              },
              {
                name: "Notes.txt",
                type: "file",
              },
            ],
          },
        ],
      },
      {
        name: "Photos",
        type: "folder",
        children: [
          {
            name: "Vacation",
            type: "folder",
            children: [
              {
                name: "beach.png",
                type: "file",
              },
              {
                name: "mountains.jpg",
                type: "file",
              },
            ],
          },
        ],
      },
      {
        name: "Music",
        type: "folder",
        children: [
          {
            name: "song.mp3",
            type: "file",
          },
        ],
      },
    ],
  };

  const handleClick = (id, keyId) => {
    console.log("id", id);
    console.log("key", keyId);
    if (id === keyId) {
      setValueId(id);
      setValuekey(keyId);
      setAllow(!allow);
    }
  };
  console.log(structure);
  return (
    <div className="bg-gradient-to-b from-orange-50">
      {/* {structure.children.map((item, index) => {
          return <Child values={item} />;
        })} */}
      <div className="md:h-screen   ">
        <div className="flex justify-center pt-[60px]">
          <div className="bg-orange-400 shadow-md shadow-orange-300 text-white pl-5 pr-5 rounded-3xl">
            Track Your Finance
          </div>
        </div>
        <div className="mt-10 mb-10 ml-[100px] mr-[100px]">
          <hr />
        </div>
        <div className="font-mono font-bold text-[30px] md:text-[70px] text-center text-gray-800">
          Stay on Top of Your Budget, Anytime, Anywhere!
        </div>
        <div className=" flex justify-center ">
          <span className="w-[75%] font-thin text-slate-700 text-[14px] md:text-[18px] text-center">
            {" "}
            "Our expenses tracker lets you easily monitor spending, categorize
            expenses, and gain insights into your financial habits. Accessible
            on any device, it’s the perfect tool to keep you connected to your
            budget and make smart financial choices on the go."
          </span>
        </div>
        <div className="flex justify-center mt-10 mb-10 items-center">
          <div className="pl-6 pr-6 pt-2 pb-2 font-bold rounded-full shadow-md shadow-gray-300 text-gray-100 bg-pink-800">
            Register as a User
          </div>
          <div className="font-thin ml-3">Join Us</div>
        </div>
        {/* <div className="relative ">
          <div className="">
            <div className="absolute">

            </div>
            <div className=" "><ImageCarousel /></div>
          </div>
        </div> */}
      </div>
      {/* second section Ui start*/}
      <div>
        <ClientSection />
        <MemberShip />
        <LocalUser />
      </div>
    </div>
  );
};

export default Home;
