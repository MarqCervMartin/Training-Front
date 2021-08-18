import React from 'react'
import {ChatContext} from '../context/ChatProvider'
import Chat from '../componentes/chatFiles/ChatLogico'


const ChatFake = () => {

    const {usuario} = React.useContext(ChatContext)

    return usuario.activo !== null ? (
        <div>
            {
                usuario.activo ? (
                    <Chat />
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
