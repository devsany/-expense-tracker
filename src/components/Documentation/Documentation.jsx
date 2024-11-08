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
        <Home1 />
        <Documentation1 />
        <Documentation2 />
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
