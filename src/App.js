import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

/*
 contador con hooks

 usando los hooks se hizo dos botonos para entender el useState
 useState devuelve un par: el valor de estado actual y una función que le permite actualizarlo. 
 que es llamado dentro de un componente de funcion para gregar un estado
 puede llamar a esta funcion desde un controlador d eventos o desde otro lugar 
 video de ayuda: https://www.youtube.com/watch?v=PIPC6kKR6Xw&ab_channel=HolaMundo
*/ 



function App() {
  const [mostrar, setMostrar] = useState(true);
  const [contador, setContador] = useState(0)

  const incrementar= () =>{
    setContador(contador + 1) 
  }

  const decrementar= () =>{
    setContador(contador -1)
  }

  const [contador2, setContador2] = useState(0)

  const incrementar2= () =>{
    setContador2(contador2 + 1) 
  }

  const decrementar2= () =>{
    setContador2(contador2 -1)
  }

  useEffect(() => {
    document.title= `# de clicks es ${contador2}̣`;
    
  });
 
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <div className="useState_hook">
          uso de hook useState
          <p>
          contador con hooks

          usando los hooks se hizo dos botonos para entender el useState
          useState devuelve un par: el valor de estado actual y una función que le permite actualizarlo. 
          que es llamado dentro de un componente de funcion para gregar un estado
          puede llamar a esta funcion desde un controlador d eventos o desde otro lugar 
          video de ayuda: https://www.youtube.com/watch?v=PIPC6kKR6Xw&ab_channel=HolaMundo
          </p>
          <p>
            veces de clicks = {contador} veces
          </p>          
          <button onClick={incrementar}
          >incremnetar clik's</button>

          <button onClick={decrementar}>
            disminuir click's
          </button>
        </div>

        <div className="useEffect_hook">
          uso del hook useEffect
          <p>
            tiene la capacidad de realizar efectos secundarios desdeun 
            componente de funcion por ejemplo el componente establece el titulo del ducmuento desde 
            que react actualiza el DOM 
            Cunaod se llama a useEffect, se le esta diciendo a React que ejecute la funcion de efecto despues de vaciar los cambios en el Dom 
            video de ayuda https://www.youtube.com/watch?v=0_D8ruGVp20&ab_channel=Appdelante
          </p>
          <p>
            veces de clicks = {contador2} veces
          </p>          
          <button onClick={incrementar2}
          >incremnetar clik's</button>

          <button onClick={decrementar2}>
            disminuir click's 
          </button>

          <div>
            <button onClick={() => setMostrar(false)}>deja de mostrar</button>
            {mostrar ? <CambiaColor /> : null}
          </div>
          
        </div>
    </div>
  );
}

function CambiaColor() {
  const [color, setColor] = useState("blue");

  useEffect(()=>{
    function onMouseMove(evento) {
      if(evento.clientX < window.innerWidth / 2){
        setColor("blue");
      }else{
        setColor("red");
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return ()  =>{
      window.removeEventListener('mousemove', onMouseMove);
    };

  },[]);

  return <div style={{height:"50vh", width: "70vh", background: color, display:'flex'}}/>
}


export default App;
