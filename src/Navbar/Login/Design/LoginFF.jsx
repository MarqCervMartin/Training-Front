import IconosFF from './IconsFF'
import BotonesFF from './ButtonsFF'
import Loading from '../Functionality/Loading'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';

const LoginFF = () => {

    const [user,loading] = useAuthState(auth);
    if(loading) return <Loading/>
    return (
        <div>
            <IconosFF />
            <BotonesFF />
        </div>
    )
}

export default LoginFF
