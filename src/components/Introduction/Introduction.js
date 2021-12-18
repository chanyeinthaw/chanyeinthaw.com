import {Link, styled, Typography} from "@mui/material";
import StyledSection from '../../styled-components/Section'

export default function Introduction() {
    // let section = useRef()

    // useEffect(() => {
    //     let timeout = 200
    //     section.current?.childNodes.forEach(child => {
    //         setTimeout(() => {
    //             child.classList.add('fade-in')
    //             child.style.visibility = 'visible'
    //         }, timeout)
    //
    //         timeout += 200
    //     })
    // }, [])

    return (
        <Section>
            <Typography variant={'body1'} color={'text.hint'}>
                Hi, my name is
            </Typography>
            <Typography variant={'body1'} color={'text.primary'}>
                Chan Nyein Thaw
            </Typography>
            <Typography variant={'body1'} color={'text.secondary'}>
                I build things for the web.
            </Typography>
            <Typography variant={'body1'} color={'text.secondary'}>
                I’m a software engineer specializing in back-end development. Currently, I’m building APIs and web applications at&nbsp;
                <Link variant={'body1'} color={'text.hint'} >Pyxis Technologies.</Link>
            </Typography>
        </Section>
    )
}

let Section = styled(StyledSection)({
    gridAutoFlow: 'row',
    alignContent: 'center',

    // '& > *': { visibility: 'hidden' },

    '& > *:nth-of-type(2)': {
        fontWeight: 600,
        fontSize: 'clamp(40px, 8vw, 80px)',
        lineHeight: 1.1
    },

    '& > *:nth-of-type(3)': {
        marginTop: 10,
        fontWeight: 600,
        fontSize: 'clamp(40px, 6vw, 80px)',
        lineHeight: .9
    },

    '& > *:first-of-type': { marginLeft: 2, marginBottom: 30, fontFamily: '"Fira Code", sans-serif' },
    '& > *:last-of-type': { marginTop: 20, maxWidth: 540 },
})