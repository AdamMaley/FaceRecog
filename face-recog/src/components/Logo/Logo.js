import React from "react";
import Tilt from "react-tilt";
import "../Logo/Logo.css";

//images
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
            <img src={logo} alt="Adam Maley Logo"/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
