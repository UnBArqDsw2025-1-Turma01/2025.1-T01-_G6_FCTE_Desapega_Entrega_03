import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Anuncios from "./pages/Anuncios";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout logged={false} />}>
            <Route path="/" element={<Home />} />
            <Route path="/anuncios" element={<Anuncios />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;