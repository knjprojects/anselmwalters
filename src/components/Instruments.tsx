"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import violin from "../../public/assets/img/instruments/violin.png";
import soundboard from "../../public/assets/img/instruments/sound.png";
import speaker from "../../public/assets/img/instruments/speaker.png";
type Props = {};
import AOS from "aos";
import "aos/dist/aos.css"; //save dev types fixed this error
const Instruments = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-row ">
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <Image src={soundboard} alt="soundbaord" width={200} height={120} />
      </div>
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <Image src={violin} alt="violin" width={200} height={120} />
      </div>
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <Image src={speaker} alt="speaker" width={200} height={120} />
      </div>
    </div>
  );
};

export default Instruments;
