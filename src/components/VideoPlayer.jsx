import React, { Component } from "react";

class VideoPlayer extends Component {
  componentDidMount() {
    // Load ivs script
    const script = document.createElement("script");
    script.src = "./ivs-script.js";
    script.async = true;
    script.type = "text/jsx";
    document.body.appendChild(script);

    // Show the video player, inital visibility set to hidden, once component
    // is loaded visibility is changed to visible
    document
      .getElementById("root")
      .getElementsByTagName("video")[0].style.visibility = "visible";
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js"
          ></video>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
