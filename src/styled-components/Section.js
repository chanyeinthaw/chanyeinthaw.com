import {styled} from "@mui/material";

const Section = styled('section')(props => ({
    padding: '0 150px',

    [props.theme.breakpoints.down('md')]: {
        padding: '0 50px'
    },

    [props.theme.breakpoints.down('sm')]: {
        padding: '0 25px'
    },

    [props.theme.breakpoints.down('lg')]: {
        padding: '0 100px'
    }
}))

export default Section