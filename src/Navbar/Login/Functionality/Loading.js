import IconosFF from '../Design/IconsFF'
import {Circle} from 'better-react-spinkit'

function Loading() {
    return (
        <div>
           <IconosFF style={{marginRight: 500}}/>
            <center >
                <div >
                    
                    <Circle color ="#3CBC28" size={150} />
                </div>
            </center>
        </div>
    );
}

export default Loading;