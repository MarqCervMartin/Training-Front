
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import FirstScreen from './components/Login/FirstScreen'
import SecondScreen from './components/Conectando/SecondScreen'
import ThirdScreen  from './components/Listo/ThirdScreen'

function App() {
  return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
        </header>

      <ThemeProvider theme={theme}>
          <FirstScreen/>
      </ThemeProvider>
      
      </div>





  );
}

export default App;
/*

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
        </header>
      </div>
    );
  }
}
export default App;

*/