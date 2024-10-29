import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/LoginPage";
import NotFoundPage from "pages/NotFound";
import AuthProvider from "providers/AuthProvider";
import Home from "../components/templates/Home";
import { getCookie } from "../utils/cookie";

const Router = () => {
  const token = getCookie("token");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }
        />

        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <RegistrationPage />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
