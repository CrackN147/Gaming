import { RouterProvider } from "react-router-dom";
import { Header, Footer } from "./components";
import { routes } from "./global/routes";
import { LanguageProvider } from "./global/contexts/LanguageContext";

export const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          {routes.routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              errorElement={route.errorElement}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};
