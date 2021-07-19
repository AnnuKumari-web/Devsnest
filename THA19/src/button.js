import React, { useState } from "react";

const Button = () => {
  let [value, setValue] = useState(0);
  let handleClick = () => {
    setValue((prevCount) => {
      return prevCount + 1;
    });
  };
  return (
    <span>
      <button onClick={handleClick}>{value}</button>
    </span>
  );
};

export default Button;
