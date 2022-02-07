import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { DeleteUser, FilterUsers } from "../store/actions/userActions";

function ListUsers({ onEdit, filter, users, dispatch }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((n) => (
            <tr key={n.id}>
              <td>{n.id}</td>
              <td>{n.name}</td>
              <td>{n.email}</td>
              <td>{n.isActive ? "true" : "false"}</td>
              <td>
                <button className="btn btn-primary" onClick={(e) => onEdit(n)}>
                  Edit
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={(e) => dispatch(DeleteUser(n.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        {users.length === 0 && (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              No Data
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4">
            <FilterComp dispatch={dispatch} filter={filter} />
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}

const FilterComp = ({ dispatch, filter }) => {
  return (
    <div className="btn-group">
      <button
        disabled={filter.isActive === null}
        onClick={(n) => dispatch(FilterUsers(null))}
        className="btn btn-primary btn-sm"
      >
        All
      </button>
      <button
        disabled={filter.isActive === true}
        onClick={(n) => dispatch(FilterUsers(true))}
        className="btn btn-primary btn-sm"
      >
        Active
      </button>
      <button
        disabled={filter.isActive === false}
        onClick={(n) => dispatch(FilterUsers(false))}
        className="btn btn-primary btn-sm"
      >
        Passive
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  let _users = state.userReducer.users;
  if (state.userReducer.visibilityFilter.isActive != null) {
    _users = _users.filter(
      (n) => n.isActive === state.userReducer.visibilityFilter.isActive
    );
  }
  return { users: _users, filter: state.userReducer.visibilityFilter };
};

export default connect(mapStateToProps)(ListUsers);
