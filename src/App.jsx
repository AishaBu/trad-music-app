import { Container } from "./styles/Container.styled"
import Form from "./components/Form"
import FormStyled from "./styles/Form.styled"
import theme from "./components/Themes"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"


export default function App(){
    return( 
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Container>
        <FormStyled>
        <Form/>
        </FormStyled>   
    </Container>
    </>
    </ThemeProvider>
 )
}