import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({component, ...options})=>{

    const isAuth = true;
    if (!isAuth) return <Route {...options} component={component}/>
    return <Redirect to="/login" />        

}

export const PublicRoute = ({component, ...options})=>{

    const isAuth = false;
    if (!isAuth) return <Route {...options} component={component}/>
    return <Redirect to="/" />        

}





