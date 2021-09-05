import React from 'react'

import { ChatContext } from './ChatProvider'
import { makeStyles } from "@material-ui/styles"
import Button from '@material-ui/core/Button'
import { dbChat } from '../../../firebase/firebase';

const estilos = makeStyles(theme => ({
    claseButton:{
        color: 'white',
        backgroundColor: 'red',
        border: '1px solid black'
    }

}))

const SendMessage = ({channel}) => {

    const classes = estilos();

    const {agregarMensaje, usuario} = React.useContext(ChatContext)

    const [mensaje, setMensaje] = React.useState('')
    const db = dbChat.ref(`chats/${channel}`);

    const formulario = e => {
        e.preventDefault()
        if(!mensaje.trim()){
            alert('texto vacío')
            return
        }
        agregarMensaje(usuario.uid, mensaje)
        //Agregar Firebase
        //console.log('Users Channel: ', channel)
        db.child('/mensajes/').push({
                id: Math.round(Math.random() * 1000000),
                uid: usuario.uid,
                text: mensaje,
                createdAt: new Date().getTime(),
                status: false,
                /* TODO: OBTENER AMBOS ID'S
                user: {
                _id: currentUser.uid,
                email: currentUser.email,
                },
                userRecived: {
                _id: uid,
                email: email,
                },

                */
            })
        .then((res) => {
          //Aqui despues de enviar mensaje
          //console.log('mensaje guardado');
        })
       // console.log(usuario);
        setMensaje('')
    }

    return (
        <form 
            className="input-group fixed-bottom p-3 bg-dark"
            onSubmit={formulario}
        >
            <input 
                type="text" 
                className="form-control"
                onChange={e => setMensaje(e.target.value)}
                value={mensaje}
                placeholder="Escribe un mensaje."
            />
            <div className="input-group-append">            
                <Button
                    type="submit"
                    variant="text" 
                    color="default"
                    className={classes.claseButton}
                >
                Enviar  
                </Button>
            </div>
        </form>
    )
}

export default SendMessage