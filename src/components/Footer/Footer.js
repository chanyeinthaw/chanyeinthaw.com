import StyledSection from '../../styled-components/Section'
import {Link, styled, Typography} from "@mui/material";
import {MailOutline} from "@mui/icons-material";

export default function Footer() {
    return <Section>
        <div>
            <Link href={'https://github.com/chanyeinthaw'} aria-label={'GitHub'} target={'_blank'} rel={'noopener noreferer'}>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </Link>
            <Link href={'https://linkedin.com/in/chanyeinthaw'} aria-label={'LinkedIn'} target={'_blank'} rel={'noopener noreferer'}>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin">
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </Link>
            <Link href={'mailto:me@chanyeinthaw.com'}>
                <MailOutline fontSize={'medium'} />
            </Link>
        </div>
        <Link variant={'caption'} href={'https://brittanychiang.com/'} target={'_blank'}>
            Designed inspired from Brittany Chiang
        </Link>
        <Link href='.' variant={'caption'} >
            Built by Chan Nyein Thaw
        </Link>
    </Section>
}

const Section = styled(StyledSection)(props => ({
    gridAutoFlow: 'row',
    placeContent: 'center',
    gap: 8,
    minHeight: 64,
    paddingTop: '16px !important',
    paddingBottom: '24px !important',

    '& a': {
        textAlign: 'center',
        userSelect: 'none',
        color: `${props.theme.palette.text.secondary} !important`,
        fontFamily: '"Fira Code", sans-serif'
    },

    '& > div': {
        display: 'flex',
        flexDirection: 'row',
        gap: 14,
        justifyContent: 'center',
        marginBottom: 6,

        '& > a': { width: 24, height: 24, padding: 10, boxSizing: 'content-box' },

        '& > a:hover svg': {
            color: props.theme.palette.text.hint
        },

        '& > svg': {
            width: 24,
            height: 24,
            color: props.theme.palette.text.secondary,
        }
    },

    '& a:hover': {
        color: `${props.theme.palette.text.hint} !important`
    },

    '& a:after': {
        display: 'none'
    }
}))