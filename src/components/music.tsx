import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
const MusicPlayer = () => {
  return (
    <div>
      <ReactPlayer
        url="" //https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        playing={true} // Set to true to start playing automatically
        controls={true} // Show player controls
        width="100%"
      />
    </div>
  );
};

export default MusicPlayer;
