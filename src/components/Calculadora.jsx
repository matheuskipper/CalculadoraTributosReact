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
      <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md w-full max-w-md mx-auto mb-8 mt-8">
        <h3 className="">Calcule aqui:</h3>
        <label>Valor Base (R$): </label>
        <input
          className="border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <label>Selecione o tributo: </label>
        <select
          className="border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
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
          font-bold py-2 px-4 rounded"
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
