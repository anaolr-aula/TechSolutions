import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import Menu from './components/Menu.jsx';
import Produtos from './pages/Produtos.jsx';
import Empresa from './pages/Empresa.jsx'
import Rodape from './components/Rodape.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      <Rodape/>
      </BrowserRouter>
    </>
  );
}

export default App;
