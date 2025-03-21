import React, { useState } from "react";

function numeroAleatorio() {
  let [numeroAleatorio, setNumeroAleatorio] = useState("");

  function trocarNumeroAleatorio() {
    setNumeroAleatorio(Math.random());
  }

  return (
    <>
      <div>
        <p>{numeroAleatorio}</p>
        <button
          className="bg-[#666666] hover:bg-[#888888] border-none cursor-pointer text-white font-bold 
          py-2 px-4 rounded mb-4"
          onClick={trocarNumeroAleatorio}
        >
          New random number
        </button>
      </div>
    </>
  );
}

export default numeroAleatorio;
