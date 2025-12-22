// import React from "react";

import { FaPython, FaHtml5, FaSwift, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { SiDart } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

import techData from "./techData";

import TechIcon from "./TechIcon"; // techstack.css is in TechIcon

// Move cards to Portfolio file. Home and Portfolio have to be different.
// Each card should inevitably link to another page with a code or demo.
// Each demo should work by itself.

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Tech = () => {
  // TODO: Add a carousel for the icons
  // TODO: Carousel use Swiperjs.com
  // TODO: Fix the footer
  // TODO: Enhance the portfolio website and add text
  // TODO: Adjust the layout and possibly change the video
  // TODO: Complete V1 of the website

  return (
    <>
      <div className="tech">
        <h1> TECHSTACK:</h1>
        {/* Section heading */}
        {/* Seperate these Portfolio based on skill // Web dev // AI machine learning // Mobile app (Full Stack) */}
        <Swiper
          slidesOffsetBefore={15}
          slidesPerView={1}
          spaceBetween={-30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          // virtual={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {techData.map((tech, index) => (
            <SwiperSlide key={index}>
              <TechIcon
                key={index}
                icon={tech.icon}
                label={tech.label}
                path={tech.path}
                text=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Tech;
