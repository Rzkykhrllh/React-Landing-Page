import React from "react";
import propTypes from "prop-types";

function Button(props) {
  const className = ["button"];

  if (props.isPrimary) className.push("button-primary");
  if (props.isWideMobile) className.push("button-wide-mobile");
  if (props.isSmall) className.push("button-sm");
  if (props.isWide) className.push("button-block");

  console.log(props);

  return <button className={className.join(" ")}>{props.children}</button>;
}

Button.propTypes = {
  isPrimary: propTypes.bool,
  isWideMobile: propTypes.bool,
  isSmall: propTypes.bool,
  isWide: propTypes.bool,
};

export default Button;
