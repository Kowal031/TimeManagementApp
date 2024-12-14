import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import { RouteItem } from "../types/routeTypes";

const AuthRoutes: RouteItem[] = [
  {
    name: "Login",
    toPath: "/",
    component: <LoginPage />,
  },
  {
    name: "Register",
    toPath: "/register",
    component: <RegisterPage />,
  },
];

export default AuthRoutes;
