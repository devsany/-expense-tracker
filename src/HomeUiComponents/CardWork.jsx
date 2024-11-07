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
