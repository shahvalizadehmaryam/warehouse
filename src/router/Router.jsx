import { Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import Dashboard from "pages/Dashboard";
import AuthPage from "pages/AuthPage";

const Router = () => {
  return (
    <Routes>
      <Router index element={<HomePage />} />
      <Router path="/dashboard" element={<Dashboard />} />
      <Router path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default Router;
