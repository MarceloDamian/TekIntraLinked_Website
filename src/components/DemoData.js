import { IoLogoReact } from "react-icons/io5";
import "./Demo.css";

// ! Revise Footertexts to be more specific to each project.
// ! Change the image to a video.
// ! Set up conditions so that when the width changes the font size increases.
// ! Set up conditions so that the new video added isnt distorted when resizing width. 



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
    icon: <img src={`images/MVPPhoto.jpg`} className="Parker_Up_Class" />,
    label: "This is the Label for ParkerUp",
    path: "../Portfolio/SecondDemo",
    footerText: (
      <div className="Parker_Up_Class_Text">
        Architected and shipped a cross-platform mobile app using Flutter and
        Dart, powering a peer-to-peer, community-driven navigation system.
        Orchestrated 8+ API integrations (Firebase, Google Maps, Google Cloud)
        to turn real-world movement into real-time intelligence at scale.
      </div>
    ),
  },
  {
    headerText: "AI/ML IMAGE CLASSIFIER",
    icon: <IoLogoReact size={175} color="turquoise" />,
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
