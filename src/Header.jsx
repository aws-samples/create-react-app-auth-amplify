import React from "react";
import Fab from "@mui/material/Fab";
//import SendIcon from "@mui/icons-material/Send";
import DesignLogo from "./media/design_logo.png";

///import ChangingProgressProvider from "./ChangingProgressProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 60;
function Header() {
  return (
    <div className="navbar-inner">
      <div className="navbar lower-nav navbar-expand">
        <div className="container-fluid" style={{ float: "left" }}>
          <a className="navbar-brand pl-3" href="https://duncanprint.co.uk">
            <img className="header-logo" src={DesignLogo} alt="Logo" />
          </a>
        </div>
        <div
          className="nav-top-right d-flex justify-content-end pt-3"
          style={{ float: "right" }}
        >
          <p className="nice">Nice!</p>
          <div className="d-none d-xl-block" style={{ maxWidth: "70px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: "#17ad95",
                textcolor: "#17ad95",
                textSize: "28px",
                pathTransition:
                  percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
              })}
            />
          </div>
          <div className="p-3 d-none d-xl-block">
            <Fab variant="extended" color="primary" aria-label="add">
              Contact Us
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
