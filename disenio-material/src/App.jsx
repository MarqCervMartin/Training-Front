// IMPORTANDO UN BOTON
//import Button from '@material-ui/core/Button'

//SEGUNDA OPCION PARA IMPORTAR
//import {Button} from '@material-ui/core'

//IMPORTANDO ICONOS
import DeleteIcon from '@material-ui/icons/Delete';
import {Button, IconButton, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import { buildQueries } from '@testing-library/dom';

const useStyle = makeStyles(
  {
    gus : {
      background: 'blue',
      borderRadius: 3,
      padding: '0 30px',
    }
  }
)

function App() {

  const classes = useStyle();

  return (
    <div>       
      <Button className={classes.gus}>
        Mi boton personalizado
      </Button>
    </div>


  );
}

export default App;

/*
USANDO BOTONES
      <Button color="default">
        Color
      </Button>

      <Button variant="contained" color="secondary">
        Containded
      </Button>

      <Button variant="contained" color="secondary" disableElevation>
        Sin Sombra
      </Button>

      <Button variant="contained" color="secondary" href="https://google.com">
        href
      </Button>

      <Button variant="contained" color="secondary" fullWidth>
        fullwidth
      </Button>

      <Button variant="contained" color="secondary" size="small">
        small
      </Button>

      <Button variant="contained" color="secondary" size="medium">
        medium
      </Button>

      <Button variant="contained" color="secondary" size="large">
        large 
      </Button>


USANDO ICONOS      
      <Button 
        variant="contained" 
        color="secondary" 
        startIcon={<DeleteIcon/>}
      >
        Delete
      </Button>

      <IconButton 
        aria-label="delete"         
      >        
        <DeleteIcon color="primary"/>
      </IconButton>



USANDO TIPOGRAFIAS
      <Typography 
        variant="h1" 
        color="primary"      
      >
        holaaa h1
      </Typography>

      <Typography 
        variant="body1" 
        color="secondary"      
        align="center"
        paragraph     
      >
        lorem
      </Typography>

      <Typography 
        variant="body1" 
        color="primary"
        align="center" 
      >
        holaaa2 h1
      </Typography>



*/