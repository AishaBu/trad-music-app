import { Container } from "./styles/Container.styled"
import Form from "./components/Form"
import FormStyled from "./styles/Form.styled"
import theme from "./components/Themes"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Header from "./components/Header"
import HeaderStyled from "./styles/Header.styled"
import Footer from "./components/Footer"
import FooterStyled from "./styles/Footer.styled"


export default function App(){
    return( 
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Container>
        <HeaderStyled>
           <Header /> 
        </HeaderStyled>
        <FormStyled>
        <Form/>
        </FormStyled>   
    </Container>
    <FooterStyled>
        <Footer />
    </FooterStyled>
    </>
    </ThemeProvider>
 )
}