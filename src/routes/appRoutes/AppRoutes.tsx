import Dashboard from "../../pages/Dashboard";
import { RouteItem } from "../types/routeTypes";

const AppRoutes: RouteItem[] = [
  {
    name: "Dashboard",
    toPath: "/dashboard",
    component: <Dashboard />,
  },
];

export default AppRoutes;
