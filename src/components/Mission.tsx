"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
type Props = {};
import "aos/dist/aos.css";
const Mission = (props: Props) => {
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
    <div data-aos="fade-up" data-aos-delay={600}>
      <h1 className="text-white ">Bio</h1>
      <p className="font-chopin text-white">
        Anselm Walters, introduced to the violin at an early age of 6, by none
        other than his father so by so Walters, furythered his studies at the
        Julian School of Music and tutored under Ms. So by so. He has dabbled in
        many genres of music that is a direct expression of his music tastes,
        which incudes Indie Film Songs, Romantic music, Classical, and
        Contemporary Music.
      </p>
    </div>
  );
};

export default Mission;
