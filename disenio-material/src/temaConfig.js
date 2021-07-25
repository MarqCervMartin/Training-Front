import { createTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

const theme = createTheme({
    palette: {
        primary: {
            main: purple[700]
        }
    }
})

export default theme;