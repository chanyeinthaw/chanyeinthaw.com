import {createTheme} from "@mui/material";

export const themeOptions = {
    palette: {
        type: 'light',
        primary: {main: 'rgb(10, 25, 47)', contrastText: 'rgb(100, 255, 218)',},
        secondary: {main: 'rgb(17, 34, 64)', contrastText: 'rgb(100, 255, 218)',},
        text: {
            primary: 'rgb(204, 214, 246)',
            secondary: 'rgb(136, 146, 176)',
            hint: 'rgb(100, 255, 218)',
            disabled: 'rgb(136, 146, 176)',
        },
        background: {default: 'rgb(10, 25, 47)', paper: 'rgb(17, 34, 64)',},
    },
};

const componentStyles = {
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: themeOptions.palette.text.primary
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderColor: themeOptions.palette.text.hint,
                    color: themeOptions.palette.text.hint,
                    textTransform: 'none',

                    '&:hover': {
                        borderColor: themeOptions.palette.text.hint,
                        background: 'rgba(100,255,218,0.1)'
                    }
                }
            }
        }
    }
}

export const theme = createTheme({ ...themeOptions, ...componentStyles })