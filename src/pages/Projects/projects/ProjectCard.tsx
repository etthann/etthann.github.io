import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Projects.css";

export default function ProjectCard(props: any) {
  return (
    <Card className="project-card-view text-center mt-5">
      <Card.Img
        variant="top"
        src={props.photo}
        alt="card-img"
        className="custom-img-size"
      />
      <Card.Body>
        <Card.Title className="projects-title">{props.name}</Card.Title>
        <Card.Text className="text-white">{props.description}</Card.Text>
        <Button
          className="align-items-center justify-content-center me-3"
          variant="dark"
          href={props.link}
          target="_blank"
        >
          Open
        </Button>
      </Card.Body>
    </Card>
  );
}
