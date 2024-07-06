import Flower from "../../../photos/Projects/flower.jpg";
import Mountains from "../../../photos/Projects/mountains.jpg";
import Bag from "../../../photos/Projects/bag.jpg";

type ProjectInfo = {
  projectName: any;
  description: string;
  photo: any;
  githubLink: string;
};

export const projectInfo: ProjectInfo[] = [
  {
    projectName: "This Website",
    description:
      "Portfolio website to display my projects and provide information about myself. Created with React and Typescript.",
    photo: Flower,
    githubLink: "https://github.com/etthann/portfolio-website",
  },
  {
    projectName: "Christmas Game",
    description:
      "Christmas 2D top down horror game. Collborated with friends for my highschool's hackathon and was made with Java and the Swing GUI",
    photo: Mountains,
    githubLink: "https://github.com/etthann/School-Hackathon",
  },
  {
    projectName: "App",
    description:
      "App created with Javascript and Expo, allows you to send things to another person",
    photo: Bag,
    githubLink: "https://github.com/etthann/project",
  },
];
