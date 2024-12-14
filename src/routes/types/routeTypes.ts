import { ReactNode } from "react";

export interface RouteItem {
  name: string;
  toPath: string;
  component: ReactNode;
}
