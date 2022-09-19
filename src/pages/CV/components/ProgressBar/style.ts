import styled from "styled-components"

interface IPropsStyled {
    percentage:number;
}

export const Styled = styled.h2<IPropsStyled>`
    
    box-sizing: border-box;

    margin: 5px 10px 5px 10px;

    width: calc(100% - 20px);
    height: 5px;

    border-bottom: 5px solid grey;

    .progressBar__bar{
        box-sizing: border-box;

        width: ${({ percentage })=> `${percentage}%`};
        height: 5px;

        border-bottom:5px solid #1976d2;
    }
`