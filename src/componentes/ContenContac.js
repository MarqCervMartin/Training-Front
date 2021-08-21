import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import DeleteIcon from '@material-ui/icons/Delete';
import { dbChat } from "../firebase";

function ContenContac({cont}) {
    const db = dbChat.ref('Contactos/');//hacemos referencia al nodo 

    const deleteContac = () => {
        db.child(cont.id).remove();

    }
    return (
        <div className="col-md-3">  
            <div className="card  mt-3">
                {/* icono de avatar */}
                    <Avatar className="avatar" />
                    {
                        //pasamos el email atraves de cont.email
                    }
                    <p>{cont.CORREO}</p>
                    <div>
                        <IconButton>
                            {//botones de mensaje y de eliminar 
                            }
                            <ChatIcon className=""/>
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