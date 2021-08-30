import React, { useEffect, useState } from 'react'
import {ChatContext} from './ChatProvider'
import Chat from './ChatLogic'
import { dbChat } from '../../../firebase/firebase'
import { useParams } from 'react-router-dom'
import { Avatar } from '@material-ui/core'



const ChatFake = () => {

    const {usuario} = React.useContext(ChatContext)
    const [dataEmail, setDataEmail] = useState();
    const [dataPhoto, setDataPhoto] = useState();
    
    const {id} = useParams();
   // console.log('identificador: '+id)
    const db = dbChat.ref('chats/');


    
    useEffect(() => {
        if(id){
            db.child(id).get().then((snapCom) => {
                if(snapCom.exists()){
                    const UserEmail = snapCom.val().email;
                    const foto = snapCom.val().foto;
                    setDataEmail(UserEmail);
                    setDataPhoto(foto);

                  //  console.log(snapCom.val().email)
                }
            })

/*TODO:mejorar version de datos del chat y mandar mensajes en el chat con el usuario 
*/
            /*db.orderByChild(id).equalTo(id).on('child_added' , (snapshot) => {
                console.log(snapshot.val().email);
                const UserEmail = snapshot.val().email;
                const foto = snapshot.val().foto;
                setDataEmail(UserEmail);
                setDataPhoto(foto);
            })*/
        }else{
            const UserEmail = "selecciona un contacto";
            setDataEmail(UserEmail);
        }

    
    }, [id, db])

    

    return usuario.activo !== null ? (
        <div>
            <div>
                <div className="id_chat">
                    <Avatar className="avatar" src={dataPhoto}/>
                    <div className="texto_email">
                        <p> {dataEmail}</p>
                    </div>    
                </div>
                
            </div>

            {
                usuario.activo ? (
                    <Chat idref={id}/>
                ) : (
                    <div className='text-center mt-5 lead'>
                        click en acceder para iniciar chat
                    </div>
                )
            }
        </div>
    ) : (<div>Cargando...</div>)
}

export default ChatFake