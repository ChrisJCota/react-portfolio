import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap";


function Projects() {
    return (
        <Container className="projects-section">
            <Container>
                <h1>
                    Welcome to my <strong>Projects!</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Text-Editor"
                            description="This project is a text editor which allows the user to create code or notes and retrieve them later on."
                            gitRepo="https://github.com/ChrisJCota/text-editor"
                            deployedLink="https://my-text-editor-with-pwa.herokuapp.com/">

                        </ProjectCard>
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            title="Phudi"
                            description="This collaborative project is a food reservation app that allows users to login and book a reservation. Then store that reservation on their personal site which shows their previous reservations."
                            gitRepo="https://github.com/ChrisJCota/phudi"
                            deployedLink="https://phudireservations.herokuapp.com/">

                        </ProjectCard>
                    </Col>
                </Row>

            </Container>

        </Container>



    );
}