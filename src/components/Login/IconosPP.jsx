import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles, Typography } from '@material-ui/core';
import firebase from '../svg_p/firebase.svg'

const estilos = makeStyles(theme => ({
    colorW:{
        position: 'absolute',
        color: '#74D815',
        fontSize: 150,
        zIndex: -1,
    },
    content:{
        paddingLeft: theme.spacing(76),
        paddingTop: theme.spacing(5),
    },
    fireb:{
        position: 'absolute',
        zIndex: 1,
        paddingLeft: theme.spacing(12),
        paddingTop: theme.spacing(12),
    },

    textLogin:{
        paddingTop: theme.spacing(20),
        paddingLeft: theme.spacing(4),
    }

}))

const IconosPP = () => {
    const classes = estilos()
    return (
        <div>

            <div className={classes.content}>
                <WhatsAppIcon 
                    className={classes.colorW}
                />  

                <img 
                    src={firebase} 
                    alt="logoFirebase"
                    className={classes.fireb}
                />

                <Typography 
                    variant="h4" 
                    color="initial"
                    className={classes.textLogin}
                >
                    Login
                </Typography>
            </div>            

        </div>
    )
}

export default IconosPP
