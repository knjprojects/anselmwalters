"use client";
import MusicPlayer from "@/components/music";
import React, { useState } from "react";

type Props = {};
const links = [{ name: "Bio" }, { name: "Videos" }, { name: "Contact" }];
import ViolinBackground from "@/components/ViolinBackground";
import ViolinButton from "@/components/ViolinButton";
import { useSidebarStore } from "@/utils/zustand/sidebar.store";
const Layout = ({ children }: any) => {
  let sidebar = useSidebarStore();
  const [sidebarval, setSidebarItem]: any = useState("Bio");
  // Define your getBackgroundImage function
  const getBackgroundImage = (sidebaritem: any) => {
    if (sidebaritem.name === sidebarval) {
      return "url(/assets/img/violin.png)";
    } else return "url(/assets/img/violinblack.png)";

    // Add more conditions as needed
  };
  const setSidebar = (val: string) => {
    setSidebarItem(val);
    sidebar.changeSide(val);
  };

  return (
    <div>
      <div className="w-full items-stretch z-10">
        <div className="flex md:flex-row pb-12 flex-col-reverse w-full h-screen bg-black">
          <div className="h-screen md:w-12 md:hover:w-64 w-full transition-all duration-300 ease-in-out justify-center flex">
            <div className="flex flex-row md:flex-col h-full w-full ">
              {links.map((sidebaritem: any) => (
                <ViolinBackground
                  key={sidebaritem.name}
                  backgroundImage={getBackgroundImage(sidebaritem)}
                >
                  <div className="flex justify-center items-center h-full">
                    {/*the arrow function for the onClick helps prevent infinite loops by constantly sending oNcLICK */}
                    <ViolinButton onClick={() => setSidebar(sidebaritem.name)}>
                      {sidebaritem.name}
                    </ViolinButton>
                  </div>
                </ViolinBackground>
              ))}
            </div>
          </div>

          {children}
        </div>

        <div className="fixed top-10 right-10 z-10 hidden md:flex">
          <MusicPlayer />
        </div>
        <div className="fixed top-10 right-5 z-10 hidden md:flex">
          <button className="bg-red-600 rounded-full text-center">
            <p className="p-1 sm:p-2 md:p-3 lg:p-4 text-white"> DashBoard</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
