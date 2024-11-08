import { MousePointerClickIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
