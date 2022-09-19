import styled from "styled-components"

interface IPropsText {
    margin?:string;
    size?: "cv" | "normal";
    colorSVG?: "blue" | "white";
    border?:string;
}

export const Styled = styled.p<IPropsText>`
    box-sizing: border-box;

    margin: 5px;

    display: flex;
    align-items: center;

    margin: ${({ margin }) => margin ? margin : "0px"};

    .category__icon{
        width: ${({ size }) => size == "cv" ? "30px" : "60px"};
        height: ${({ size }) => size == "cv" ? "30px" : "60px"};

        box-sizing: border-box;

        background-color: #1976d2;
        border: ${({ border }) => border ? border : "2px solid #1976d2"};

        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px;

        svg{
            font-size: ${({ size }) => size == "cv" ? "30px" : "40px"};;

            color: ${({ colorSVG }) => colorSVG == "blue" ? "#1976d2" : "#f5f5f5"};
        }
    }
`