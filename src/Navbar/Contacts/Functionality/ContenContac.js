import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, dbChat } from "../../../firebase/firebase";


function ContenContac({cont}) {
    const db = dbChat.ref('users/');//hacemos referencia al nodo 

    const [user] = useAuthState(auth);

    const deleteContac = () => {
        db.child(user.uid+'/contac/'+cont.id).remove();

    }
    return (
        <div className="col-md-3">  
            <div className="card  mt-3">
                {/* icono de avatar */}
                    <Avatar className="avatar" src={cont.foto} />
                    {
                        //pasamos el email atraves de cont.email
                    }
                    <p>{cont.name}</p>
                    <p>{cont.email}</p>
                    <div>
                        <IconButton>
                            {//botones de mensaje y de eliminar 
                            }
                            <ChatIcon className="" onclick="window.location.href='../componentes/chatFiles/Chat' "/>                            
                        </IconButton>

                        <IconButton>
                            <DeleteIcon className="" onClick={deleteContac}/>
                        </IconButton>
                
                </div>
            </div>
            
        </div>
    );
    
}

export default ContenContac;