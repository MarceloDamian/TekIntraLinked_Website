import { FaHtml5, FaSwift, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { IoLogoReact } from "react-icons/io5";



const techData = [
  {
    icon: <img src={`images/PythonLogo.png`} className="python-icon" />,
    label: "PYTHON",
    path: "/Portfolio",
  },
  {
    icon: <SiCplusplus size={150} color="rgba(14, 14, 14, 1)" />,
    label: "C++",
    path: "/Portfolio",
  },
  {
    icon: <IoLogoReact size={170} color="#58C4DC" className="React-icon" />,
    label: "REACT",
    path: "/Portfolio",
  },
  {
    icon: <img src={`images/DartLogo.png`} alt="Dart" className="Dart-icon"/>,
    label: "DART",
    path: "/Portfolio",
  },
  {
    icon: <VscTerminalBash size={160} color="rgba(23, 23, 22, 1)" />,
    label: "BASH",
    path: "/Portfolio",
  },
  {
    icon: <IoLogoJavascript size={160} color="rgba(250, 191, 113, 1)" />,
    label: "JAVASCRIPT",
    path: "/Portfolio",
  },
  {
    icon: <FaSwift size={155} color="rgba(234, 60, 21, 0.89)" />,
    label: "SWIFT",
    path: "/Portfolio",
  },
  {
    icon: <FaCss3Alt size={160} color="rgba(62, 103, 216, 1)" />,
    label: "CSS",
    path: "/Portfolio",
  },
  {
    icon: <FaHtml5 size={160} color="rgba(207, 78, 31, 1)" />,
    label: "HTML",
    path: "/Portfolio",
  },

  // {
  //   icon: <img src={`images/MIPSLOGO.png`} height="150cm" width="200cm" />,
  //   label: "MIPS",
  //   path: "/Portfolio",
  // },
  // {
  //   icon: <img src={`images/PerlTransparentLogo.png`} height="150cm" width="200cm"/>,
  //   label: "PERL",
  //   path: "/Portfolio",
  // },
  // I have decided to not include these in my portfolio. They dont
  // add much value to the portfolio and I dont want to include them.
];

export default techData;
