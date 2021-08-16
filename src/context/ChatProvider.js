import React from 'react'
import {auth, provider, db} from '../firebase'

export const ChatContext = React.createContext()

const ChatProvider = (props) => {

    const dataUsuarioInicial = {email: null, uid: null, activo: null}
    const [usuario, setUsuario] = React.useState(dataUsuarioInicial)
    const [mensajes, setMensajes] = React.useState([])

    React.useEffect(() => {
        detectarUsuario()
    }, [])
    
    const detectarUsuario = () => {
        auth.onAuthStateChanged(userChange => {
            if(userChange){
                // console.log(userChange)
                setUsuario({email: userChange.email, uid: userChange.uid, activo: true})
                cargarMensajes()
            }else{
                // console.log(userChange)
                setUsuario({email: null, uid: null, activo: false})
            }
        })
    }

    const iniciarSesion = async() => {
        try {
            const res = await auth.signInWithPopup(provider)
            
        } catch (error) {
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    const cargarMensajes = () => {
        db.collection('messages').orderBy('fecha')
        .onSnapshot(query => {
            const arrayMensajes = query.docs.map(item => item.data())
            setMensajes(arrayMensajes)
        })
    } 

    const agregarMensaje = async (uid, texto) => {
        try {
            await db.collection('messages').add({
                uid: uid,
                texto: texto,
                fecha: Date.now()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ChatContext.Provider value={{usuario, iniciarSesion, cerrarSesion, mensajes, agregarMensaje}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider