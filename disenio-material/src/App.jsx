import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import FirstScreen from './components/Login/FirstScreen'
import SecondScreen from './components/Conectando/SecondScreen'
import ThirdScreen  from './components/Listo/ThirdScreen'

function App() {
  return (
    <div>
          <ThemeProvider theme={theme}>
            <FirstScreen/>
          </ThemeProvider>
    </div>
  );
}

export default App;

/*

<FirstScreen/>
<SecondScreen/>
<ThirdScreen/>

*/