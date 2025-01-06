import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Rotas from "./routes";
import "./reset.css";
import { AppProvider } from "./contexts/AppContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <Rotas />
    </AppProvider>
  </StrictMode>
);
