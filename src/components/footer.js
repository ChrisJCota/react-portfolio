import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFolder, faFile, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';




function Footer(props) {
  return (
    <footer>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">

          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => props.handlePageChange("about")}>
              <FontAwesomeIcon icon={faHome}>
              </FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link onClick={() => props.handlePageChange("projects")}>
              <FontAwesomeIcon icon={faFolder}>
              </FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href="https://github.com/ChrisJCota" target="_blank">
              <FontAwesomeIcon icon={faGithub}>
              </FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/christopherjcota/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin}>
              </FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href="mailto:chrisjocota@gmail.com?subject=Mail From Portfolio" target="_blank">
              <FontAwesomeIcon icon={faEnvelope}>
              </FontAwesomeIcon>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}
export default Footer;