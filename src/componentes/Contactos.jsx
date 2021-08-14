import React, { useEffect, useState } from "react";
import { dbChat } from "../firebase";
import ContenContac from "./ContenContac";


const Contactos = () => {
    /*optengo la ruta de ferencia del no 
    estoy haciendo pruebas asi ref podria cmabiar a 
    ref('user/contactos')
    */
    const db = dbChat.ref('Contactos/');

    const addFriends = () =>{    
        const emailUser = document.getElementById("email").value; //se optiene el valor del input
        document.getElementById("email").value ='';//limpiamos el imput
        if(!emailUser) return null; //si no hay nada no retorna nada
            
        /*contac guardara lso datos del email ingresado */
        const contac = {   
            //email: input,
            email: emailUser,              
        }
        db.push(contac);  //con push agregamos el conatco 

           
    }

    const [dataList, setDataList] = useState();

    useEffect(() => {
        db.on('value', (snapshot) => { //optenemos los valores del nodo conatctos
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
            Aqui estaran tus contactos
            </h1>
            <div class>
                <button onClick={addFriends} className="">Add friends</button>
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