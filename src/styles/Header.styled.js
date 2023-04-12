import styled from "styled-components"

const HeaderStyled = styled.header`
img {
       width: 120px;
       height: 120px;
       border-radius: 50%;
       border: 1px solid goldenrod;
       margin: 20px auto;
       margin-bottom: -40px;
       box-shadow: ${({theme}) => theme.shadow.boxShadow};
    }
`

export default HeaderStyled;