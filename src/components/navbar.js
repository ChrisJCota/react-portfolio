import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Chris' Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => props.handlePageChange("projects")}>Projects</Nav.Link>
                        <Nav.Link href="https://github.com/ChrisJCota">Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/christopherjcota/">LinkedIn</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="mailto:chrisjocota@gmail.com?subject=Mail From Portfolio">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
