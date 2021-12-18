import {Button, IconButton, styled, Typography} from "@mui/material";
import OutlinedLogo from '../../logos/outlined.svg'
import OutlineFilledHoverLogo from '../../logos/outline-filled-hover.svg'
import {useEffect, useMemo, useState} from "react";
import {MenuOutlined} from "@mui/icons-material";

export default function NavigationBar({ sections }) {
    let [logo, setLogo] = useState(OutlinedLogo)
    let [ scrollY, setScrollY ] = useState({
        prev: 0,
        current: 0
    })

    let scrollChangeHandler = () => {
        setScrollY((old) => ({
            prev: old.current,
            current: window.scrollY
        }))
    }

    let onNavigate = event => {
        let url = new URL(event.currentTarget.href)

        sections[url.hash]?.current?.scrollIntoView()
    }

    let scrolled = useMemo(() => scrollY.current > 0, [ scrollY])
    let hidden = useMemo(() => {
        return scrollY.current > 56 && scrollY.current > scrollY.prev
    }, [ scrollY ])

    useEffect(() => {
        window.addEventListener('scroll', scrollChangeHandler)

        return () => {
            window.removeEventListener('scroll', scrollChangeHandler)
        }
    }, [])

    return <StyledBox hidden={hidden} scrolled={'' + scrolled} >
        <img src={logo} onMouseOut={() => setLogo(OutlinedLogo)} onMouseOver={() => setLogo(OutlineFilledHoverLogo)} alt={'logo'} />

        <div>
            <NavMenuItem href={'#about'} onClick={onNavigate}>
                <Typography color={'text.hint'} variant={'body2'}>01.</Typography>
                <Typography color={'text.primary'} variant={'body2'}>About</Typography>
            </NavMenuItem>

            <NavMenuItem href={'#experience'} onClick={onNavigate}>
                <Typography color={'text.hint'} variant={'body2'}>02.</Typography>
                <Typography color={'text.primary'} variant={'body2'}>Experience</Typography>
            </NavMenuItem>

            <NavMenuItem href={'#work'} onClick={onNavigate}>
                <Typography color={'text.hint'} variant={'body2'}>03.</Typography>
                <Typography color={'text.primary'} variant={'body2'}>Work</Typography>
            </NavMenuItem>

            <NavMenuItem href={'#contact'} onClick={onNavigate}>
                <Typography color={'text.hint'} variant={'body2'}>04.</Typography>
                <Typography color={'text.primary'} variant={'body2'}>Contact</Typography>
            </NavMenuItem>

            <Button sx={{ padding: '8px 16px' }} variant={'outlined'} size={'small'}>Resume</Button>
        </div>
        <IconButton className={'menu'}>
            <MenuOutlined />
        </IconButton>
    </StyledBox>
}

const NavMenuItem = styled('a')((props) => ({
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    gap: 4,
    padding: '8px 8px',

    '& > p': {
        fontFamily: '"Fira Code", sans-serif'
    },

    '&:hover > .MuiTypography-body2:last-child': {
        color: props.theme.palette.text.hint
    }
}))

const StyledBox = styled('nav')((props) => ({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    height: props?.scrolled === 'true' ? 70 : 100,

    transition: 'all 300ms ease',

    position: 'fixed',
    width: '100%',
    background: props.theme.palette.primaryAlpha.main,
    backdropFilter: 'blur(10px)',
    top: props?.hidden ? `-70px` : 0,

    padding: '0 48px',

    ...( props?.scrolled === 'true' ? {
        boxShadow: `0 10px 30px -10px rgba(2,12,27,0.7)`,
    } : {}),

    '& > div': {
        gap: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    '& > img': { width: 40, height: 40, cursor: 'pointer' },

    '& button.menu': {
        display: 'none'
    },

    [props.theme.breakpoints.down('md')]: {
        gridTemplateColumns: `max-content max-content`,
        justifyContent: 'space-between',
        padding: '0 25px',

        '& > div': {
            display: 'none'
        },

        '& > button.menu': {
            display: 'flex',
            color: props.theme.palette.text.hint,
        }
    }
}))