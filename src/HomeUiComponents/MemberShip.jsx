import {
  ActivityIcon,
  BookDashed,
  Group,
  InfoIcon,
  RectangleEllipsisIcon,
} from "lucide-react";
import React from "react";

const MemberShip = () => {
  return (
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
  );
};

export default MemberShip;
