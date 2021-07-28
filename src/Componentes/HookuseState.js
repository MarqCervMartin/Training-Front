import { useState } from "react";
import '../../src/App.css';


function HookState() {
    const [count, setCount] = useState(0);

    const incrementar= () =>{
        setCount(count + 1) 
    }

    const decrementar= () =>{
    setCount(count -1)
    }
    return (
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
            veces de clicks = {count} veces
          </p>          
          <button onClick={incrementar}>
            incremnetar clik's
          </button>

          <button onClick={decrementar}>
            disminuir click's
          </button>
        </div>
    );
}

export default HookState;