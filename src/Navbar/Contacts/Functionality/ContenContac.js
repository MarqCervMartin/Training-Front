import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, dbChat } from "../../../firebase/firebase";


function ContenContac({cont}) {
    const db = dbChat.ref('users/');//hacemos referencia al nodo 
    const dbc = dbChat.ref('chats/');//hacemos referencia al nodo chats

    const [user] = useAuthState(auth);

    const deleteContac = () => {

        const confirmation = window.confirm("estas seguro eliminar a tu contatco");

        if(confirmation){
            db.child(user.uid+'/contac/'+cont.id).remove();
            alert('contacto eliminado')
        }else{
            alert('contacto no eliminado ')
        }

    }


    console.log("usuairo "+cont.userid);
    const useridChat = cont.userid; 

    const pageChat = useHistory();
    //console.log(pageChat)

    const idChat = user.uid+"-"+ useridChat;
    const clickChat = () => {

        dbc.child(idChat).set({
            email: cont.email,
        })
        console.log(useridChat);
        pageChat.push(`/chats/${useridChat}`);
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
                            <ChatIcon className="" onClick={clickChat}/>
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