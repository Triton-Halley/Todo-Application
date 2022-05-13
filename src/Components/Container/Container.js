import React from "react";

import "./Container.css";

const Container = function (props) {
  return <main className="container">{props.children}</main>;
};

export default Container;
