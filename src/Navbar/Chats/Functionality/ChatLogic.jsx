import React from 'react'

import {ChatContext} from './ChatProvider'
import SendMessage from './SendMessage'

const ChatLogic = (props) => {

    const {usuario, mensajes} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    console.log(props.idref)

    React.useEffect(() => {
        if(refZonaChat.current !== null){
        //   console.log('useefecct', refZonaChat.current)
        //   console.log('scrollTop', refZonaChat.current.scrollTop)
        //   console.log('scrollHeight', refZonaChat.current.scrollHeight)
          refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
        }
      }, [mensajes])

    return (
        <div 
            className='mt-3 px-2' 
            ref={refZonaChat} 
            style={{ height: '75vh', overflowY: 'scroll'}}
        >

            {
                mensajes.map((item, index) => (
                    item.uid === usuario.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}>
                            <span className="badge badge-pill badge-primary">{item.texto}</span>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start mb-2" key={index}>
                            <span className="badge badge-pill badge-secondary">{item.texto}</span>
                        </div>
                    )
                ))
            }

            <SendMessage />
        
        </div>
    )
}

export default ChatLogic         