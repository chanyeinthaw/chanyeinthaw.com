import {Button, IconButton, styled, Typography} from "@mui/material";
import OutlinedLogo from '../../logos/outlined.svg'
import OutlineFilledHoverLogo from '../../logos/outline-filled-hover.svg'
import {useEffect, useMemo, useState} from "react";
import {MenuOutlined} from "@mui/icons-material";

export default function NavigationBar() {
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

    return <StyledBox hidden={hidden} scrolled={scrolled} >
        <img src={logo} onMouseOut={() => setLogo(OutlinedLogo)} onMouseOver={() => setLogo(OutlineFilledHoverLogo)} alt={'logo'} />
        <NavMenuItem>
            <Typography color={'text.hint'} variant={'body2'}>01.</Typography>
            <Typography color={'text.primary'} variant={'body2'}>About</Typography>
        </NavMenuItem>

        <NavMenuItem>
            <Typography color={'text.hint'} variant={'body2'}>02.</Typography>
            <Typography color={'text.primary'} variant={'body2'}>Experience</Typography>
        </NavMenuItem>

        <NavMenuItem>
            <Typography color={'text.hint'} variant={'body2'}>03.</Typography>
            <Typography color={'text.primary'} variant={'body2'}>Work</Typography>
        </NavMenuItem>

        <NavMenuItem>
            <Typography color={'text.hint'} variant={'body2'}>04.</Typography>
            <Typography color={'text.primary'} variant={'body2'}>Contact</Typography>
        </NavMenuItem>

        <Button className={'resume'} sx={{ padding: '8px 16px' }} variant={'outlined'} size={'small'}>Resume</Button>
        <IconButton className={'menu'}>
            <MenuOutlined />
        </IconButton>
    </StyledBox>
}

const NavMenuItem = styled('a')((props) => ({
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
    display: 'grid',
    gridTemplateColumns: '1fr repeat(5, max-content)',
    gap: 16,
    alignContent: 'center',
    height: '46px',

    transition: 'all 300ms ease',

    position: 'sticky',
    background: props.theme.palette.primaryAlpha.main,
    top: props?.hidden ? `-78px` : 0,

    padding: '16px 48px',
    paddingTop: props?.scrolled ? '16px': '24px',

    ...( props?.scrolled ? {
        boxShadow: `0 10px 30px -10px rgba(2,12,27,0.7)`,
        backdropFilter: 'blur(10px)'
    } : {}),

    '& > img': { width: 40, height: 40, cursor: 'pointer' },

    '& button.menu': {
        display: 'none'
    },

    [props.theme.breakpoints.down('md')]: {
        gridTemplateColumns: `max-content max-content`,
        justifyContent: 'space-between',
        '& > a, & > button.resume': {
            display: 'none'
        },

        '& > button.menu': {
            display: 'flex',
            color: props.theme.palette.text.hint,
        }
    }
}))