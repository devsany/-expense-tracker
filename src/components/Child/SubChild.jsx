import React from "react";
import Child from "./Child";

const SubChild = ({ values }) => {
  return (
    <div>
      <div className="ml-2">{values.name}</div>
      <div className="ml-2">
        {values.type === "folder" ? <Child values={values} /> : null}
      </div>
    </div>
  );
};

export default SubChild;
