import { Route, Redirect } from "react-router-dom";
import useAuth from "../utils/useAuth";

export default function PrivateRoute(props) {
  const [loggedUser] = useAuth();
  if (loggedUser) {
    return <Route path={props.path} {...props}></Route>;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}
