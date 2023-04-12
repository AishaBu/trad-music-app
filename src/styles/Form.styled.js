import styled from "styled-components";

const FormStyled = styled.form`
    //Searchfeild and Label
    input{
        height: 40px;
        width: 315px;
        border-radius: 2px;
        appearance: none;
        border: ${({theme}) => theme.colors.inputBorder};
        box-shadow: ${({theme}) => theme.shadow.boxShadow};
        font-family: ${({theme}) => theme.fonts.fontFamilyCourier};
        padding-left: 6px; //Adjust caret in input field
    }

    input[type=search]:focus{
        border: none;
        outline: 2px solid black;
    }

    //Placeholder
    input::placeholder{
        padding-left: 6px;
        font-size: 12px;
    }


    .hidden-label{
        display: none;
    }

    //Search Button
    .search-btn{
        text-transform: uppercase;
        width: 130px;
        height: 40px;
        border-radius: 5px;
        appearance: none;
        font-size: 25px;
        font-weight: bold;
        line-height: 25px;
        color: white;
        margin-bottom: 20px;
        background-color: ${({theme}) => theme.colors.buttonColor};
        cursor: pointer; 
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.23);
        font-family: ${({theme}) => theme.fonts.fontFamilyCourier};
    }

    //Search Button Hover
    .search-btn:hover{
        background-color: ${({theme}) => theme.colors.buttonHoverColor};
        -webkit-text-stroke: ${({theme}) => theme.colors.buttonHoverColor};
    }

    //Search Icon
    .search-icon{
        font-size: 20px;
        position: relative;
        top: 38px;
        left: 136px;
        opacity: 60%;
    }


    //Entire Form
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 30px;
    }

    //Error Message
    .error-message{
        color: ${({theme}) => theme.colors.errorMessage};
        -webkit-text-stroke:  0.5px  rgba(40, 67, 135, 0.8);
        font-family:'Segoe UI', Tahoma, Verdana, sans-serif;
        font-weight: bold;
        font-size: medium;
    }
`
export default FormStyled;