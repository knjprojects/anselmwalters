"use client";
import React, { useState, useEffect } from "react";
import VidCard from "./VidCard";
import anselmThumb from "../../public/assets/img/youtube/anselm.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; //save dev types fixed this error
type Props = {};

const Videows = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  const vids = [
    {
      image: anselmThumb,
      title:
        "Trinidadian Caribbean Rasta Anselm Walters Violinist - Rehe Na Rehe Hum. Eid Mubarak.",
      link: "https://www.youtube.com/watch?v=DvziSdh8RhU",
      about:
        'Trinidadian Rasta back at it again, playing the Indian film love song "Rehe Na Rehe Hum" originally sung by "Lata Mangeshkar"',
    },
  ];
  return (
    <section className="h-screen snap-center w-full">
      <div className="flex flex-col items-center">
        <div
          className="animate zoom-in"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <h1 className="text-white text-center justify-center pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14">
            Videos
          </h1>
          <div className="flex grid-cols grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-full">
            {vids.map((vid: any) => (
              <VidCard
                key={vid.link}
                title={vid.title}
                link={vid.link}
                about={vid.about}
                image={vid.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videows;
