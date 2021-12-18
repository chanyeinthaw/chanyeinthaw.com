import NavigationBar from "./components/NavigationBar/NavigationBar";
import Introduction from "./components/Introduction/Introduction";
import {styled} from "@mui/material";
import About from "./components/About/About";
import {useEffect, useRef} from "react";

function App() {
    const sections = {
        '#about': useRef(),
        '#experience': useRef(),
        '#work': useRef(),
        '#contact': useRef()
    }

    useEffect(() => {
        let section = window.location.hash
        if (section) {
            setTimeout(() => sections[section].current?.scrollIntoView({ behavior: 'smooth' }), 500)
        }
    }, [])
    return (
        <Main>
            <NavigationBar sections={sections} />
            <Introduction />
            <About ref={sections['#about']} />
        </Main>
    )
}

const Main = styled('main')({
    display: 'flex',
    flexDirection: 'column'
})

export default App;
