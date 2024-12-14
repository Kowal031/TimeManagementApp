import { FC, ReactNode } from "react";

import { useAuth } from "../../context/AuthContext";
import Navbar from "../navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
