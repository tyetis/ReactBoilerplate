import { useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import useAuth from "../utils/useAuth";

function LoginPage({ dispatch }) {
  const [loggedUser, Login] = useAuth();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const submitHandle = async (e) => {
    var result = await Login({
      email: formValues.email,
      password: formValues.password
    });
    if (!result) alert("Email or password is incorrect");
    e.preventDefault();
  };
  return (
    <Container>
      <Row
        className="justify-content-center align-items-center d-flex"
        style={{ height: "500px" }}
      >
        <Col md={4}>
          <Card style={{ backgroundColor: "#f8f8f8" }}>
            <Card.Body>
              <Card.Title>Login Form</Card.Title>
              <Form onSubmit={submitHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(n) =>
                      setFormValues({ ...formValues, email: n.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(n) =>
                      setFormValues({
                        ...formValues,
                        password: n.target.value
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <Card.Link href="#">I Forget Password</Card.Link>
              <Card.Link href="#">Create Account</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default connect()(LoginPage);
