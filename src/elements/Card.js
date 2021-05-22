import React from "react";

import propTypes from "prop-types";

function Card(props) {
  const className = ["tiles-item"];
  className.push(props.className);
  className.join(" ");

  console.log("hello world from card");
  return (
    <div className="tiles-item">
      <div
        className={`tiles-item-inner ${props.hasShadow} ? "has-shadow" : ""`}
      >
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  hasShadow: propTypes.bool,
  className: propTypes.string,
};

export default Card;
