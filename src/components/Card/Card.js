import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
    {/* <div className="card" onClick={() => props.shuffleCards}> */}
      <div className="img-container">
        <img alt={props.name} src={require("../../images/" + props.image)} />
      </div>
    </div>
  );

export default Card;
