import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <>
      <Navbar expand="xl" variant="dark" bg="dark" sticky="top" data-testid="AppNavbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Demo React Example
          </Navbar.Brand>

          <Navbar.Toggle />

          <>
            {/* be sure that each NavDropdown has a unique id and data-testid */}
          </>

          <Navbar.Collapse>
            {/* This `nav` component contains all navigation items that show up on the left side */}
            <Nav className="me-auto">
              <NavDropdown title="Towns" id="appnavbar-towns" data-testid="appnavbar-towns" >
                <NavDropdown.Item as={Link} to="/towns/ArroyoGrande">Arroyo Grande</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/AvilaBeach">Avila Beach</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/LosAlamos">Los Alamos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/Anaheim">Anaheim</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/Cupertino">Cupertino</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/SanJose">San Jose</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/SanMateo">San Mateo</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/Redmond">Redmond</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/towns/Hayward">Hayward</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar >
    </>
  );
}
