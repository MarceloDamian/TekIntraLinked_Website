// Import useLayoutEffect to manage scroll and BottomFooter component
import {useLayoutEffect} from 'react';
import BottomFooter from '../../src/components/BottomFooter';

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
        <h1>Tekintralinked</h1>
        <h2>
          When traditional hiring didn’t work, I built my own company to prove
          that I could.
        </h2>
      </div>  

      {/* Mobile demo video of the website */}
      <div className="MobileDemoVideo">
        <video autoPlay loop muted playsInline>
          <source src="/videos/MobileWebsiteDemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Desktop demo video of the website */}
      <div className="BottomDemoVideo">
        <video autoPlay loop muted playsInline>
          <source src="/videos/DesktopWebsiteDemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Narrative explaining goals and architecture */}
      <div className="FirstDemoText">
        <br/>
        <h4>Role: Lead Software Engineer</h4>
        <br/>
        <h5>
          To put it plainly Tekintralinked functions as both a holding company 
          for future projects and a portfolio of engineered projects. Ability 
          is not discussed it's shown. I developed this company website to transform
          a no from recuiters into proof of capability. Hiring pipelines often filter 
          out capable engineers before they ever see real work. I didn't wait for 
          permission. I took action and I built. I designed a scalable platform and 
          deployed it on cloud infrastructure and used it as a living, evolving proof of skill.
          New Projects will live under the same infrastructure this architecture supports 
          expansion without rewrites.
        </h5>
      </div>
    </div>
    
    <BottomFooter/>

    </>
  );
}

// Note: Future enhancement could include a CTA to view source code
