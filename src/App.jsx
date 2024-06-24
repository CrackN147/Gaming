import { RouterProvider } from "react-router-dom";
import { Header, Footer } from "./components";
import { routes } from "./global/routes";
import { LanguageProvider } from "./global/contexts/LanguageContext";

export const App = () => {
  return (
    <>
      <LanguageProvider>
        <Header />
        <RouterProvider router={routes} />
        <Footer />
      </LanguageProvider>
    </>
  );
};
