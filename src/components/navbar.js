import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';



function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    Chris' Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => props.handlePageChange("projects")}>

                            Projects
                        </Nav.Link>
                        <Nav.Link href="https://github.com/ChrisJCota">Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/christopherjcota/">
                            LinkedIn
                        </Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="mailto:chrisjocota@gmail.com?subject=Mail From Portfolio">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
