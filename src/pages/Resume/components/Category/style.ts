import styled from "styled-components"

interface IPropsText {
    margin?:string;
}

export const Styled = styled.p<IPropsText>`
    box-sizing: border-box;

    margin: 5px;

    display: flex;
    align-items: center;

    margin: ${({ margin }) => margin ? margin : "0px"};
    
    @media(min-width:800px){
 
    }

    .category__icon{
        width: 60px;
        height: 60px;

        box-sizing: border-box;

        background-color: #1976d2;

        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px;

        svg{
            font-size: 40px;

            color: #f5f5f5;
        }
    }
`