import React from "react";
import "./style.css";

 const Title = props => (
  <div className = "main-container">
    <nav className = "navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className = "text-muted">Current Score: {props.currentScore} | Top Score: {props.topScore}</h5>
    </nav>
  </div>
 )

export default Title;
