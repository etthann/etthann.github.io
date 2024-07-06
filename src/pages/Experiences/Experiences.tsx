import Nav from "../../components/Nav/Nav";
import ExperienceContainer from "./Experiences/ExperienceContainer";
import "./Experiences.css";
import Footer from "../../components/Footer/Footer";
import { experiences } from "./experienceInfo";

const Experiences: React.FC = () => {
  return (
    <div className="container-fluid main-screen-background gx-0 ">
      <Nav />
      <div className="text-center mt-5 fs-1">
        <br />
        <br />
        <div className="fs-1 header-color fw-bold">
          <p>Experiences</p>
        </div>
      </div>
      {experiences.map((value) => (
        <ExperienceContainer
            photo = {value.photo}
            name = {value.name}
            description = {value.description}
            job = {value.job}
            time = {value.time}
        />
      ))}
      <br />
      <Footer />
    </div>
  );
};

export default Experiences;
