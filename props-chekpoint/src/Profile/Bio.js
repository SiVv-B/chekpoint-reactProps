/** @format */

import React from "react";
import propTypes from "prop-types";

function Bio(props) {
  return (
    <>
      <p>{props.myBio}</p>
    </>
  );
}
export default Bio;
Bio.propTypes = {
  myBio: propTypes.string,
};
