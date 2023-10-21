import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Users from "../pages/Users"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/users",
    Component: Users,
  }
]);

export default router