import styled from "styled-components";

const FormStyled = styled.form`
    //Searchfeild and Label
    input{
        height: 40px;
        width: 320px;
        border-radius: 2px;
        appearance: none;
        border: ${({theme}) => theme.colors.inputBorder};
        box-shadow: ${({theme}) => theme.shadow.boxShadow};
        font-family: ${({theme}) => theme.fonts.fontFamilyCourier};
        padding-left: 35px; //Adjust caret in input field
    }

    .error input{
        border: 1px solid red;
    }

    input[type=search]:focus{
        border: none;
        outline: 2px solid black;
    }

    //Placeholder
    input::placeholder{
        padding-right: 30px;
        font-size: 12px;
    }

    /*Default X in search field*/
    input[type=search]::-webkit-search-cancel-button {
        appearance: none;
        -webkit-appearance: none;
        appearance: none;
        height: 13px;
        width: 13px;
        background-size: 10px 10px;
        position: relative;
        right: 10px; 
        opacity: 70%;
        background: url(/x-close-button/x-solid.svg);
        background-repeat: no-repeat;
        cursor: pointer;
    }


    /*Default Button End*/
    .hidden-label{
        display: none;
    }

    //Search Icon
    .search-icon{
        font-size: 20px;
        position: relative;
        top: 38px;
        right: 140px;
        opacity: 60%;
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