import React, { useState } from "react";

function Calculadora() {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [resultado, setResultado] = useState("");
  let [operacao, setOperacao] = useState("selecioneOperacao");

  function calcular() {
    if (operacao === "soma") {
      setResultado(num1 + num2);
    } else if (operacao === "subtracao") {
      setResultado(num1 - num2);
    } else if (operacao === "multiplicacao") {
      setResultado(num1 * num2);
    } else if (operacao === "divisao") {
      setResultado(num1 / num2);
    } else if (operacao === "selecioneOperacao") {
      setResultado(alert("Selecione uma operação"));
    }

    console.log(operacao);
  }
  return (
    <>
      <div className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md w-full max-w-md mx-auto">
        <h3 className="">Calcule aqui:</h3>
        <label>Primeriro Numero: </label>
        <input
          className="border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <label>Segundo Numero: </label>
        <input
          className="border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />

        <select
          className="border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500"
          value={operacao}
          onChange={(e) => setOperacao(e.target.value)}
        >
          <option value="selecioneOperacao">Selecione a operação</option>
          <option value="soma">Soma</option>
          <option value="subtracao">Subtração</option>
          <option value="multiplicacao">Multiplicação</option>
          <option value="divisao">Divisão</option>
        </select>

        <button
          className="bg-[#666666] hover:bg-[#888888] border-none cursor-pointer text-white 
          font-bold py-2 px-4 rounded"
          onClick={calcular}
          type="submit"
        >
          Calcular
        </button>

        <p>Resultado: {resultado}</p>
      </div>
    </>
  );
}

export default Calculadora;
