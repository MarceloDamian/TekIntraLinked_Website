


// Import useLayoutEffect to scroll to top on mount and BottomFooter component
import React,{useLayoutEffect} from 'react';
import BottomFooter from "../../src/components/BottomFooter";

import techData from '../../src/components/techData';
import TechIcon from '../../src/components/TechIcon';

import SmallTechIcons from '../../src/components/SmallTechIcons';
import { demoTechs } from '../../src/components/techConfig';

// ThirdDemo page showcases a neural network image classification project
export default function ThirdDemo() 
{
  // Scroll to top when component mounts
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  const desiredOrder = ["PYTHON","BASH"];

  const orderedTechs = desiredOrder.map(label => techData.find(tech => tech.label === label)
  ).filter(Boolean); // filter out any undefined if label not found

  return (
    <>
    <div className = "ThirdDemo_">
      {/* Title and subtitle describing project scope and approach */}
      <div className='Title_Container'>
        <h1> Neural Network Image Classification </h1>
        <h2> I engineer ML systems at the mathematical level — abstraction is optional, understanding isn’t.</h2>
      </div>

      {/* Demo clip from Weights & Biases (WANDB) showcasing training/metrics */}
      <div className='WANDB'>
        <video autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
          <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/WANDB.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="dark-overlay">
          <a 
            href="https://github.com/MarceloDamian/MLNeuralNetwork"
          >                
            <div className="terminal-typing">
              VIEW CODE
            </div>  
          </a>     
        </div>

      </div>


      <div className="NNwithTechIcons">
        {/* Running network demo clip */}
        <div className='RunningNeuralNet'>
          
          <video autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
            <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/RunningNeuralNet.mp4" type="video/mp4" />            Your browser does not support the video tag.
          </video>

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

        <SmallTechIcons labels={demoTechs["ThirdDemo"] || []} path_={'/Portfolio/ThirdDemo'} size={60} />

      </div>


      {/* Descriptive text about role and project objectives */}
      <div className="Demo_Text">
        <h4> Role: Machine Learning Engineer </h4>
        <br/>
        <h5> 
          A production-grade neural network built entirely from scratch to master 
          the mechanics of machine learning — not abstract them away.
          No frameworks. No shortcuts. I had full control over the math, the 
          gradients, and the optimization pipeline.
        </h5> 
        <br/>
        <h5> 
          This project was engineered to demonstrate deep mechanical 
          understanding of neural network training dynamics, numerical 
          stability, and optimization strategy. The architecture supports
          configurable multi-layer depth through a clean object-oriented 
          interface, enabling controlled experimentation with 
          initialization strategies, activation functions, and learning 
          dynamics. The result is a lean, extensible ML system that 
          reflects how I operate as an engineer: deconstruct complex 
          abstractions, rebuild them under direct control, validate 
          correctness end-to-end, and ship software that proves 
          competence through execution.
        </h5> 
      </div>

    </div>
      <BottomFooter/>
    </>
  );
}
