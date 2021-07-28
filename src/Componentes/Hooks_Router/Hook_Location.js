
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";


function UseLocation(   ) {
    const return_clic = useHistory();
    

    const location = useLocation();
    const [loc,setLoc] = useState(location.pathname);
    const returnClic = () => {
        return_clic.push('/hooks_Router')
       
    }
    

    const checkLoc = () => {
       // const local = location.pathname;
        setLoc(loc);
        console.log(loc); 
        //setLoc(loc.useState(location.pathname))       
    }
    
   

   
    return (
        <div>

            <h2>Hook useLocation</h2>

             <p>
                 El hook useLocation devuelve el objeto de ubicacion
                 que representa la URL actual. Puede pensar en ello como un </p>
            <p>
                 useState que devuelve una nueva ubicacion cada vez que cambia la URL</p>

            

            <button type="button" onClick={returnClic}>
                Regresar
            </button>
            <h4>resultado = {loc} </h4>
            <button type="button" onClick={checkLoc}>
                Prueba de hook
            </button>
            <p>checa la consola :)</p>
            
        </div>
    );
}

export default UseLocation;
