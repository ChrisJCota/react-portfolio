import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';





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

                            Projects
                        </Nav.Link>
                        <Nav.Link href="https://github.com/ChrisJCota" target="_blank">Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/christopherjcota/" target="_blank">
                            LinkedIn
                        </Nav.Link>
                        <Nav.Link href="https://content.celero.io/s/c6ed65b7/chris-cotas-resume-1/" target="_blank">Resume</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="mailto:chrisjocota@gmail.com?subject=Mail From Portfolio" target="_blank">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
