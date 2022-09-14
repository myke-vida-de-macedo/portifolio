import styled from "styled-components"

export const Styled = styled.div`
    box-sizing: border-box;
    
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: #1b2838;

    .about__title{
        font-size: 27px;
        font-size: 700;

        color: #F5F5F5;

        text-rendering: optimizeLegibility;
        line-height: 1.4em;

        text-align: center;
        white-space: pre-wrap;

        max-width: 900px;

        @media(min-width:400px){
            font-size: 30px;
        }

        @media(min-width:505px){
            font-size: 35px;
        }

        @media(min-width:630px){
            font-size: 40px;
        }
    }

    .about__information{
        box-sizing:border-box;
        
        height: 100%;

        padding-top:120px ;

        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        @media(min-width:480px){
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
        }
    }
`