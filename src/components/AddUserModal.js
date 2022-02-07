import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { AddUser, UpdateUser } from "../store/actions/userActions";

function AddUserModal({ user = {}, show, handleClose, state, dispatch }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isActive, setIsActive] = useState();
  const _handleAddUser = () => {
    const fn = user.id ? UpdateUser : AddUser;
    dispatch(
      fn({
        id: user.id || Math.random(),
        name: name,
        email: email,
        isActive: isActive
      })
    );
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(n) => setName(n.target.value)}
              defaultValue={user.name}
              type="text"
              placeholder="Enter Name"
              required={true}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(n) => setEmail(n.target.value)}
              defaultValue={user.email}
              type="email"
              placeholder="Enter Email"
              required={true}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Check
              type="checkbox"
              id="chk"
              onChange={(n) => setIsActive(n.target.checked)}
              defaultChecked={user.isActive}
              label="Is Active"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={_handleAddUser}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect()(AddUserModal);
