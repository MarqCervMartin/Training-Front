import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./componentes/Home";
import Chats from "./componentes/Chats";
import Contactos from "./componentes/Contactos";

function App() {
  return (
    <Router>
      <div className="Container">
        <div className="btn-group">
        <Link to="/" className="btn btn-dark">
            Home
          </Link>
          <Link to="/contactos" className="btn btn-dark"> 
            Contactos
          </Link>
          <NavLink to="/chats" className="btn btn-dark" activeClassName="active">
            Chats
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route> 
          <Route path="/contactos">
            <Contactos />
          </Route> 
          <Route path="/chats">
            <Chats />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
