

import { IoLogoReact } from "react-icons/io5";
// import "./Demo.css";

// ! Revise Footertexts to be more specific to each project.
// ! Revise Resume
// ! Revise AI Video and ParkerUp Video.

// ! Edit HTML Template to include a resume and maybe portfolio links. 
// ! Write individual text for each project page
// ! have some photos for each project page. 

// ! Refactor and clean up code. 

const DemoData = [
  {
    headerText: "TEKINTRALINKED",
    icon: (
      <video className="Demo__item__img" autoPlay loop muted playsInline>
        <source src="videos/DemoVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    // probably change this to video.
    label: "This is the Label",
    path: "../Portfolio/FirstDemo",
    footerText:
      "TekIntraLinked.com is a modern, responsive portfolio site I built using React, JavaScript, Tailwind CSS, and Node.js, with seamless email integrations for user interactions. 🌟📧Deployed on AWS with HTTPS security, custom routing, and monitoring, it showcases my full-stack expertise in delivering reliable, scalable web applications. ☁️🔒🚀",
  },
  {
    headerText: "ParkerUp",
    icon: (
      <div className="Second_Demo_Container">
          <video  className="Second_Demo__item__img" autoPlay loop muted playsInline>
            <source src="videos/ShortVideoDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={`images/EncryptedWords.png`} className="MVPPhoto" />
      </div>
    ),
    label: "This is the Label for ParkerUp",
    path: "../Portfolio/SecondDemo",
    footerText: "Architected and shipped a cross-platform mobile app using Flutter andDart, powering a peer-to-peer, community-driven navigation system.Orchestrated 8+ API integrations (Firebase, Google Maps, Google Cloud) to turn real-world movement into real-time intelligence at scale.",
  },
  {
    headerText: "AI/ML IMAGE CLASSIFIER",
    icon: <video  className="Demo__item__img" autoPlay loop muted playsInline>
            <source src="videos/RunningNeuralNet.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    ,
    label: "This is the Label for IMAGE CLASSIFIER",
    path: "../Portfolio/ThirdDemo",
    footerText:
      "Built an end-to-end, object-oriented neural network in pure Python and NumPy, achieving 80%+ MNIST accuracy. Implemented numerically stable activations, He initialization, and momentum-based gradient descent. Optimized hyperparameters, enabled flexible multilayer architectures, and applied robust preprocessing and data imputation to improve training efficiency.",
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
