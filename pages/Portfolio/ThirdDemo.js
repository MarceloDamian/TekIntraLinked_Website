import {useLayoutEffect} from 'react';
// import "./ThirdDemo.css";




export default function ThirdDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div className = "ThirdDemo_">
      {/* A demo Button that links it to the github repository for easier access*/}

      {/* //! Have a one-liner and revise. 
      // the ability to understand, implement, and control machine learning systems at the mathematical level.
      // Frameworks can be adopted at any time. Mechanical understanding cannot be outsourced.
      */}

      <div className='Title_Container'>
        <h1> Neural Network Image Classification </h1>
        <h2> I engineer ML systems at the mathematical level — abstraction is optional, understanding isn’t.</h2>
      </div>


      <div className="TrainingSetContainer">
        <img className="TrainingSet" src="/images/TrainingSet.png" />
      </div>






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

        {/* <h2>Tech Insights:</h2>

        <h5> 
          Chosen to eliminate abstraction layers and enforce full visibility into matrix 
          operations, gradient flow, and optimization mechanics. This visibility ensured mechanical 
          understanding and eliminated reliance on automatic differentiation or framework magic.
          
          Custom Forward & Backward Propagation Pipeline
          This provided deterministic control over gradient flow and enabled precise debugging of vanishing/exploding gradients.
          
          He Initialization Tuned for Leaky ReLU
          
          Numerically Stable Activation & Loss Computations
          
          Stability safeguards were implemented (e.g., careful handling of exponentials and clipping strategies) to prevent 
          overflow/underflow during training — critical for production reliability even in small-scale systems.
          
          Gradient Descent with Momentum
          Momentum terms were explicitly managed per-parameter to control optimization dynamics.
          Designed with modular Layer and Network abstractions to allow flexible depth, activation swapping, and initialization changes without rewriting core logic. 
          Explicit Data Pipeline Control
          Batching, shuffling, and preprocessing were manually implemented to control training determinism and reproducibility. 
        </h5>  */}

        
        
        {/* <h2> Engineering Challenges / Migration: </h2>

        <h5> 
          Gradient Stability Across Depth
          Initial deeper configurations suffered from unstable convergence due to poor initialization scaling. Refactoring to He initialization (tuned specifically for Leaky ReLU) restored gradient variance preservation and enabled stable multi-layer training.
          Vanishing / Exploding Gradients
          Manual backprop exposed instability early. Addressed through careful derivative validation, weight scaling adjustments, and momentum tuning.
          Numerical Instability in Loss Computation
          Softmax and cross-entropy calculations required stabilization techniques to prevent overflow. Refactored implementation to use shifted logits and safe logarithmic operations.
          Architectural Refactor for Extensibility
          The initial linear script-based implementation was restructured into modular classes to separate concerns (layers, activations, optimization). This reduced coupling and enabled depth configurability without rewriting training logic.
          Performance Optimization
          Early versions relied on partial loops, which limited training speed. Refactored to fully vectorized matrix operations, improving efficiency and convergence time while maintaining readability.
        </h5>  */}

        {/* <h2> Future Planning / Expansion: </h2>
        
        <h5> 
          This architecture is intentionally positioned as a foundational flexible engine rather than a one-off model.
          
          Planned expansions include:
          
          Implementing additional optimizers (Adam, RMSProp) from scratch to compare convergence dynamics.
          Extending to convolutional layers to support image-specific architectures.
          Introducing gradient checking automation for formal correctness validation.
          Running program on potent GPUS with a wider dataset.
        </h5> */}
      </div>


      <div className="WANDBANDTRAINING">

        <div className='WANDB'>
          <video autoPlay loop muted playsInline>
            <source src="/videos/WANDB.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>

        <div className='RunningNeuralNet'>
          <video autoPlay loop muted playsInline>
            <source src="/videos/RunningNeuralNet.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>

      </div>




    </div>
  );
}

