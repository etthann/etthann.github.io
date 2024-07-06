/* eslint-disable array-callback-return */
import React from "react";
import "./ExperienceContainer.css";
import { Card } from "react-bootstrap";

export default function ExperienceContainer(props: any) {
  return (
    <div className="row mt-5 gx-0 skill-container justify-content-center ">
      <div className="col-md-11 mb-2">
        <Card bg="dark" text="white" className="custom-card">
          <div className="d-flex">
            <Card.Img
              src={props.photo}
              alt="card-img"
              className="custom-img-experience-size" // Ensure this class adjusts the image size appropriately
            />
            <div className="card-content">
              <Card.Header>
                <div className="header-content">
                  <span className="fw-bold fs-3">{props.name}</span>
                  <span className="current-time">{props.time}</span>
                </div>
              </Card.Header>
              <Card.Body>
                <span className="fs-3 experiences-title">
                  <Card.Title>{props.description}</Card.Title>
                </span>
                <Card.Text>{props.job}</Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
