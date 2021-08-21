import React from "react";
import {auth} from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( theme =>({
    root: {
        maxWidth: 345,
        paddingTop: theme.spacing(4), 
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(65),
        backgroundColor: '#69B1F1',
        borderRadius: theme.spacing(3)
      },
      media: {
        marginLeft: theme.spacing(4),
        height: 280,
        width: 280,
      },
      texto: {
          fontFamily: 'Courier New',
          color: 'black',
      },
}))



const Perfil = () => {
    const classes = useStyles();

    return (
        
        <div className="App">

    <Card className={classes.root}>
      <CardActionArea>      
        <CardMedia
          className={classes.media}
          image = {auth.currentUser.photoURL}
          title="Contemplative Reptile"
        />
        
        <CardContent className={classes.texto}>
          <Typography gutterBottom variant="h1" component="h2">
          <h3>{auth.currentUser.displayName}</h3>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.texto}>
            <h6>{auth.currentUser.email}</h6>
          </Typography>
        </CardContent>
      </CardActionArea>      
    </Card>


        </div> 

    )
}

export default Perfil


/*
          <h1> <br/> </h1>
          <h2>User Name: </h2>
          <h1>{auth.currentUser.displayName}</h1>
          
          <h2> <br/> </h2>
          <h2>Email: </h2>
          <h1>{auth.currentUser.email}</h1>

*/