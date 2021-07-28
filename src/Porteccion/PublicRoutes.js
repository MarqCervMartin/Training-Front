import { Redirect, Switch } from "react-router-dom"
import { PublicRoute } from "./Routes"
import HookState from "../Componentes/HookuseState"
import HookEffect from "../Componentes/HookuseEffect"
import Hook from "../Componentes/Hooks"
import UseHistory from "../Componentes/Hooks_Router/Hook_history"
import UseLocation from "../Componentes/Hooks_Router/Hook_Location"


const PublicRoutes = () =>{
    return(
        <Switch>
            <PublicRoute exact path="/hook_useState" component={HookState} />
            <PublicRoute exact path="/hook_useEffect" component={HookEffect}/>
            <PublicRoute exact path="/hook_history" component={UseHistory}/>
            <PublicRoute exact path="/hook_location" component={UseLocation} />              
            <PublicRoute exact path="/hooks_router" component={Hook} />        
            <Redirect path="/**" to="/"/>
        </Switch>
    )
}

export default PublicRoutes;