import React, { useState } from "react";

function Calculadora() {
  let [num1, setNum1] = useState("");
  let [resultado, setResultado] = useState("");
  let [operacao, setOperacao] = useState("selecioneOperacao");

  function calcular() {
    let valorBase = parseFloat(num1);

    if (isNaN(valorBase)) {
      alert("Digite um número válido");
      return;
    }

    let imposto = 0;

    if (operacao === "ISS") {
      imposto = (valorBase * 5) / 100;
    } else if (operacao === "ICMS") {
      imposto = (valorBase * 18) / 100;
    } else if (operacao === "IR") {
      imposto = (valorBase * 7.5) / 100;
    } else if (operacao === "selecioneOperacao") {
      alert("Selecione um tributo");
      return;
    }

    let total = valorBase + imposto;
    setResultado(
      `Imposto: R$ ${imposto.toFixed(2)} | Valor Total: R$ ${total.toFixed(2)}`
    );
  }
  return (
    <>
      <div className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mb-12 mt-12 min-h-[400px]">
        <h3 className="text-x1 font-bold">Calcule aqui:</h3>
        <label className="text-left font-medium">Valor Base (R$): </label>
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <label className="text-left font-medium">Selecione o tributo: </label>
        <select
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          value={operacao}
          onChange={(e) => setOperacao(e.target.value)}
        >
          <option value="selecioneOperacao">Selecione um tributo</option>
          <option value="ISS">ISS (5%)</option>
          <option value="ICMS">ICMS (18%)</option>
          <option value="IR">IR (7.5%)</option>
        </select>

        <button
          className="bg-[#f0ce40] hover:bg-[#d3b538] border-none cursor-pointer text-white 
          font-bold py-3 px-6 rounded"
          onClick={calcular}
          type="submit"
        >
          Calcular
        </button>

        <p>{resultado}</p>
      </div>
    </>
  );
}

export default Calculadora;
