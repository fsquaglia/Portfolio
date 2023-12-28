import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import henry from "../../Assets/henry.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fernando Squaglia </span>
            from{" "}
            <span className="purple"> San Cristóbal, Santa Fe, Argentina.</span>
            <br />
            Enthusiast of the world of computing and programming. My journey
            into the realm of programming began with the excitement of
            discovering how lines of code could transform abstract ideas into
            functional applications.
            <br />
            I'm drawn to taking on projects that allow me to innovate and grow
            as a developer. I firmly believe in the philosophy of open source
            and in sharing knowledge to contribute to the community.
            <br />
            <br />
            When I'm not immersed in the world of code, I enjoy researching and
            acquiring knowledge. I'm excited to connect with other technology
            enthusiasts, collaborate on interesting projects, and continue
            exploring the endless possibilities that programming has to offer.
            <br />
            Let's make technology work in our favor and build an exciting
            digital future together! 🚀✨
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I've just graduated from{" "}
              <img
                src={henry}
                alt="Henry"
                className="img-fluid ml-3"
                style={{ maxHeight: "20px" }} // Ajusta la altura según sea necesario
              />
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
