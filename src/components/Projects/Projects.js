import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import symon from "../../Assets/Projects/symonSayaaa.png";
// import suicide from "../../Assets/Projects/suicide.png";
import familyGolf from "../../Assets/Projects/familyGolf.png";
import airbnb from "../../Assets/Projects/airbnb.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={symon}
              isBlog={false}
              title="Symon Saya Game"
              description="This is a simple Simon Says game built using JavaScript, HTML, and CSS. The game generates a sequence of button flashes that the player must remember and repeat. Each correct sequence completion advances the player to the next level."
              ghLink="https://github.com/satyabratapradhan01/Simon-Says-Game"
              demoLink="https://simon-says-game-mauve.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={familyGolf}
              isBlog={false}
              title="Sidcup Family Golf"
              description="An engaging, animated, and interactive website for Sidcup Family Golf, built with HTML, CSS, JavaScript, and GSAP animation library. This project replicates a modern and visually striking golf facility website with dynamic cursors, scroll-based animations, and responsive UI."
              ghLink="https://github.com/satyabratapradhan01/Animation-website"
              demoLink="https://animation-website-olive.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Airbnb"
              description="This is an Airbnb project that allows users to authenticate, list room locations, add reviews, and perform CRUD (Create, Read, Update, Delete) operations on listings and reviews."
              ghLink="https://github.com/satyabratapradhan01/AIRBNB-CLONE"
              demoLink="https://airbnb-clone-6ahn.onrender.com/listings"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
