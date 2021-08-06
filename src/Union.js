import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import FirstScreen from './components/Login/FirstScreen'
import ThirdScreen  from './components/Listo/ThirdScreen'


const Union = () => {
    const [user] = useAuthState(auth);
    return (
            user ? <ThirdScreen/> : <FirstScreen/>
        
    );
}

export default Union