import { createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"

export const primaryColor = '#e1cdb4'
export const secondaryColor = '#e0e0e0'

export const webTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#e1e1e1'
        },
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        },
        info: {
            main: grey[100]
        }
    }
})
