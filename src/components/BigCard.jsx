import React from "react";

const BigCard = (props) => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">{props.title}</h5>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default BigCard;
