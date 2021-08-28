import React, { useEffect } from "react";
import logo from '../logo.svg';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./Home/Design/Home";
//import Chats from "./componentes/Chats";
import Contactos from "./Contacts/Functionality/Contactos";
import Info from "./Info/Design/Info";
import Perfil from "./Perfil/Design/Perfil";
import PageNotFound from "./PageNotFound/PageNotFound";
import Login from './Login/Functionality/Login';
import {auth, dbChat} from '../firebase/firebase';
import ChatMain from './Chats/Functionality/ChatMain'
import { useAuthState } from 'react-firebase-hooks/auth';


function Navbar() {

  const db = dbChat.ref('users/');

  const [user] = useAuthState(auth);
  useEffect(() => {

    if(user){
      //console.log('prueba '+ db)
      //verifico si la ruta existe pero si no 
      db.child(user.uid).get().then( (snapshot) => {
        if(snapshot.exists()){
          console.log('si existe');
          //cual exista la ruta no hara nada
          /*db.orderByChild(user.uid).on('child_added',(snapshot) => {//se hace un tipo query donde busca en fire base real database el uid del usuario logueado
            const idUser = snapshot.key;//obtenemos el uid del usuario
            console.log(idUser);    //comprobamso que si es el  uid 
            if(user.uid === idUser) { //comprobamos si el uid de user.uid  e igual al idUser  de la DB 
              //manda mensae en consola de ya regsiutrado
              console.log('ya se registro en la base de datos')
    
            }else{
              console.log('registrando usuarios en base de datos')
              /*pero si no, se hace un set para agregarlo pasando el email
              nobre su foto el uida entra otros datos*
              db.child(user.uid).set({
                email: user.email,
                name: user.displayName,
                foto: user.photoURL,        
                uid: user.uid ,
                contac: '',
                grupos:  '' 
        
              })
            }
          })*/

        }else{
          //la crea solo una vez con db.child(user.uid).set({
          console.log('no existe')
          db.child(user.uid).set({
            email: user.email,
            name: user.displayName,
            foto: user.photoURL,        
            uid: user.uid ,
            contac: '',
            grupos:  '' 
    
          })
          
        }
      })


       
    }
  },[])


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
            <NavLink to="/perfil" className="btn btn-dark" activeClassName="active">
              {
                auth.currentUser.photoURL ? 
                <img src={auth.currentUser.photoURL} className="App-logo" alt="logo"/> : <img src={logo} className="App-logo" alt="logo"/>
                //const photoURL = user.photoURL;
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
          <Route exact path="/chats" component={ChatMain}/>
          <Route exact path="/info" component={Info}/>
          <Route exact path="/perfil" component={Perfil}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/chats/:id" children={<ChatMain/>}/>
          <Route component={PageNotFound}/>
        </Switch>  
      </div>
    </Router>
  );
}
export default Navbar;
