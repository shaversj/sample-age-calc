import styled, {createGlobalStyle} from "styled-components";
import './App.css'
import Results from "./Results.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: white;
  }
`

const MainStyle = styled.main`
  display: grid;
  place-items: center;
  min-height: 100vh;
`

function App() {

    return (
        <>
            <MainStyle>
                <GlobalStyle/>
                <Results/>
            </MainStyle>

        </>
    )
}

export default App
