import React, { useState } from "react";

const Card = ({ setState, state, food }) => {
  let handleClick = () => {
    let newState = state.filter((el) => el.id !== food.id);
    setState(newState);
  };
  return (
    <div className="card">
      <img src={food.img} alt="Thumbnail" />
      <div className="title">{food.title || "Title"}</div>
      <div>You will get {food.calorie} cals.</div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Card;
