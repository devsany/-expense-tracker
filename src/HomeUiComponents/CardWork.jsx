import React from "react";

const CardWork = (props) => {
  return (
    <div>
      <div className="bg-white">
        <div>
          <img src={props.img} alt={props.header} />
        </div>
        <div>{props.header}</div>
        <div>{props.content}</div>
      </div>
    </div>
  );
};

export default CardWork;

const data1 = [
  {
    uniqueId: "asdf",
    message: "hii my name is sunny",
  },
  {
    uniqueId: "jkl;",
    message: "hii my name is vandana",
  }
];
