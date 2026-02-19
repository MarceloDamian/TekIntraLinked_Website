


import {useLayoutEffect} from 'react';


export default function FirstDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (

    <div className="FirstDemo_">

        <div className="Title-Container">
          <h1>Tekintralinked</h1>
          <h2>
            When traditional hiring didn’t work, I built my own company to prove
            that I could.
          </h2>
          
        </div>  

        <div className="MobileDemoVideo">
          <video autoPlay loop muted playsInline>
            <source src="/videos/MobileWebsiteDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="BottomDemoVideo">
          {/* //! Added the bottom video */}
          <video autoPlay loop muted playsInline>
            <source src="/videos/DesktopWebsiteDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

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

  );
}

// Complete Website
// {/* A big textbox that deploys the project or 
//   website and then a botton on the top left to view 
//   the code in black and green */}