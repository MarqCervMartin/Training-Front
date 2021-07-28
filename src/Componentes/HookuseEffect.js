import { useEffect, useState } from "react"
import '../../src/App.css';


function HookEffect() {

    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0)

    const incrementar= () =>{
        setCount(count + 1) 
    }

    const decrementar= () =>{
        setCount(count -1)
    }

    useEffect(() => {
        document.title= `# de clicks es ${count}̣`;

    });
        
    return (
        <div >
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
                    veces de clicks = {count} veces
                </p>          
                <button onClick={incrementar}
                >incremnetar clik's</button>

                <button onClick={decrementar}>
                    disminuir click's 
                </button>

                </div>

            <div>
                <button onClick={() => setShow(false)}>deja de mostrar</button>
                {show ? <CambiaColor /> : null}
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
  
  

export default HookEffect;