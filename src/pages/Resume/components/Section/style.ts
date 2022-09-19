import styled from "styled-components"

export const Styled = styled.div`

    box-sizing: border-box;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-bottom: 50px;

    @media(min-width:800px){
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 70px;
    }

    .section__title{
        box-sizing: border-box;

        width: 100%;

        font-size: 25px;
        font-weight: 600;

        color:#F5F5F5;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        padding: 10px 10px 10px 10px;

        @media(min-width:800px){
            width: 30%;

            font-size: 30px;

            padding: 10px 10px 10px 30px;
        }
    }

    .section__list{
        width: 100%;
        max-width: 100%;

        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        text-align: start;

        padding: 10px;
        

        @media(min-width:800px){
            width: 70%;
            max-width: 70%;

            margin-left: 10px;
        }      
    }
`