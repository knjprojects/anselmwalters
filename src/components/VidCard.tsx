import React from "react";
import YouTubePlayer from "./YoutubePlayer";

type Props = {};

const VidCard = ({
  title,
  about,
  image,
  link,
}: {
  title: string;
  about: string;
  image: string;
  link: string;
}) => {
  return (
    //p-3 md:p-4 lg:p-6 xl:p-8
    <div className="flex flex-col items-center w-32 md:w-36 lg:w-46 ">
      <div className=""></div>
      <div className="flex rounded-full">
        <div className="text-center p-10 md:p-16 lg:p-24">
          <h1 className="text-center font-chopin text-white sm:text-xl md:text-2xl lg:text-4xl">
            {title}
          </h1>
          <YouTubePlayer link={link} />
          <p className="p-2 text-center justify-center"></p>
        </div>
      </div>
    </div>
  );
};

export default VidCard;
