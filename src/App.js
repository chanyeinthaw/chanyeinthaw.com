import NavigationBar from "./components/NavigationBar/NavigationBar";
import Introduction from "./components/Introduction/Introduction";
import {styled} from "@mui/material";

function App() {
    return (
        <Main>
            <NavigationBar />
            <Introduction />
        </Main>
    )
}

const Main = styled('main')({
    display: 'flex',
    flexDirection: 'column'
})

export default App;
