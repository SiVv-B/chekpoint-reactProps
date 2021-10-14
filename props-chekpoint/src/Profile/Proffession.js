/** @format */

import React from "react";
import propTypes from "prop-types";

function Proffession(props) {
  return (
    <div>
      <h3>I work as a {props.myJob}</h3>
    </div>
  );
}

export default Proffession;

Proffession.protoTypes = {
  myJob: propTypes.string,
};
