import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Sobre} path="/sobre" />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
