import { connect } from "react-redux";

const AuthStatus = ({ loggedUser }) => {
  return loggedUser?.email || "";
};

const mapStateToProps = (state) => {
  return { loggedUser: state.authReducer.loggedUser };
};

export default connect(mapStateToProps)(AuthStatus);
