import styled from "styled-components"

export const Styled = styled.div`

    width: 100%;
    height: 100%;
    min-height: 100vh;

    position: relative;

    display: flex;
    justify-content: center;

    background-color: #1b2838;

    overflow: hidden;

    .block__title{
        font-size: 30px;

        font-weight: 700;

        color: #F5F5F5;

        @media(min-width:400px){
            font-size: 35px;
        }
    }

    .block__navegation{
        box-sizing: border-box;

        width: 100%;

        display: flex;
        justify-content: space-between;

        padding-left: 5px;

        margin: 10px 0px;
    }
`