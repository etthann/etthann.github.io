import FIFC from "../../photos/Experiences/FIFC.jpg";

// Define the Skill type
type Experiences = {
  name: string;
  photo: any;
  description: string;
  time: string;
  job: string;
};

// Define and export the skills array
export const experiences: Experiences[] = [
  {
    name: "First Insurance Funding of Canada",
    photo: FIFC,
    description: "IT Intern",
    time: "May 24 - August 24",
    job: "During my internship, I played a pivotal role in enhancing a preexisting website by developing and implementing new features to improve user experience and functionality. I provided dedicated support to users, troubleshooting issues promptly and ensuring seamless operation of systems. Additionally, I actively participated in data manipulation tasks, leveraging my analytical skills to process and interpret data effectively. This hands-on experience allowed me to gain practical insights into web development, user support, and data management within a dynamic IT environment.",
  },
];
