import React from "react";

import DeployedCards from "./ProjectCards";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


function Projects() {
    return (
        <Container className="projects-section">
            <Container className="justify-content-center">
            <h2 className="display-3 nav-header">Welcome to my Projects!</h2>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <DeployedCards
                            title="Text-Editor"
                            description="This project is a text editor which allows the user to create code or notes and retrieve them later on."
                            gitRepo="https://github.com/ChrisJCota/text-editor"
                            >

                        </DeployedCards>
                    </Col>

                    <Col md={4} className="project-card">
                        <DeployedCards
                            title="Phudi"
                            description="This collaborative project is a food reservation app that allows users to login and book a reservation. Then store that reservation on their personal site which shows their previous reservations."
                            gitRepo="https://github.com/ChrisJCota/phudi"
                            >

                        </DeployedCards>
                    </Col>

                    <Col md={4} className="project-card">
                        <DeployedCards
                            title="Social Network API"
                            description="This is an API where different users can share their thoughts and reactions as well as create a friend list."
                            gitRepo="https://github.com/ChrisJCota/social-network-api">

                        </DeployedCards>
                    </Col>

                    <Col md={4} className="project-card">
                        <DeployedCards
                            title="Company Directory"
                            description="This project lets you open, add, and modify a company directory using a SQL database and node to run the application."
                            gitRepo="https://github.com/ChrisJCota/company_directory">

                        </DeployedCards>
                    </Col>

                    <Col md={4} className="project-card">
                        <DeployedCards
                            title="JS Quiz"
                            description="One of my early projects creating a JS quiz using tools from Javascript, utilizing local storage to store data and practicing implementing strategies to create interactive webpages through JS."
                            gitRepo="https://github.com/ChrisJCota/JS-Quiz"
                            >

                        </DeployedCards>
                    </Col>
                    <Col md={4} className="project-card">
                        <DeployedCards
                            title="readMe Generator"
                            description="This project generates professional ReadMe's using inquirer, Javascript and node."
                            gitRepo="https://github.com/ChrisJCota/ReadMeGenerator">


                        </DeployedCards>
                    </Col>

                </Row>

            </Container>

        </Container>



    );
}

export default Projects;
