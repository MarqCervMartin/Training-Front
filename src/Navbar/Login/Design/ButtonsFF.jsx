import Button from '@material-ui/core/Button'
import google from '../../../img/svg_p/google.svg'
import gmail from '../../../img/svg_p/gmail.svg'
import { makeStyles } from '@material-ui/styles'
import {auth , provider}  from '../../../firebase/firebase'

const estilos = makeStyles(theme=> ({
    claseImg:{
        paddingRight: theme.spacing(5),
    },
    claseImg2:{
        paddingRight: theme.spacing(5),
    },
    root:{
        display: 'flex',
    },
    claseButton:{
        flexGrow: 1,
        marginTop: theme.spacing(8),
        marginRight: theme.spacing(64),
        marginLeft: theme.spacing(69),
        paddingRight: theme.spacing(6),
        borderRadius: theme.spacing(1)
    },
    claseButton2:{
        flexGrow: 1,
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(50),
        marginLeft: theme.spacing(69),
        paddingRight: theme.spacing(8),
        borderRadius: theme.spacing(1)
    }

}))



const ButtonsFF = () => {
        // Sign in with google

    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    const classes = estilos()

    return (
        <div>
            <div  className={classes.root}>

                <Button 
                    variant="contained" 
                    color="default"
                    className={classes.claseButton}
                    onClick={signin}
                >
                    <img 
                        src={google} 
                        alt="logoGoogle"    
                        className={classes.claseImg}        
                    />
                    Login With Google  
                </Button>
            </div>



            <div>
            <Button 
                    variant="contained" 
                    color="default"
                    className={classes.claseButton2}
                >
                    <img 
                        src={gmail} 
                        alt="logoGoogle"    
                        className={classes.claseImg2}        
                    />
                    Login With Email  
                </Button>
            </div>
                
            </div>
    )


}

export default ButtonsFF
