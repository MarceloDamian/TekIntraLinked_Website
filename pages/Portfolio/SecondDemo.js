// Import useLayoutEffect to manage scroll and BottomFooter component
import React, {useLayoutEffect} from 'react';
import BottomFooter from "../../src/components/BottomFooter";

import techData from '../../src/components/techData';
import TechIcon from '../../src/components/TechIcon';

import SmallTechIcons from '../../src/components/SmallTechIcons';
import { demoTechs } from '../../src/components/techConfig';

// SecondDemo page showcases the ParkerUp mobile platform
export default function SecondDemo() {
  // Scroll to top when component mounts
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  const desiredOrder = ["DART","BASH"];

  const orderedTechs = desiredOrder.map(label => techData.find(tech => tech.label === label)
  ).filter(Boolean); // filter out any undefined if label not found

  return (
    <>
    <div className='SecondDemo_'>
      {/* Title and subtitle describing ParkerUp */}
      <div className="TitleContainer">
        <h1> ParkerUp </h1>  
        <h2>I don’t contemplate ideas — I build them: ParkerUp is a fully self-architected, 
          production mobile platform built to eliminate wasted urban parking time at scale.
        </h2>
      </div>

      {/* Two demo clips showcasing app functionality */}
      <div className="VideoContainer">

          <div className="FirstClip">
            <video  autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
              <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/FirstClip.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>

            <div className="SecondClip">
              <video autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
                <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/SecondClip.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>

        <div className="dark-overlay">
          <a 
            href="https://github.com/MarceloDamian/TekIntraLinked_Website"
          >                
            <div className="terminal-typing">
              VIEW CODE
            </div>  
          </a>     
        </div>
      </div>

      {/* MVP image showcasing app prototype */}

      <div className="MVPWithIcons">
        
        <div className='MVPPhotoContainer'>
          
          <img className='MVPPhoto' src="/images/MVPPhoto.jpg"/>

          <div className="dark-overlay">
            <a 
              href="https://github.com/MarceloDamian/ParkerUp"
            >                
                <div className="terminal-typing">
                  VIEW CODE
                </div>  
              </a>  
          </div>

        </div>

        <SmallTechIcons labels={demoTechs["SecondDemo"] || []} 
          path_={'/Portfolio/SecondDemo'}
          size={60} 
        />

      </div>

      {/* Description of role and system design approach */}
      <div className='DemoText'>
        <h4>Role: Founder and Full-Stack Engineer</h4>
        <br/>
        <h5> 
          ParkerUp is a production-deployed iOS and Android application 
          that reduces time-to-parking by modeling real-world constraints 
          through structured mathematical logic and delivering those 
          outputs through a deliberately simple, user-first interface. 
          I built the entire system end-to-end. No prior Dart. No prior 
          Flutter. No mobile background. I prioritize shipping real 
          software that solves real problems. I identified the problem, 
          the market, learned the stack, designed the UX, architected the 
          system, and are currently shipping it into production. I took 
          the ownership of the risk. Every layer — frontend, backend, 
          infrastructure, authentication, deployment — was designed and 
          executed by me.
          ParkerUp was built with expansion in mind. 
          The separation between computation, data modeling, and interface 
          layers allows: Integration of predictive modeling using historical 
          parking behavior, Geographic scaling across multiple urban markets, 
          and Enhanced constraint modeling (zoning, timing, availability density).
        </h5> 
      </div>
    </div>
        
    <BottomFooter/>
    </>
  );
}
