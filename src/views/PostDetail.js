import { useParams } from "react-router-dom";
import axios from "axios";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(
    (n) => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then((response) => setPost(response.data));
    },
    [id]
  );
  return (
    <Container>
      <Row>
        <Col style={{ padding: "20px" }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </Col>
      </Row>
    </Container>
  );
}
