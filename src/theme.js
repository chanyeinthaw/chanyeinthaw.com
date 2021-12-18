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
        primaryAlpha: { main: 'rgba(10, 25, 47, 0.85)' }
    },
    typography: {
        fontFamily: 'Inter, "Fira Code", sans-serif'
    }
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
        MuiLink: {
            styleOverrides: {
                root: {
                    color: themeOptions.palette.text.hint,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    display: 'inline-block',

                    '&:hover:after, &active:after': {
                        width: '100%'
                    },

                    '&:after': {
                        content: '""',
                        display: 'block',
                        height: 1,
                        background: themeOptions.palette.text.hint,
                        width: 0,
                        transition: 'width 200ms linear'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderColor: themeOptions.palette.text.hint,
                    color: themeOptions.palette.text.hint,
                    textTransform: 'none',
                    fontFamily: '"Fira Code", sans-serif',

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