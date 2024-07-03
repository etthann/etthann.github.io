import { BiLogoTypescript, BiLogoPython } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { DiPhp, DiLaravel, DiGit } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

// Define the Skill type
type Skill = {
  name: string;
  svg: JSX.Element;
};

// Define and export the skills array
export const skills: Skill[] = [
  {
    name: "Typescript",
    svg: <BiLogoTypescript />,
  },
  {
    name: "React",
    svg: <FaReact />,
  },
  {
    name: "Python",
    svg: <BiLogoPython />,
  },
  {
    name: "C++",
    svg: <SiCplusplus />,
  },
  {
    name: "Java",
    svg: <FaJava />,
  },
  {
    name: "PHP",
    svg: <DiPhp />,
  },
  {
    name: "Laravel",
    svg: <DiLaravel />,
  },
  {
    name: "Git",
    svg: <DiGit />,
  },
  {
    name: "Javascript",
    svg: <IoLogoJavascript />,
  },
];
