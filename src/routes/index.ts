import Home from "@pages/home"
import Login from "@pages/login"
import Users from "@pages/users"
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/users",
    Component: Users,
  }
]);

export default router