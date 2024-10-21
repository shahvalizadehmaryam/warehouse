import { Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/LoginPage";
import ProductsPage from "pages/ProductsPage";
import NotFoundPage from "../pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Router index element={<HomePage />} />
      <Router path="/products" element={<ProductsPage />} />
      <Router path="/register" element={<RegistrationPage />} />
      <Router path="/login" element={<LoginPage />} />
      <Router path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
