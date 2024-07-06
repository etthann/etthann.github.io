import FIFC from "../../photos/Experiences/FIFC.jpg";
import Kumon from "../../photos/Experiences/Kumon.gif";
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
  {
    name: "Kumon",
    photo: Kumon,
    description: "Kumon Centre Assistant",
    time: "Dec 22 - June 23",
    job: "I have experience working closely with students aged 2 to 13, providing personalized instruction in basic English and Math. My responsibilities included one-on-one tutoring sessions tailored to each student's needs, focusing on foundational skills in both subjects. Additionally, I regularly assessed and graded approximately 20 sets of homework per week, ensuring comprehension and reinforcing learning objectives. Through these interactions, I fostered a supportive learning environment that encouraged academic growth and confidence in my students."
  }
];
