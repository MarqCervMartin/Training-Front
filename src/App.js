import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Link } from 'react-router-dom';
import PublicRoutes from './Porteccion/PublicRoutes';

/*
 contador con hooks

 usando los hooks se hizo dos botonos para entender el useState
 useState devuelve un par: el valor de estado actual y una función que le permite actualizarlo. 
 que es llamado dentro de un componente de funcion para gregar un estado
 puede llamar a esta funcion desde un controlador d eventos o desde otro lugar 
 video de ayuda: https://www.youtube.com/watch?v=PIPC6kKR6Xw&ab_channel=HolaMundo
*/ 



function App() {
   
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 >Uso de Hooks </h1>
      </header>
      <div>
        <Router>
            <ul>
              <li>
                  <Link to='/hook_useState'>Hook_State</Link></li>
              <li>
                <Link to='/hook_useEffect'>Hook_Effect</Link></li>
              <li>
                <Link to='/hooks_router'>Hooks</Link></li>            
            </ul>
            <PublicRoutes/>            
            <p></p>
        </Router>
      </div>                
    </div>
    
  );
}


export default App;
