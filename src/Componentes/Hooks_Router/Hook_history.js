import { useHistory } from "react-router-dom";


function UseHistory(   ) {
    const return_clic = useHistory();
    
    const returnClic = () => {
        return_clic.push('/hooks_Router')
       
    }

    return (
        <div>
             <p>
            El gancho useHistory le da acceso a la instancia del historial que puede usar para navegar.
            </p>

            <p>Este hook se esta usando para pasar entre secciones del ejemplo </p>

            <p></p>

            <button type="button" onClick={returnClic}>
                Regresar
            </button>
        </div>
    );
}

export default UseHistory;