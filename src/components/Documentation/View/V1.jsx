import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const V1 = () => {
  const codeString = `import React, { useState } from "react";
import ImageCarousel from "../HomeUiComponents/ImageInterval";
import CardWork from "../HomeUiComponents/CardWork";
import { File, Folder } from "lucide-react";
import Child from "./Child/Child";
import ImageSideSection from "../HomeUiComponents/ImageSideSection";
import MemberShip from "../HomeUiComponents/MemberShip";
import ClientSection from "../HomeUiComponents/ClientSection";
import LocalUser from "../HomeUiComponents/LocalUser";
import Footer from "../HomeUiComponents/Footer";
import ViewSection from "../HomeUiComponents/ViewSection";

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

      // client section

        <div>
      <div>
        <div className="flex justify-center">
          <div>
            <div className="font-mono text-center   font-bold md:pt-0  pt-10 text-[24px] text-slate-800 md:text-[35px]">
              Our Clients
            </div>
            <div className="font-thin text-center text-slate-700">
              We have been working with some 20 + Clients
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div>
            <div className="font-mono w-[400px] md:w-[700px] text-center mt-10 font-bold md:pt-0  pt-10 text-[24px] text-slate-800 md:text-[35px]">
              Manage your entire Finance Problems in Single System
            </div>
            <div className="font-thin text-center  text-slate-700">
              Who is nextcent suitable for?
            </div>
          </div>
        </div>
      </div>
    </div>

    //member ship section

     <div>
      <div className="md:grid  md:grid-cols-3 ">
        <div className=" flex m-4 text-slate-700 justify-center ">
          <div className="border flex p-4  bg-orange-100 rounded-lg shadow-md w-[300px]">
            <div>
              <div className="md:w-12  w-9 h-9  md:h-12">
                <div>
                  <BookDashed className="h-full w-full" />
                </div>
              </div>
              <div className="  font-bold font-mono text-[20px] md:text-[24px]">
                <span>Attractive Dashboard</span>
              </div>
              <div className="mt-2">
                <hr />
              </div>
              <div className="font-thin text-slate-600">
                An attractive dashboard combines clean design with intuitive
                functionality, offering users easy access to key data,
                interactive elements, and a visually engaging interface that
                enhances both user experience and productivity.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex m-4 text-purple-700 justify-center">
            <div className="border flex p-4 bg-emerald-100 rounded-lg shadow-md   w-[300px]">
              <div>
                <div className="md:w-12  w-9 h-9  md:h-12">
                  <div>
                    <ActivityIcon className="h-full   w-full" />
                  </div>
                </div>
                <div className="  font-bold font-mono text-[20px] md:text-[24px]">
                  <span>Income Section</span>
                </div>
                <div className="mt-2">
                  <hr />
                </div>
                <div className="font-thin text-slate-600">
                  An attractive Income section visually separates primary and
                  secondary income streams, making it easy to track and compare
                  earnings. The intuitive layout provides users with a clear
                  overview of their financial health at a glance.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex m-4 text-pink-700 justify-center">
            <div className="border flex   p-4 bg-yellow-100 rounded-lg shadow-md  w-[300px]">
              <div>
                <div className="md:w-12  w-9 h-9  md:h-12">
                  <div>
                    <RectangleEllipsisIcon className="h-full   w-full" />
                  </div>
                </div>
                <div className="  font-bold font-mono text-[20px] md:text-[24px]">
                  <span>Expendture Section</span>
                  <div className="mt-2 ">
                    <hr />
                  </div>
                </div>
                <div className="font-thin text-slate-600">
                  The Expenditure section visually categorizes spending, making
                  it easy to track and manage expenses. A summary that provide a
                  lot of information at the bottom offers a quick overview of
                  total expenditures for better budget control.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //local user section
          <div>
      <div className="p-10 mt-[100px] mb-[100px] bg-white-900 w-full ">
        <div className="p-3 bg-purple-100 w-full   rounded-xl shadow-gray-300 shadow-md md:rounded-3xl">
          <div className="  p-2 rounded-2xl border-[2px]  ">
            <div className="md:grid md:grid-cols-2 ">
              <div className="md:pt-14 pl-3 h-full  md:border-r-2 md:border-slate-700">
                <span className="font-mono text-slate-700  font-bold text-[30px] md:text-[42px]">
                  Our Moto Is To Make Your Wallet{" "}
                  <span className="text-purple-600">In One Sytem</span>
                </span>
              </div>
              <div className="md:border-none border-t-2  border-slate-600  md:pt-10 md:pl-3 h-full pb-3   ">
                <div className="grid grid-cols-2 ">
                  <div className="h-[100px] text-yellow-700 ">
                    <div className="flex items-center">
                      <div className="md:w-12 w-9 h-9  md:h-12">
                        <div>
                          <User className="h-full   w-full" />
                        </div>
                      </div>
                      <div className="font-mono  font-bold ml-7 w-[200px] md:p-0 p-2 text-[22px] md:ext-[25px]">
                        Around +300 Users
                      </div>
                    </div>
                  </div>
                  <div className="h-[100px]">
                    <div className="h-[100px] text-green-700 ">
                      <div className="flex items-center">
                        <div className="md:w-12 w-9 h-9  md:h-12">
                          <div>
                            <File className="h-full   w-full" />
                          </div>
                        </div>
                        <div className="font-mono font-bold ml-7 w-[200px] md:p-0 p-2 text-[22px] md:ext-[25px]">
                          User Friendly Dashboard
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="h-[100px]">
                    <div className="h-[100px] text-slate-700 ">
                      <div className="flex items-center">
                        <div className="md:w-12 w-9 h-9  md:h-12">
                          <div>
                            <InboxIcon className="h-full   w-full" />
                          </div>
                        </div>
                        <div className="font-mono font-bold ml-7 w-[200px] md:p-0 pt-6 text-[22px] md:ext-[25px]">
                          Income and Expe. Section
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[100px]">
                    <div className="h-[100px] text-slate-700 ">
                      <div className="flex items-center">
                        <div className="md:w-12 w-9 h-9  md:h-12">
                          <div>
                            <Settings2 className="h-full   w-full" />
                          </div>
                        </div>
                        <div className="font-mono font-bold ml-7 w-[200px] md:p-0m  pt-6 text-[22px] md:ext-[25px]">
                          Setting and F&Q Section
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //view section
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

    //footer section
    <div>
      {" "}
      <div className="   w-full h-[90vh] md:h-[40vh] bg-orange-400">
        <div className="md:grid md:grid-cols-2 p-10">
          <div className=" md:border-b-0 border-b-2 md:p-0  pb-10 md:pb-0 md:border-r-2 border-orange-800">
            <span className="font-mono font-bold text-[45px]  text-white ">
              Let's <span className="text-black">Crack</span> Something Together
            </span>
            <div className="text-white font-mono pr-5">
              Our <span className="text-black">Team is always ready</span> to
              help you. If you face any trouble plz free to contact us we are
              ready to help you{" "}
            </div>
          </div>
          <div className="pl-10">
            <div className="flex justify-center items-end h-[18vh]">
              <a href="https://app.formbricks.com/s/cm29wcjhw000anf2yqf7xxgz5">
                <div className="flex ">
                  <div className="pl-3 pr-3 pt-[6px] rounded-xl text-[18px] text-white bg-blue-500 font-mono font-bold ">
                    Submit Your Answer{" "}
                  </div>
                  <MousePointerClickIcon className=" w-[40px] h-[40px] text-white ml-[-10px]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Home;

`;
  return (
    <SyntaxHighlighter language="jsx" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};
export default V1;
