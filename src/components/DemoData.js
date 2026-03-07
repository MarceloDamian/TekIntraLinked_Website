

import { IoLogoReact } from "react-icons/io5";
// import "./Demo.css";

import { demoTechs } from './techConfig';


//! Change/Update the revised Resume here 
//! Post it into ec2 and github. 


// ! REDO and post tekintralinked video inside firstdemo.css
// ! Crop out mobile videos to remove corners. 
// ! Use AI to remove all comments
// ! Use AI to add all comments on code. 





// ! Refactor code on down down down time. Low priority.  


const DemoData = [
  {
    headerText:"TEKINTRALINKED",
    icon: (
      <video className="Demo__item__img" autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
        <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/DemoVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    // probably change this to video.
    // label: "This is the Label",
    path: "../Portfolio/FirstDemo",
    footerText:
    ( <>
        <h4>
          Tekintralinked is a self-founded engineering venture created to 
          demonstrate real-world software ownership, infrastructure control, 
          and production deployment. 
          It is a production-deployed system designed to prove
          execution, resilience, and technical depth.        
        </h4>
      </>
    ),
    demoLabel:"FirstDemo",
  },
  {
    headerText:"PARKERUP",
    icon: (
      <div className="Second_Demo_Container">
          <video  className="Second_Demo__item__img" autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
            <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/ShortVideoDemo.mp4" type="video/mp4" />            Your browser does not support the video tag.
          </video>
          <img src={`images/EncryptedWords.png`} className="EncryptedPhoto" />
      </div>
    ),
    // label: "This is the Label for ParkerUp",
    path: "../Portfolio/SecondDemo",
    footerText:
    (
      <>
        <h4>
          Architected and shipped a cross-platform mobile app using Flutter and Dart, 
          powering a peer-to-peer, community-driven navigation system. Orchestrated 
          8+ API integrations (Firebase, Google Maps, Google Cloud, etc.) to turn real-world 
          movement into real-time intelligence at scale.
        </h4>
      </>
    ),
    
    demoLabel:"SecondDemo",

    
  },
  {
    headerText: "AI/ML IMAGE CLASSIFIER",
    icon: <video  className="Demo__item__img" autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
            <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/RunningNeuralNet.mp4" type="video/mp4" />            Your browser does not support the video tag.
          </video>
    ,
    // label: "This is the Label for IMAGE CLASSIFIER",
    path: "../Portfolio/ThirdDemo",
    footerText:
    (
      <h4>
        Built an end-to-end, object-oriented neural network in pure Python and NumPy, 
        achieving over 80% accuracy on the MNIST dataset for handwritten digit classification. 
        Implemented numerically stable activations, He initialization, and momentum-based gradient 
        descent. Optimized hyperparameters, enabled flexible multilayer architectures, and applied 
        robust preprocessing and data imputation to improve training efficiency.
      </h4>
    ),
    
    demoLabel:"ThirdDemo",


  },

  // Below is other items that are not part of the main items
  // {
  //     headerText:"Other Items",
  //     icon:<IoLogoReact size={175} color='black'/>,
  //     label:'This is the Label for other',
  //     path:'../Portfolio/FourthDemo',
  //     footerText:"Text this way ----------->",
  // },
  // {
  //     headerText:"",
  //     icon:<IoLogoReact size={175} color='blue'/>,
  //     label:'This is the Label for other',
  //     path:'../Portfolio/FifthDemo',
  //     footerText:"<--------- Text that way ",
  // },
  // {
  //     headerText:"",
  //     icon:<IoLogoReact size={175} color='blue'/>,
  //     label:'This is the Label for other',
  //     path:'../Portfolio/ThirdDemo',
  //     footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
  // },
  // {
  //     headerText:"",
  //     icon:<IoLogoReact size={175} color='blue'/>,
  //     label:'This is the Label for other',
  //     path:'../Portfolio/ThirdDemo',
  //     footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
  // },
  // {
  //     headerText:"",
  //     icon:<IoLogoReact size={175} color='blue'/>,
  //     label:'This is the Label for other',
  //     path:'../Portfolio/ThirdDemo',
  //     footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
  // },
  // {
  //     headerText:"",
  //     icon:<IoLogoReact size={175} color='blue'/>,
  //     label:'This is the Label for other',
  //     path:'../Portfolio/ThirdDemo',
  //     footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
  // },
  // {
  //     headerText:"",
  //     icon:<IoLogoReact size={175} color='blue'/>,
  //     label:'This is the Label for other',
  //     path:'../Portfolio/ThirdDemo',
  //     footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
  // },
  // {
  //     headerText:"",
  //     icon:<IoLogoReact size={175} color='red'/>,
  //     label:'This is the Label for other',
  //     path:'../Portfolio/ThirdDemo',
  //     footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
  // },
];

export default DemoData;
