import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './temaConfig'
import Union from './Union'

function App() {
return (
	
		<ThemeProvider theme={theme}>
			<Union />
		</ThemeProvider>
	
);
}

export default App;
