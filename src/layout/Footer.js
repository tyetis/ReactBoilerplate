import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Nav className="text-white">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
