import React from 'react'

import { ChatContext } from './ChatProvider'
import { makeStyles } from "@material-ui/styles"
import Button from '@material-ui/core/Button'


const estilos = makeStyles(theme => ({
    claseButton:{
        color: 'white',
        backgroundColor: 'red',
        border: '1px solid black'
    }

}))

const SendMessage = () => {

    const classes = estilos();

    const {agregarMensaje, usuario} = React.useContext(ChatContext)

    const [mensaje, setMensaje] = React.useState('')

    const formulario = e => {
        e.preventDefault()
        if(!mensaje.trim()){
            alert('texto vacío')
            return
        }
        agregarMensaje(usuario.uid, mensaje)
        console.log(usuario);
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