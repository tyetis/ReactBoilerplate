import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import ListUsers from "../components/ListUsers";
import AddUserModal from "../components/AddUserModal";

export default function Home() {
  const [show, setShowModal] = useState(false);
  const [editedUser, setEditedUser] = useState();

  const onEdit = (user) => {
    setEditedUser(user);
    setShowModal(true);
  };
  const onNew = () => {
    setEditedUser({});
    setShowModal(true);
  };

  return (
    <>
      <br />
      <h2>
        Users
        <button onClick={onNew} className="btn btn-success pull-right">
          <Icon.PlusCircleFill /> Add User
        </button>
      </h2>
      <ListUsers onEdit={onEdit} />
      <AddUserModal
        user={editedUser}
        show={show}
        handleClose={(n) => setShowModal(false)}
      />
    </>
  );
}
