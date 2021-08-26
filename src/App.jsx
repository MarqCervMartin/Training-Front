import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './MaterialUI_Tema/temaConfig'
import UnionLoginNavbar from './Navbar/Login/Functionality/UnionLoginNavbar'

function App() {
return (
	
		<ThemeProvider theme={theme}>
			<UnionLoginNavbar />
		</ThemeProvider>
	
);
}

export default App;
