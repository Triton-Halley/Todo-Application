import React from "react";

import "./Container.css";

const Container = function (props) {
  return <div className="container">{props.children}</div>;
};

export default Container;
