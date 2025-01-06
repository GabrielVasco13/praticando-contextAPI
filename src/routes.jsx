import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import App from "./App";

const Rotas = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Sobre} path="/sobre" />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Rotas;
