import { useHistory } from "react-router-dom";


function Hook() {

    const history = useHistory();

    const historyClic = () => {
        history.push(`/hook_history`)       
    }
    const locationClic = () => {
        history.push('/hook_location')
       
    }
   


    return (
        <div>
            da clic aquui en lo siguiente
            <h3 className="hooks_Router" type="button" onClick={historyClic}>
                Hook useHistory
            </h3>
            <h3 className="hooks_Router" type="button" onClick={locationClic}>
                Hook useLocation
            </h3>
            
        </div>
    );
}

export default Hook;
