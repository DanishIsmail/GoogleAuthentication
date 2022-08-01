import React from "react";

const Card = (props) => {
  return (
    <div>
      <p hidden={true}>{props.googleId}</p>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <img src={props.imageUrl} />
    </div>
  );
};

export default Card;
