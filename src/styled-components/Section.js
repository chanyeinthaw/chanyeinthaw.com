import {styled} from "@mui/material";

const Section = styled('section')(props => ({
    padding: '0 150px',
    margin: '0 150px',

    [props.theme.breakpoints.down('xl')]: {
        padding: '0 100px',
        margin: '0 120px'
    },

    [props.theme.breakpoints.down('lg')]: {
        padding: '0 100px',
        margin: '0 0'
    },

    [props.theme.breakpoints.down('md')]: {
        padding: '0 50px',
    },

    [props.theme.breakpoints.down('sm')]: {
        padding: '0 25px',
    },
}))

export default Section