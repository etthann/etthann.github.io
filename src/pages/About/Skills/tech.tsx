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
    svg: <BiLogoTypescript size="100%" />,
  },
  {
    name: "React",
    svg: <FaReact size="100%" />,
  },
  {
    name: "Python",
    svg: <BiLogoPython size="100%" />,
  },
  {
    name: "C++",
    svg: <SiCplusplus size="100%" />,
  },
  {
    name: "Java",
    svg: <FaJava size="100%" />,
  },
  {
    name: "PHP",
    svg: <DiPhp size="100%" />,
  },
  {
    name: "Laravel",
    svg: <DiLaravel size="100%" />,
  },
  {
    name: "Git",
    svg: <DiGit size="100%" />,
  },
  {
    name: "Javascript",
    svg: <IoLogoJavascript size="100%" />,
  },
];
