"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import anselm from "../../../public/assets/img/anselm.gif";
import { useSidebarStore } from "@/utils/zustand/sidebar.store";
import Videows from "@/components/Videows";
import Contact from "@/components/Contact";

type Props = {};

const showCase = [
  { name: "Evergreen", yt: "", fb: "", insta: "", threads: "" },
];
import AOS from "aos";
import "aos/dist/aos.css"; //save dev types fixed this error
import Mission from "@/components/Mission";
import Instruments from "@/components/Instruments";
const Anselm = () => {
  let sidebar = useSidebarStore();
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
    <div className="w-full h-screen flex">
      <main className="dark:bg-gray-800 bg-black bg-cover bg-no-repeat bg-scroll overflow-y-auto  snap-mandatory w-full snap-y transition duration-300 scroll-m-4 select-none ">
        {sidebar.side == "Bio" ? (
          <div>
            <section className="snap-center h-screen justify-center">
              <div
                className="flex flex-col items-center justify-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="items-center flex flex-col bg-black w-120 h-100 rounded-full justify-center mt-24 sm:mt-28 md:mt-32 lg:mt-48 xl:mt-56 flex-grow">
                  <h1 className="dark:text-slate-100 text-red-500 font-chopin font-extrabold text-4xl">{`Anselm Walters Violinist `}</h1>
                  <Image
                    src={anselm}
                    alt="anslem"
                    width={400}
                    height={340}
                    unoptimized
                    className="ml-4 justify-center animate zoom-in"
                  />
                </div>

                {/*https://flowbite.com/docs/plugins/datepicker/<input type="datetime-local" className="form-input"></input> */}
              </div>
            </section>
            <section className="h-screen snap-center">
              <div className="flex flex-col items-center justify-center ">
                <div className="my-12 p-6 md:p-12 lg:p-20 flex flex-col items-center justify-center ">
                  <Mission />
                </div>
              </div>
            </section>
            <section className="h-screen snap-center">
              <div className="p-4 md:p-6 lg:p-10">
                <Instruments />
              </div>
            </section>
          </div>
        ) : (
          <></>
        )}
        {sidebar.side == "Videos" ? <Videows /> : <></>}
        {sidebar.side == "Contact" ? <Contact /> : <></>}
      </main>
    </div>
  );
};

export default Anselm;
