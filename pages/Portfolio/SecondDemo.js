import {useLayoutEffect} from 'react';
// import './SecondDemo.css';



export default function SecondDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div className='SecondDemo_'>
        
      <div className="TitleContainer">
        
        <h1> ParkerUp </h1>  

        <h2>I don’t contemplate ideas — I build them: ParkerUp is a fully self-architected, 
          production mobile platform built to eliminate wasted urban parking time at scale.
        </h2>

      </div>


        {/* //! 1 by 4 */}

        <div className="FirstClip">
          <video  autoPlay loop muted playsInline>
            <source src="/videos/FirstClip.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>

        <div className="SecondClip">

          <video autoPlay loop muted playsInline>
            <source src="/videos/SecondClip.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>


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

        <div className="ShortVideoDemo">

          <video  autoPlay loop muted playsInline>
            <source src="/videos/ShortVideoDemo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>

        </div>

        <div className='MVPPhotoContainer'>
          <img className='MVPPhoto' src="/images/MVPPhoto.jpg"/>
        </div>

    </div>
  );
}

{/* // Complete Website */}
