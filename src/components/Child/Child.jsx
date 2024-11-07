import React from "react";
import SubChild from "./SubChild";

const Child = ({ values }) => {
  console.log(values);
  return (
    <div>
      <div>
        {" "}
        <div>📁{values.name}</div>{" "}
      </div>
      <div>
        {values.children.map((item, index) => {
          return (
            <>
              <SubChild values={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Child;
