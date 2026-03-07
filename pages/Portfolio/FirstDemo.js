// Import useLayoutEffect to manage scroll and BottomFooter component
import React,{useLayoutEffect} from 'react';
import BottomFooter from '../../src/components/BottomFooter';
import Link from "next/link";


import techData from '../../src/components/techData';
import TechIcon from '../../src/components/TechIcon';

import SmallTechIcons from '../../src/components/SmallTechIcons';
import { demoTechs } from '../../src/components/techConfig';

import { FaSquareGithub } from "react-icons/fa6";




// FirstDemo page showcases the Tekintralinked website and its purpose
export default function FirstDemo() {
  // Scroll to top on mount for improved UX
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  return (
    <>
      <div className="FirstDemo_">
        {/* Title and mission statement */}
        <div className="Title-Container">
          <h1>TEKINTRALINKED </h1>
          <h2>
            When traditional hiring didn’t work, I built my own company to prove
            that I could.
          </h2>
        </div>

        {/* Mobile demo video of the website */}
        <div className="MobileDemoVideo">
          <video autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
            <source
              src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/MobileWebsiteDemo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
            <div className="dark-overlay">
              <a 
                href="https://github.com/MarceloDamian/TekIntraLinked_Website"
              >
                <div class="terminal-typing">
                  VIEW CODE
                </div>  
              </a>  
            </div> 

        </div>

        <div className="Video-with-icons">
          {/* Desktop demo video of the website */}
          <div className="BottomDemoVideo">
            <video autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
              <source
                src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/DesktopWebsiteDemo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            
            <div className="dark-overlay">
              <a 
                href="https://github.com/MarceloDamian/TekIntraLinked_Website"
              >                
                <div class="terminal-typing">
                  VIEW CODE
                </div>  
              </a>  
            </div> 

          </div>

          <SmallTechIcons
            labels={demoTechs["FirstDemo"] || []}
            path_={"/Portfolio/FirstDemo"}
            size={60}
          />
        </div>

        {/* Narrative explaining goals and architecture */}
        <div className="FirstDemoText">


          <br />
          <h4>Role: Lead Software Engineer</h4>
          <br />
          <h5>
            Tekintralinked functions as both a holding company for future
            projects and a portfolio of engineered projects. Ability is not
            discussed it's shown. I developed this company website to transform
            a no from recuiters into proof of capability. Hiring pipelines often
            filter out capable engineers before they ever see real work. I
            didn't wait for permission. I took action and I built. I designed a
            scalable platform and deployed it on cloud infrastructure and used
            it as a living, evolving proof of skill. New Projects will live
            under the same infrastructure this architecture supports expansion
            without rewrites.
          </h5>
        </div>
      </div>

      <BottomFooter />
    </>
  );
}

// Note: Future enhancement could include a CTA to view source code
