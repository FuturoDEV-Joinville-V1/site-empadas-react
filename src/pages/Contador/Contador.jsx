import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  //let contador = 0

  function acrescentarValorContador() {
    console.log(contador)
    
    setContador(contador + 1) // imutabilidade
  }

  return (
    <div>
       <p>O valor atual do contador é {contador}</p>
      <button onClick={acrescentarValorContador}>Acrescentar</button>
    </div>
  );
}

export default Contador;
