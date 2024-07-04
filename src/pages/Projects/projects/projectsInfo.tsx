import ChristmasGame from '../../../photos/Projects/astronot.jpg';

type ProjectInfo = {
    projectName: string;
    description: string;
    photo: JSX.Element;
    githubLink: string;

};

export const projectInfo: ProjectInfo[] = [
    {
        projectName: "Christmas Game",
        description: "Christmas 2D top down horror game. Collborated with friends for my highschool's hackathon and was made with Java and the Swing GUI",
        photo: <img src={ChristmasGame} alt='astronot'/>,
        githubLink: "https://github.com/etthann/School-Hackathon",
    },

] 