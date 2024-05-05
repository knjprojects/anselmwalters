"use client";
//import MusicPlayer from "@/components/music";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import homelink from "../../../public/assets/img/homelink2.png";
type Props = {};
const links = [{ name: "Bio" }, { name: "Videos" }, { name: "Contact" }];
import ViolinBackground from "@/components/ViolinBackground";
import ViolinButton from "@/components/ViolinButton";
import { useSidebarStore } from "@/utils/zustand/sidebar.store";
import Dropdown from "@/components/DropDown";
const Layout = ({ children }: any) => {
  let sidebar = useSidebarStore();
  const [sidebarval, setSidebarItem]: any = useState("Bio");
  // Define your getBackgroundImage function
  const getBackgroundImage = (sidebaritem: any) => {
    if (sidebaritem.name === sidebarval) {
      return "url(/assets/img/violinred.png)";
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
        <div className="flex md:hidden fixed top-5 right-1 z-20">
          <Dropdown />
        </div>
        <div className="flex md:flex-row pb-12 flex-col-reverse w-full h-screen bg-black">
          <div className="h-screen md:w-20 md:hover:w-64 w-full transition-all duration-300 ease-in-out justify-center flex">
            <div className="flex flex-row md:flex-col h-full w-full ">
              <Link href="/" className="md:pt-6">
                <Image
                  src={homelink}
                  alt="home"
                  height={200}
                  width={140}
                  className="animate-spin animate zoom-in"
                />
              </Link>
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
          {/*<MusicPlayer />*/}
        </div>
        <div className="fixed top-10 right-5 z-10 hidden md:flex">
          <Link href="/studio" className="bg-red-600 rounded-full text-center">
            <p className="p-1 sm:p-2 md:p-3 lg:p-4 text-white"> DashBoard</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
