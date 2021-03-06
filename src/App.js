import NavigationBar from "./components/NavigationBar/NavigationBar";
import Introduction from "./components/Introduction/Introduction";
import {styled} from "@mui/material";
import About from "./components/About/About";
import React, {useEffect, useRef, useState} from "react";
import Footer from "./components/Footer/Footer";

function App() {
    const sections = {
        '#about': useRef(),
        '#experience': useRef(),
        '#work': useRef(),
        '#contact': useRef()
    }

    let [showLogo, setShowLogo] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowLogo(false)
        }, 2200)
    }, [])

    useEffect(() => {
       if (!showLogo) {
           let section = window.location.hash
           if (section) {
               setTimeout(() => sections[section].current?.scrollIntoView({ behavior: 'smooth' }), 500)
           }
       }
    }, [showLogo])

    return (
        showLogo ? <LogoPage id={'logo-page'} >
            <svg id="logo-l" width="80" height="80" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="diamond" d="M133.908 122.092L251.377 8.53857C251.76 8.168 252.367 8.16336 252.756 8.52802L503.375 243.484C503.785 243.868 503.798 244.514 503.404 244.915L252.786 499.449C252.389 499.852 251.739 499.846 251.349 499.438L8.5618 244.903C8.18269 244.505 8.19512 243.876 8.58962 243.494L133.908 122.092Z" stroke="#64FFDA" stroke-width="15.75"/>
                <path id="logo-c" d="M325.578 285.152C323.363 304.102 316.35 318.744 304.537 329.08C292.807 339.334 277.18 344.461 257.656 344.461C236.492 344.461 219.512 336.873 206.715 321.697C194 306.521 187.643 286.219 187.643 260.789V243.562C187.643 226.91 190.596 212.268 196.502 199.635C202.49 187.002 210.939 177.322 221.85 170.596C232.76 163.787 245.393 160.383 259.748 160.383C278.779 160.383 294.037 165.715 305.521 176.379C317.006 186.961 323.691 201.645 325.578 220.43H301.83C299.779 206.156 295.309 195.82 288.418 189.422C281.609 183.023 272.053 179.824 259.748 179.824C244.654 179.824 232.801 185.402 224.188 196.559C215.656 207.715 211.391 223.588 211.391 244.178V261.527C211.391 280.969 215.451 296.432 223.572 307.916C231.693 319.4 243.055 325.143 257.656 325.143C270.781 325.143 280.83 322.189 287.803 316.283C294.857 310.295 299.533 299.918 301.83 285.152H325.578Z" fill="#64FFDA"/>
            </svg>
        </LogoPage>:
        <Main>
            <NavigationBar sections={sections} />
            <Introduction />
            <About ref={sections['#about']} />
            <Footer />
        </Main>
    )
}

const Main = styled('main')({
    display: 'flex',
    flexDirection: 'column',
})

const LogoPage = styled('main')({
    display: 'grid',
    height: '100vh',
    justifyContent: 'center',
    alignContent: 'center',
})

export default App;
