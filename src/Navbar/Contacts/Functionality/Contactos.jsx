import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, dbChat } from "../../../firebase/firebase";
import ContenContac from "./ContenContac";
import Button from '@material-ui/core/Button'


const Contactos = () => {
    /*obtengo la ruta de ferencia del no 
    estoy haciendo pruebas asi ref podria cmabiar a 
    ref('user/contactos')
    */
    const db = dbChat.ref('users/');
    //const dbUsers = dbChat.ref('users/')
    const [user] = useAuthState(auth);

    const addFriends = () =>{    
        const emailUser = document.getElementById("email").value; //se obtiene el valor del input
        document.getElementById("email").value ='';//limpiamos el imput
        if(!emailUser) return null; //si no hay nada no retorna nada
            
        /*se hace un tipo query donde busca el correo ingresado */
        //el correo que busca debe de ser igual a emailUser
        db.orderByChild('email').equalTo(emailUser).on('child_added' , (snapshot) => {
            /*console.log(snapshot.key);//comprobamos el uid
            console.log(snapshot.val().name);//el nombre
            console.log(snapshot.val().email);//el email
            console.log(snapshot.val().foto);//la foto */
            if(emailUser === user.email){
                //console.log('correo no valido ingrese otro ');
                alert('No te puedes agregar a ti mismo  ');
            }else{
                db.child(user.uid+'/contac/').orderByChild('email').equalTo(emailUser).get().then((snapCom) => {
                    if(snapCom.exists()){
                        console.log(snapCom.val())
                        alert('contacto ya registrado')
                    }else{

                        const contac = {   
                            //le pasamos los datos a contac
                            email: snapshot.val().email,
                            name: snapshot.val().name,
                            foto: snapshot.val().foto,
                            userid : snapshot.val().uid
                        }
                        //sube los datos a realDatabaseen la ruta especificada 
                        db.child(user.uid+'/contac/').push(contac);  //con push agregamos el conatco 
                        alert("contacto registrado con exito ");
                    }
                })
            }         
        })
    } 

    const [dataList, setDataList] = useState();

    useEffect(() => {

        db.child(user.uid+'/contac/').on('value', (snapshot) => { //optenemos los valores del nodo conatctos
            const data = snapshot.val();    //se los agremamos aa data
            const dataList = [];
            for(let id in data){//recorrer lso datos
                dataList.push({id, ...data[id]}); //agregamos el id y data a datalist
            }
            //console.log(dataList);
            setDataList(dataList);//asignamos los valores a data list de useState
        })

    },[])
          
    return (
        <div className="App">
            <h1 className="text-white">
            Tus Contactos
            </h1>
            <div class>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={addFriends}
                    className=""
                >
                  Add Contact
                </Button>
                
                <input className="inputEmail" placeholder='email' id="email"></input>
            </div>


            
            <div className='container'>                                                
                <div className='row mt-1'>
                {dataList ? dataList.map((cont, index) => //hace mapeo de los datos en cont que sera el contenido
                    <ContenContac cont={cont} key={index}/>): ''}  
                    {//se llama el componente ContenConatc y pasamos los valores
                    }
                </div>
                
                
                
            </div>
            
        </div> 
    )
}

export default Contactos;