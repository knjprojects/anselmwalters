import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ link }: any) => {
  const extractYouTubeId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : "";
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="animate zoom-in-75">
      {" "}
      <YouTube videoId={extractYouTubeId(link)} opts={opts} />;
    </div>
  );
};

export default YouTubePlayer;
