import { File, InboxIcon, Settings2, User } from "lucide-react";
import React from "react";

const LocalUser = () => {
  return (
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
  );
};

export default LocalUser;
