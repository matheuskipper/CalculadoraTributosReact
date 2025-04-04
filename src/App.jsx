import { useState } from "react";
import Subtitulo from "./components/Subtitulo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculadora from "./components/Calculadora";
import Titulo from "./components/Titulo";
import main from "./images/main.png";

function App() {
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false);
  return (
    <>
      <div className="font-lato bg-[#eff3f5] min-h-screen flex flex-col justify-between items-center justify-center text-center text-[#333]">
        <Header />
        <div className="relative w-1/2 h-auto mb-8 mt-8">
          <img src={main} className="w-full h-auto rounded-md" />

          <h1>
            <Titulo />
          </h1>
        </div>

        <Subtitulo />
        <button
          className="bg-[#f0ce40] hover:bg-[#d3b538] border-none cursor-pointer text-white 
          font-bold py-5 px-7 rounded mb-8 mt-8 text-lg sm:text-xl"
          onClick={() => setMostrarCalculadora(true)}
        >
          Acessar Agora
        </button>

        {mostrarCalculadora && <Calculadora />}

        <Footer />
      </div>
    </>
  );
}

export default App;
