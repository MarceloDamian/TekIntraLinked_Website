// Import useLayoutEffect to scroll to top on mount and BottomFooter component
import {useLayoutEffect} from 'react';
import BottomFooter from "../../src/components/BottomFooter";

// ThirdDemo page showcases a neural network image classification project
export default function ThirdDemo() {
  // Scroll to top when component mounts
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
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
        <video autoPlay loop muted playsInline>
          <source src="/videos/WANDB.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
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

      {/* Running network demo clip */}
      <div className='RunningNeuralNet'>
        <video autoPlay loop muted playsInline>
          <source src="/videos/RunningNeuralNet.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>

    </div>
      <BottomFooter/>
    </>
  );
}
