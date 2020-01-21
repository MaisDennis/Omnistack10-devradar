import React, { useState } from 'react';

// Component: Bloco isolado de HTML, CSS, e JS que não interfere no restante da aplicação;
// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade).

import Header from './Header';

function App() {

  const [ counter, setCounter ] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }


  return (
    <>
      <Header title="Dashboard"/>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
