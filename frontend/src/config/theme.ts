import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        primary: {
            main: "#d6ee00",
            contrastText: "#444"
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    color: '#444'
                }
            }
        }
    }
});