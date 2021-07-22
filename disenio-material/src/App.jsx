// IMPORTANDO UN BOTON
//import Button from '@material-ui/core/Button'

//SEGUNDA OPCION PARA IMPORTAR
//import {Button} from '@material-ui/core'

//IMPORTANDO ICONOS
import DeleteIcon from '@material-ui/icons/Delete';
import {Button, IconButton, Typography} from '@material-ui/core';

function App() {
  return (
    <div>       
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



    </div>


  );
}

export default App;

/*
PRUEBAS BOTONES
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


ICONOS      
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


*/