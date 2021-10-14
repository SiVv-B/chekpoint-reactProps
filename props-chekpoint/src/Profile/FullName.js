/** @format */

import React from "react";
import propTypes from "prop-types";

function FullName(props) {
  return (
    <>
      <h1>{props.myFullName}</h1>
    </>
  );
}
export default FullName;

FullName.propTypes = {
  myFullName: propTypes.string,
};
