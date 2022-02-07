import { Navbar, Container, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../utils/useAuth";
import AuthStatus from "../components/AuthStatus";

export default function Navigation() {
  const location = useLocation();
  const [loggedUser, Login, Logout] = useAuth();

  return (
    <Navbar bg="light" expand="lg" collapseOnSelect={true}>
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={location.pathname}>
            <Nav.Link as={Link} to="/" eventKey="/">
              <Icon.HouseFill /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="/about">
              <Icon.Building /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/posts" eventKey="/posts">
              <Icon.ListTask /> Posts
            </Nav.Link>
            {!loggedUser && (
              <Nav.Link as={Link} to="/login" eventKey="/login">
                <Icon.BoxArrowInRight />
                Login
              </Nav.Link>
            )}
            {loggedUser && (
              <a className="nav-link" onClick={(n) => Logout()}>
                <Icon.BoxArrowInLeft />
                Logout
              </a>
            )}
            <Nav.Link>
              <AuthStatus />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
