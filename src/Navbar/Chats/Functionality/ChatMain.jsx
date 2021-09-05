import React, { useEffect, useState } from 'react'
import {ChatContext} from './ChatProvider'
import Chat from './ChatLogic'
import { auth, dbChat } from '../../../firebase/firebase'
import { useParams } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { useAuthState } from 'react-firebase-hooks/auth'



const ChatFake = () => {

    const {usuario} = React.useContext(ChatContext)
    const [dataEmail, setDataEmail] = useState();
    const [dataPhoto, setDataPhoto] = useState();
    const [user] = useAuthState(auth);
    
    const {id} = useParams();
   // console.log('identificador: '+id)
    const db = dbChat.ref('chats/');
    const dbu = dbChat.ref('users/');


    
    useEffect(() => {
        if(id){
            db.child(id).get().then((snapCom) => {
                if(snapCom.exists()){
                    const data = snapCom.val();
                    const dataList = [];
                    for(let id in data){//recorrer lso datos
                        dataList.push({id, ...data[id]}); //agregamos el id y data a datalist
                    }

                    if(dataList[0].email !== user.email){
                       // console.log('email1',dataList[0].email)
                        dbu.orderByChild('email').equalTo(dataList[0].email).on('child_added' , (snapshot) => {
                            //console.log(snapshot.key);
                            setDataEmail(snapshot.val().email);
                            setDataPhoto(snapshot.val().foto);                           
                        })
                        
                    }else{
                        //console.log('email2',dataList[1].email)
                        dbu.orderByChild('email').equalTo(dataList[1].email).on('child_added' , (snapshot) => {
                            //console.log(snapshot.key);
                            //console.log(snapshot.key);
                            setDataEmail(snapshot.val().email);
                            setDataPhoto(snapshot.val().foto);
                                 
                        })
                    }
                }
            })


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