import { Route, Routes } from "react-router-dom";
import RegistrationPage from "pages/RegistrationPage";
import LoginPage from "pages/LoginPage";
import ProductsPage from "pages/ProductsPage";
import NotFoundPage from "pages/NotFound";
import AuthProvider from "providers/AuthProvider";
import Layout from "layouts/Layout";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <AuthProvider>
              <ProductsPage />
            </AuthProvider>
          </Layout>
        }
      />

      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
