import { makeStyles } from '@material-ui/styles';
import whatsapp from '../svg_p/whatsapp.svg'
import Typography from '@material-ui/core/Typography'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

const estilos = makeStyles(theme => ({
    root:{
        display: 'flex',
        paddingLeft: theme.spacing(55),
        marginTop:  theme.spacing(16),
    },
    claseImg:{
        paddingRight: theme.spacing(20),
        marginLeft:  theme.spacing(14),
    },    
    claseTypo:{
        flexGrow: 1,
        marginTop: theme.spacing(8)
    },
    relojArena:{
        marginTop:  theme.spacing(10),
        marginLeft: theme.spacing(75),
        fontSize: 150
    }
}))


const BotonesSp = () => {

    const classes = estilos()

    return (
        <div>

            <div className={classes.root}>
                
                <Typography 
                    variant="h3" 
                    color="initial"
                    className={classes.claseTypo}
                >
                    Conectando...    
                    <img 
                            src={whatsapp} 
                            alt="logoWhatsapp"    
                            className={classes.claseImg}        
                    />
                </Typography>
            </div>

            <DirectionsRunIcon 
                className={classes.relojArena}
            />

        </div>
    )
}

export default BotonesSp
