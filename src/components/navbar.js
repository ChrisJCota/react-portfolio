import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFolder , faFile , faEnvelope} from '@fortawesome/free-solid-svg-icons';






function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => props.handlePageChange("about")}>
                    Chris' Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => props.handlePageChange("projects")}>
                            <FontAwesomeIcon icon={faFolder}> </FontAwesomeIcon>
                            <span></span> Projects
                        </Nav.Link>
                        <Nav.Link href="https://github.com/ChrisJCota" target="_blank">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <span></span> Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/christopherjcota/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        <span></span> LinkedIn
                        </Nav.Link>
                        <Nav.Link href="https://content.celero.io/s/c6ed65b7/chris-cotas-resume-1/" target="_blank">
                        <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <span></span> Resume</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="mailto:chrisjocota@gmail.com?subject=Mail From Portfolio" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <span></span> Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
