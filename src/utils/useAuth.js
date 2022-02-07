import store from "../store/store";
import { Login, Logout } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";

const useAuth = () => {
  let state = store.getState();
  let history = useHistory();
  const login = async (user) => {
    if (user.email === "test@email.com" && user.password === "123") {
      store.dispatch(
        Login({
          id: 123,
          ...user
        })
      );
      history.push("/");
      return true;
    } else {
      return false;
    }
  };
  const logout = () => {
    store.dispatch(Logout());
    history.push("/login");
  };
  return [state.authReducer.loggedUser, login, logout];
};

export default useAuth;
