import {Switch } from "react-router-dom"
import { PrivateRoute } from "./Routes";


const PrivateRoutes = () =>{
    return(
        <Switch>
            <PrivateRoute/>
            
        </Switch>
    )
}

export default PrivateRoutes;