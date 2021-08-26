import React from 'react';
import {auth} from '../../../firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import LoginFF from '../../Login/Design/LoginFF'
import Navbar from '../../Navbar';



const UnionLoginNavbar = () => {
    const [user] = useAuthState(auth);
    return (
            user ? <Navbar/> : <LoginFF/>
        
    );
}

export default UnionLoginNavbar