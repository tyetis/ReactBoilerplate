import Navigation from "./Navigation";
import Footer from "./Footer";
import { Row, Container, Col } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
