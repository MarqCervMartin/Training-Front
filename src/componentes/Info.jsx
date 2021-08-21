import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import whatsapp from '../components/svg_p/whatsapp.svg'


const useStyles = makeStyles(theme =>({
    fondo:{
        
    },

    texto:{
        color: 'black',
        backgroundColor: '#B5F578',
        fontFamily: 'Century Gothic',
        fontSize: theme.spacing(4),
        marginTop: theme.spacing(9),
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        borderRadius: theme.spacing(3)
    },
    icono:{
        marginTop: theme.spacing(5),
        
    }
}))


const Info = () => {

    const classes = useStyles();


    return (
        <div className="App">
            <h1 className={classes.fondo} >

                <div className={classes.icono}>
                    <img src={whatsapp}/>
                </div>
                <h3 className={classes.texto}>
                    Esta aplicación fue realizada con React Hooks, en la cual su funcionamiento
                    es similar al de Whatsapp Web implementando un par de funciones extras.
                    Tomando en cuenta que todos lo realizamos sin saber mucho acerca del tema, es
                    por ello que pedimos una disculpa por errores que puedan suceder y las malas prácticas.
                </h3>
    
            </h1>
        </div> 
    )
}

export default Info