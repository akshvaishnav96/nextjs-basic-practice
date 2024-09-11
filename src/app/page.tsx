import Image from "next/image";
import dynamic from "next/dynamic";
// import ShowMsg from "@/components/ShowMsg";
const ShowMsg = dynamic(() => import('@/components/ShowMsg'),{ssr:false});
import React from "react";
import Heading from "@/components/user/Heading";
import Navbar from "@/components/user/Navbar";

import HeroSection from "@/components/user/homePage/HeroSection";
import NewLaunch from "@/components/user/homePage/NewLunch";
import SwiperComp from "@/components/user/SwiperComp";
import Featureproperty from "@/components/user/homePage/FeatureProperty";
import ExploreHolidayItems from "@/components/user/homePage/ExploreHolidayItems";
import ExploreYourHoliday from "@/components/user/homePage/ExploreYourHoliday";
import VideoSection from "@/components/user/homePage/videoSection";
import WhyBrikitt from "@/components/user/homePage/WhyBrikitt";
import Testamonial1 from "@/components/user/homePage/Testamonial1";
import Testamonial2 from "@/components/user/homePage/Testamonial2";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import UserLoginProvider from "@/components/Providers/UserLoginProvider";
import { cookies } from "next/headers";




export default function Home() {
 
  return (
    <>


        <ShowMsg />
      <Navbar />
      {/* hero section */}
      <HeroSection />
      {/* new launch section */}
      <NewLaunch>
        <Heading text="first main heading" />
      </NewLaunch>
      {/* feature property section */}

      <Featureproperty>
        <SwiperComp sliderPerView={3} spaceBetween={30} />
      </Featureproperty>

      {/* EXPLORE YOUR HOLIDAY HOME WITH BRIK itt */}

      <ExploreYourHoliday>
        <ExploreHolidayItems />
      </ExploreYourHoliday>

      {/* video section */}

      <VideoSection />

      {/* why brik itt */}
      <WhyBrikitt />

      {/* testamonials */}

      <Testamonial1 />

      {/* testamonial 2 */}
      <Testamonial2 />
      </>
  );
}
