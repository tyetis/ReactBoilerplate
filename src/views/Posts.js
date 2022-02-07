import axios from "axios";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState();
  useEffect((n) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);
  return (
    <Container>
      <Row>
        <Col style={{ padding: "20px" }}>
          <ListGroup>
            {posts &&
              posts.length > 0 &&
              posts.map((n) => (
                <ListGroup.Item as={Link} to={"/posts/" + n.id} action>
                  <Icon.CaretRightFill /> {n.title}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
