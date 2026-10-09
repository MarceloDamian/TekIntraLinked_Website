// Import icons used in tech stack (some may be used within techData)
import { FaPython, FaHtml5, FaSwift, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { SiDart } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

// Import tech data and TechIcon component
import techData from "./techData";
import TechIcon from "./TechIcon"; // Styles for tech cards are defined in TechIcon-related CSS

// Import React and Swiper components/modules
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// A11y is what gives the nav arrows and pagination bullets a role, tabindex and
// accessible name. Without it they render as bare divs that no keyboard or
// screen reader user can operate.
import { A11y, Autoplay, Pagination, Navigation } from "swiper/modules";

// Tech component renders a carousel of technology icons using Swiper
const Tech = () => {
  // TODO: Enhance the portfolio with more descriptive text and improved layout

  return (
    <>
      <div className="tech">
        {/* h2: "TECHSTACK" is a section, not the page's top-level heading. */}
        <h2> TECHSTACK:</h2>
        {/* Carousel of tech icons configured with responsive breakpoints and autoplay */}
        <Swiper
          slidesOffsetBefore={15}
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            // Stop the carousel once someone interacts, and pause on hover or
            // keyboard focus, so motion is not unstoppable (WCAG 2.2.2).
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          a11y={{
            enabled: true,
            prevSlideMessage: 'Previous technology',
            nextSlideMessage: 'Next technology',
            paginationBulletMessage: 'Go to technology {{index}}',
          }}
          modules={[A11y, Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0:
            {
              slidesPerView: 2,
              spaceBetween:-10,
            },
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
