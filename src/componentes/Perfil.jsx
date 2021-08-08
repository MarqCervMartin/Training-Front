import React from "react";
import {auth} from '../firebase';

const Perfil = () => {

    return (
        
        <div className="App">{            
            <img src={auth.currentUser.photoURL}/>
            
          } 
          <h1> <br/> </h1>
          <h2>User Name: </h2>
          <h1>{auth.currentUser.displayName}</h1>
          
          <h2> <br/> </h2>
          <h2>Email: </h2>
          <h1>{auth.currentUser.email}</h1>

        </div> 
    )
}

export default Perfil