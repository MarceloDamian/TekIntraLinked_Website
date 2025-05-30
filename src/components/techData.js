import { FaPython, FaHtml5, FaSwift, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus, SiDart } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { IoLogoReact } from "react-icons/io5";

const techData = [
  {
    icon: <FaPython size={175} color="black" />,
    label: "PYTHON",
    path: "/Portfolio",
  },
  {
    icon: <SiCplusplus size={175} color="black" />,
    label: "C++",
    path: "/Portfolio",
  },
  {
    icon: <IoLogoReact size={175} color="black" />,
    label: "REACT",
    path: "/Portfolio",
  },
  {
    icon: <SiDart size={175} color="black" />,
    label: "DART",
    path: "/Portfolio",
  },
  {
    icon: <VscTerminalBash size={175} color="black" />,
    label: "BASH",
    path: "/Portfolio",
  },
  {
    icon: <IoLogoJavascript size={175} color="black" />,
    label: "JAVASCRIPT",
    path: "/Portfolio",
  },
  {
    icon: <FaSwift size={175} color="black" />,
    label: "SWIFT",
    path: "/Portfolio",
  },
  {
    icon: <FaHtml5 size={175} color="black" />,
    label: "HTML",
    path: "/Portfolio",
  },
  {
    icon: <FaCss3Alt size={175} color="black" />,
    label: "CSS",
    path: "/Portfolio",
  },
  {
    icon: <img src={`images/MIPSLOGO.png`} height="200cm" width="200cm" />,
    label: "MIPS",
    path: "/Portfolio",
  },
  {
    icon: <img src={`images/PerlTransparentLogo.png`} height="150cm" width="200cm"/>,
    label: "PERL",
    path: "/Portfolio",
  },
];

export default techData;
