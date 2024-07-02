import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { routes } from "./global/routes";
import { LanguageProvider } from "./global/contexts/LanguageContext";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element}
          errorElement={route.errorElement}
        />
      ))}
    </Routes>
  );
};

export const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </LanguageProvider>
    </Router>
  );
};
