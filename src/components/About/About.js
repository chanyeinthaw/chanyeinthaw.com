import StyledSection from "../../styled-components/Section";
import {Link, styled, Typography} from "@mui/material";
import {forwardRef} from "react";
import me from '../../images/me.png'
import {CircleOutlined} from "@mui/icons-material";

function About(_, ref) {
    return (
        <Section id={'#about'} ref={ref}>
            <Title variant={'h4'} color={'text.primary'}>About Me</Title>
            <AboutArea>
                <Typography variant={'body1'}>
                    Hello my name is Chan and I create web applications and APIs. I started web development back in 2017 when I decided to build APIs with Laravel.
                </Typography>

                <Typography variant={'body1'}>
                    Fast-forward to today, and I’ve had the privilege of working at various tech-companies. My main focus these days is building scalable-fast APIs, pixel perfect web applications and building/maintaining servers at <Link>Pyxis Technologies</Link> for a variety of clients.
                </Typography>

                <Typography variant={'body1'}>
                    Here are few technologies I've been working with recently:
                </Typography>

                <Languages>
                    <div>
                        <CircleOutlined />
                        <Typography variant={'body1'} color={'text.secondary'}>JavaScript</Typography>
                    </div>
                    <div>
                        <CircleOutlined />
                        <Typography variant={'body1'} color={'text.secondary'}>TypeScript</Typography>
                    </div>
                    <div>
                        <CircleOutlined />
                        <Typography variant={'body1'} color={'text.secondary'}>Node.js</Typography>
                    </div>
                    <div>
                        <CircleOutlined />
                        <Typography variant={'body1'} color={'text.secondary'}>React</Typography>
                    </div>
                    <div>
                        <CircleOutlined />
                        <Typography variant={'body1'} color={'text.secondary'}>PHP</Typography>
                    </div>
                    <div>
                        <CircleOutlined />
                        <Typography variant={'body1'} color={'text.secondary'}>Laravel</Typography>
                    </div>
                </Languages>
            </AboutArea>

            <ImageArea>
                <img src={me} alt="me"/>
            </ImageArea>
        </Section>
    )
}

export default forwardRef(About)

const Languages = styled('div')( props => ({
    display: 'grid',
    gridTemplateColumns: 'max-content max-content',
    rowGap: 8,
    columnGap: 40,

    '& div': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },

    '& svg': {
        color: props.theme.palette.text.hint,
        fontSize: 12
    },

    '& p': {
        fontFamily: '"Fira Code", sans-serif'
    }
}))

const ImageArea = styled('div')( props => ({
    gridArea: 'image',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    justifySelf: 'center',
    justifyContent: 'center',

    '& img': {
        width: 500,
        height: 500,
        borderRadius: 4,

        '&:hover': {
            boxShadow: `2px 2px 8px 4px rgba(2,12,27,0.7)`
        },

        [props.theme.breakpoints.down('xl')]: {
            width: 300,
            height: 300
        },

        [props.theme.breakpoints.down('md')]: {
            width: 240,
            height: 240
        },

        [props.theme.breakpoints.down('sm')]: {
            width: 270,
            height: 270
        },

        [props.theme.breakpoints.down('xs')]: {
            width: 200,
            height: 200
        }
    },

    [props.theme.breakpoints.down('sm')]: {
        marginTop: 32,
        gridArea: 'unset',
    },
}))

const AboutArea = styled('div')( props => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    gridArea: 'about',
    '& p': { color: props.theme.palette.text.disabled },

    '& a': { color: props.theme.palette.text.hint },

    [props.theme.breakpoints.down('sm')]: {
        gridArea: 'unset',

        '& p': {
            fontSize: 14
        }
    }
}))

const Title = styled(Typography)( props => ({
    gridArea: 'title',
    fontWeight: 500,

    '&:before': {
        content: '"01. "',
        fontFamily: '"Fira Code", sans-serif',
        fontSize: 30,
        color: props.theme.palette.text.hint
    },

    [props.theme.breakpoints.down('sm')]: {
        gridArea: 'unset',
        fontSize: 24,

        '&:before': {
            fontSize: 22
        }
    }
}))

const Section = styled(StyledSection)(props => ({
    gridTemplateAreas: `
        "title ."
        "about image"
    `,
    alignContent: 'center',
    gap: 40,

    [props.theme.breakpoints.down('sm')]: {
        gridTemplateAreas: 'unset',
        gridAutoFlow: 'row',
    }
}))

