import "./App.css";
import Contato from "./componets/contato/index";
import { Logo } from "./componets/logo";
import { Produtos } from "./componets/produtos";
import { SobreEmpresa } from "./componets/sobreEmpresa";

import bootstrap from 'bootstrap'

function App() {
  return (
    <div>
      <Logo />
      <Produtos />
      <SobreEmpresa />
      <Contato />
    </div>
  );
}

export default App;
