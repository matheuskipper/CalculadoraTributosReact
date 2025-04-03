import { useState } from "react";
import Subtitulo from "./components/Subtitulo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculadora from "./components/Calculadora";
import NumeroAleatorio from "./components/NumeroAleatorio";

function App() {
  return (
    <>
      <div className="font-lato bg-[#eff3f5] min-h-screen flex flex-col justify-between items-center justify-center text-center text-[#333]">
        <Header />
        <h1>React Recap</h1>
        <Subtitulo descricao={"Descrição"} />
        <NumeroAleatorio />
        <Calculadora />
        <Footer />
      </div>
    </>
  );
}

export default App;
