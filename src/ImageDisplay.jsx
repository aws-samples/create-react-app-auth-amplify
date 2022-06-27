import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import OpernerIcon from "./media/opener-icon.svg";
export default function ImageDisplay() {
  return (
    <div className="home-header position-relative">
      <div className="text-center pt-5 pt-xs-7 pt-sm-9 header">
        <img alt="" src={OpernerIcon} />
        <p className="font-weight-light pt-3">Start building your packaging</p>
        <h3
          style={{ color: "#35b3a8" }}
          className="text-duncan-cyan select-box-text"
        >
          Select box style
        </h3>
        <ArrowDownwardIcon sx={{ color: "#35b3a8", fontSize: "50px" }} />
      </div>
    </div>
  );
}
