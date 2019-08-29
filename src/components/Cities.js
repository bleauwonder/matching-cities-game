import React from "react";
// import "./Card.css";

const Cities = props => (
  <div className="cities" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Cities;