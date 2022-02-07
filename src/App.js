import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Posts from "./views/Posts";
import PostDetail from "./views/PostDetail";
import Login from "./views/Login";
import PrivateRoute from "./utils/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Layout>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/posts" exact component={Posts} />
          <PrivateRoute path="/posts/:id" component={PostDetail} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}