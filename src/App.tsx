import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import { AppRoutes, AuthRoutes, ProtectedRoute, PublicRoute } from "./routes";

const App: FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {AppRoutes.map((route) => (
              <Route
                key={route.name}
                path={route.toPath}
                element={<ProtectedRoute>{route.component}</ProtectedRoute>}
              />
            ))}
            {AuthRoutes.map((route) => (
              <Route
                key={route.name}
                path={route.toPath}
                element={<PublicRoute>{route.component}</PublicRoute>}
              />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
