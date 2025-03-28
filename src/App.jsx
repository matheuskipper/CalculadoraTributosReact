import { useState } from "react";
import Subtitulo from "./components/Subtitulo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculadora from "./components/Calculadora";
import NumeroAleatorio from "./components/NumeroAleatorio";

function App() {
  return (
    <>
      <div className="font-lato bg-[#eff3f5] min-h-screen">
        <Header />
        <h1>React Recap</h1>
        <Subtitulo descricao={"Descrição"} />
        <br></br>
        <button
          className="bg-[#666666] hover:bg-[#888888] border-none cursor-pointer text-white 
          font-bold py-2 px-4 rounded mb-4"
          onClick={() => {
            window.open("https://github.com/matheuskipper", "_blank");
          }}
        >
          Access my GitHub
        </button>
        <NumeroAleatorio />
        <Calculadora />
        <Footer />
      </div>
    </>
  );
}

export default App;
