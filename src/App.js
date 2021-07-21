import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

/*
 contador con hooks

 usando los hooks se hizo dos botonos para entender el useState
 useState devuelve un par: el valor de estado actual y una función que le permite actualizarlo. 
 que es llamado dentro de un componente de funcion para gregar un estado
 puede llamar a esta funcion desde un controlador d eventos o desde otro lugar 
*/ 



function App() {
  const [contador, setContador] = useState(0)

  const incrementar= () =>{
    setContador(contador + 1) 
  }

  const decrementar= () =>{
    setContador(contador -1)
  }
 
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <div className="useState_hook">
          uso de hook useStae
          <p>
            veces de clicks = {contador} veces
          </p>          
          <button onClick={incrementar}
          >dame click</button>

          <button onClick={decrementar}>
            decrementar
          </button>
        </div>
    </div>
  );
}

export default App;
