import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/LoginPage";
import ProductsPage from "pages/ProductsPage";
import NotFoundPage from "pages/NotFound";
import { getCookie } from "utils/cookie";


const Router = () => {

    const token = getCookie("token");
    console.log("token in routes", token);

  return (
    <Routes>
      <Route
        index
        element={token ? <ProductsPage /> : <Navigate to="/login" />}
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
  );
};

export default Router;
