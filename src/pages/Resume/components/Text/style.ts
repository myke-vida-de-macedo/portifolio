import styled from "styled-components"

interface IPropsText {
    margin?:string;
}

export const Styled = styled.p<IPropsText>`
    box-sizing: border-box;

    font-size: 15px;
    font-weight: 300;

    color: #F5F5F5;

    text-align: start;

    margin: ${({ margin }) => margin ? margin : "0px"};

    @media(min-width:800px){
        font-size: 20px;
    }
`