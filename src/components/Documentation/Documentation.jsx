import React, { useState } from "react";
import Footer from "../../HomeUiComponents/Footer";
import Documentation1 from "./Documentation1";
import Documentation2 from "./Documentation2";
import Home1 from "../CodingAreaSection.jsx/CodingHomeSection/Home1";

const Documentation = () => {
  const [imageLink, setImageLink] = useState("");
  return (
    <div>
      <div className="bg-orange-100 h-screen">
        <div className="md:grid md:grid-cols-2">
          <div>
            <Documentation1 />
          </div>
          <div>
            <Documentation2 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Documentation);
