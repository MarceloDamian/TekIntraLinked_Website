import { FaPython, FaHtml5, FaSwift, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus, SiDart } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { IoLogoReact } from "react-icons/io5";

const techData = [
  {
    icon: <FaPython size={150} color="white" />,
    label: "PYTHON",
    path: "/Portfolio",
  },
  {
    icon: <SiCplusplus size={150} color="white" />,
    label: "C++",
    path: "/Portfolio",
  },
  {
    icon: <IoLogoReact size={150} color="white" />,
    label: "REACT",
    path: "/Portfolio",
  },
  {
    icon: <SiDart size={150} color="black" />,
    label: "DART",
    path: "/Portfolio",
  },
  {
    icon: <VscTerminalBash size={150} color="black" />,
    label: "BASH",
    path: "/Portfolio",
  },
  {
    icon: <IoLogoJavascript size={150} color="black" />,
    label: "JAVASCRIPT",
    path: "/Portfolio",
  },
  {
    icon: <FaSwift size={150} color="black" />,
    label: "SWIFT",
    path: "/Portfolio",
  },
  {
    icon: <FaHtml5 size={150} color="black" />,
    label: "HTML",
    path: "/Portfolio",
  },
  {
    icon: <FaCss3Alt size={150} color="black" />,
    label: "CSS",
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
