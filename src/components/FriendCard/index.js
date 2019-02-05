import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={() => props.handleIncrement(props.friends)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
