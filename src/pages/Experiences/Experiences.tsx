import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import ExperienceContainer from "./Experiences/ExperienceContainer";
import Footer from "../../components/Footer/Footer";
import { experiences } from "./experienceInfo";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";
import Image from "react-bootstrap/Image";
import { Modal, Button } from "react-bootstrap";



const Experiences: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleOpenModal = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };


  return (
    <div className="container-fluid main-screen-background gx-0 ">
      <Nav />
      <div className="experience-container">
        <div className="text-center mt-5 fs-1">
          <br />
          <br />
          <div className="fs-1 header-color fw-bold">
            <p>Experiences</p>
          </div>
        </div>

        {/* Timeline starts here */}
        <VerticalTimeline>
          {experiences.map((value) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "linear-gradient(90deg,rgba(224, 188, 188, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date={value.time}
              icon={<Image src={value.photo} roundedCircle fluid />}
              iconStyle={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
              iconClassName={value.name}
              iconOnClick={() => handleOpenModal(value)}
              onTimelineElementClick={() => handleOpenModal(value)}
            >
              <h3 className="vertical-timeline-element-title">
                {value.job}
                <p>{value.name}</p>
              </h3>
              <p>{value.learnMore}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem?.job}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedItem && (
              <>
                <Image
                  src={selectedItem.photo}
                  roundedCircle
                  width={80}
                  height={80}
                  className="mb-3"
                />
                <h5>{selectedItem.name}</h5>
                <p><strong>Time:</strong> {selectedItem.time}</p>
                <p><strong>Role:</strong> {selectedItem.job}</p>
                <p><strong>Description:</strong> {selectedItem.description}</p>

              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <br />
      </div>
      <Footer />
    </div >
  );
};

export default Experiences;
