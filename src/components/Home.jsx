import React, { useState } from "react";
import ImageCarousel from "../HomeUiComponents/ImageInterval";
import CardWork from "../HomeUiComponents/CardWork";
import { File, Folder } from "lucide-react";
import Child from "./Child/Child";

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
    <div>
      {structure.children.map((item, index) => {
          return <Child values={item} />;
        })}
      {/* <div className="h-[100vw] bg-gradient-to-b from-orange-50">
       
        <div className="relative ">
          <div className="">
            <div className="absolute"></div>
            <div className=" ">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="bg-white ">
          <CardWork
            img="/CardWork/LowVolatility.png"
            header="Low Volatility"
            content="Go for stable returns at low volatility levels"
          />
        </div>
        <div>
          <CardWork
            img="/CardWork/Thematic.png"
            header="Thematic"
            content="Explore portfolios on disruptive ideas & long-term trends"
          />
        </div>

        <div>
          <CardWork
            img="/CardWork/LowInv.png"
            header="Low Inv. Amount"
            content="Start small budget investments for less than ₹5000!"
          />
        </div>
        <div>
          <CardWork
            img="/CardWork/Tracker.png"
            header="Trackers"
            content="Take exposure to important sectors of the economy"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
