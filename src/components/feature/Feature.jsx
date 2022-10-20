import React from "react";
import "./feature.css";

const Feature = (props) => (
  <div className="feature_container_feature">
    <div className="feature_container_title">
      <div />
      <h1>{props.title}</h1>
    </div>
    <div className="feature_container_text">
      <p>{props.text}</p>
    </div>
  </div>
);

export default Feature;
