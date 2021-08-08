import React from "react";
import {auth} from '../firebase';

const Perfil = () => {
    return (
        <div className="App">{
            auth.currentUser.photoURL 
          }   
        </div> 
    )
}

export default Perfil