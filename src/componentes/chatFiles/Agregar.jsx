import React from 'react'
import {auth, provider, db} from '../../firebase'

import {ChatContext} from '../../context/ChatProvider'

const Agregar = () => {

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
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default Agregar