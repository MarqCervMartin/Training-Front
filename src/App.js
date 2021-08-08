import React from "react";
import logo from './logo.svg';
import './App.css';
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
import Info from "./componentes/Info";
import Perfil from "./componentes/Perfil";
import PageNotFound from "./componentes/PageNotFound";
import Login from './componentes/Login';
import {auth} from './firebase';


function App() {
  const logout = () => {
		auth.signOut();
	}
  return (
    <Router>
      <div className="Container">
        <nav className="navbar navbar-dark bg-dark">
        <img src={logo} className="App-logo" alt="logo"/>
        <Link to="/perfil" className="text-white">Mi Perfil</Link>
          <div className="btn-group">
            <NavLink to="/Login" className="btn btn-dark" activeClassName="active">
              {
                auth.currentUser.email
              }              
            </NavLink>
            <NavLink to="/" className="btn btn-dark" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/contactos" className="btn btn-dark" activeClassName="active"> 
              Contactos
            </NavLink>
            <NavLink to="/chats" className="btn btn-dark" activeClassName="active">
              Chats
            </NavLink>
            <NavLink to="/info" className="btn btn-dark" activeClassName="active">
              Info
            </NavLink>


            <NavLink to="/info" className="btn btn-dark" activeClassName="active" onClick={logout}>                
                  Logout
            </NavLink>
            
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contactos" component={Contactos}/>
          <Route exact path="/chats" component={Chats}/>
          <Route exact path="/info" component={Info}/>
          <Route exact path="/perfil" component={Perfil}/>
          <Route exact path="/Login" component={Login}/>
          <Route component={PageNotFound}/>
        </Switch>  
      </div>
    </Router>
  );
}
export default App;
