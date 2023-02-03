import "./app.scss";
import { Home } from "../pages/home/home";
import { NotFound } from "../pages/not-found/not-foind";
import { Posts } from "../pages/posts/posts";
import { Route, RouterProvider as Router } from "atomic-router-react";
import { router } from "./routing/routing";

const App: React.FC = () => {
  return (
    <Router router={router}>
      <Route route={Home.route} view={Home.page} />
      <Route route={Posts.route} view={Posts.page} />
      <Route route={NotFound.route} view={NotFound.page} />
    </Router>
  );
};

export { App };
