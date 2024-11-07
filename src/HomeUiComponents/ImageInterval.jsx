import React, { useState, useEffect } from "react";

function ImageCarousel() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 2000); // 2000 ms for 2-second delay

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative ">
      {/* First Image */}
      <img
        src="/imageWall/InvIdeasPatternLeft.png"
        alt="First"
        className={`absolute w-auto h-auto inset-0  transition-opacity duration-1000 ${
          showFirstImage ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Second Image */}
      <img
        src="/imageWall/InvIdeasPatternRight.png"
        alt="Second"
        className={`absolute w-auto h-auto inset-0   transition-opacity duration-1000 ${
          showFirstImage ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

export default ImageCarousel;
