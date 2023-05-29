import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Chris' Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Projects</Nav.Link>
                        <Nav.Link href="#github">Github</Nav.Link>
                        <Nav.Link href="#linkedIn">LinkedIn</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;