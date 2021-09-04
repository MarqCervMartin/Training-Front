import React from 'react'

import {ChatContext} from './ChatProvider'
import SendMessage from './SendMessage'
import { dbChat } from '../../../firebase/firebase'

const ChatLogic = (props) => {

    const {usuario, mensajes} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    console.log(props.idref)
    const db = dbChat.ref(`chats/${props.idref}`);
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        if(refZonaChat.current !== null){
        //   console.log('useefecct', refZonaChat.current)
        //   console.log('scrollTop', refZonaChat.current.scrollTop)
        //   console.log('scrollHeight', refZonaChat.current.scrollHeight)
          refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
        }
      }, [mensajes])

    React.useEffect(() => {
        const messagesListener = db.orderByChild('createdAt')
          .limitToLast(20)
          .on('child_added', (snapshot) => {
              //console.log('********AGREGANDO************');
              setMessages((prevState) => [...prevState, snapshot.val()]);
          });
      return () => db.off('child_added', messagesListener);
    }, [props.idref]);

    console.log('Mensajes de Firebase : ', messages)
    return (
        <div 
            className='mt-3 px-2' 
            ref={refZonaChat} 
            style={{ height: '75vh', overflowY: 'scroll'}}
        >

            {
                messages.map((item, index) => (
                    item.uid === usuario.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}>
                            <span className="badge badge-pill badge-primary">{item.text}</span>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start mb-2" key={index}>
                            <span className="badge badge-pill badge-secondary">{item.text}</span>
                        </div>
                    )
                ))
            }

            <SendMessage channel={props.idref}/>
        
        </div>
    )
}

export default ChatLogic         