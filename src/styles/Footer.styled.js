import styled from "styled-components";

const FooterStyled = styled.footer`
    footer{
        background-color: ${({theme}) => theme.colors.backgroundColor};
        width: 100%;
        height: 80px;

        //Keeep footer at bottom
        position: absolute;
        bottom: 0;

        /*Align Entire Footer Contents Group*/
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    /*Put copyright on bottom*/
    .copyright{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .copyright-and-github-link{
        display: flex;
        gap: 4px;
        margin-top: 10px;
    }

    /*Resize Github Icon*/
    .github-icon{
        height: 18px;
        width: 18px;
    }

    /*Remove underline in anchor link*/
    .copyright a{
        text-decoration: none;
        color: black;
    }

    /*Resize Copyright Text*/
    .copyright p,
    .copyright a{
        font-size: 13px;
    }

    /*Footer Logo and Text*/
    .footer-logo-and-text{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

   .footer-logo{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid goldenrod;
        box-shadow: ${({theme}) => theme.shadow.boxShadow};
    }


    /*FONT FACE TYPOGRAPHY*/
    @font-face {
    font-family: "MonotoneRegular";
    src: url("/fonts/Monoton Regular.woff2")
        format("woff2"); /* Modern Browsers*/
    src: url("/fonts/Monoton Regular.woff")
        format("woff");
    src: url("/fonts/Monoton Regular.ttf")
        format("truetype"); /*Fallback*/
    font-weight: 400;
    }

    /*Set font of logo text*/
    .footer-logo-and-text p{
        font-family: MonotoneRegular;
        font-size: 12px;
    }

`

export default FooterStyled;