import React from "react";
import GlobalContext from "./contexts/GlobalContext";
import "./global.css";
import LayoutPage from "./pages/Layout";

function App() {
  return (
    <GlobalContext>
      <LayoutPage>Aqui vai algum componente</LayoutPage>
    </GlobalContext>
  );
}

export default App;
