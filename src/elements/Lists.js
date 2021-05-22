import React from "react";
import propTypes from "prop-types";

function Lists(props) {
  const className = ["list-reset"];
  if (props.isSmall) className.push("text-xs");
  className.push(props.className);
  //   className.join(" ");

  console.log("Hello world list");

  return (
    <ul className={className.join(" ")}>
      {props.data.map((list, index) => {
        return (
          <li className={list.isChecked ? "is-checked" : ""} key={index}>
            {list.content}
            {console.log(list.isChecked)}
          </li>
        );
      })}
    </ul>
  );
}

Lists.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
  isSmall: propTypes.bool,
};

export default Lists;
