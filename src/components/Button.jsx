import React from "react";

const Button = (props) => {
  return (
    <>
      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">{props.content}</a>
    </>
  )
};

export default Button;