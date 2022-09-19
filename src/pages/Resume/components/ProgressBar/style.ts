import styled from "styled-components"

interface IPropsProgressBar {
    percentage:number;
    margin?:string;
}

export const Styled = styled.p<IPropsProgressBar>`
    box-sizing: border-box;

    width: 100%;
    max-width: 300px;
    height: 10px;

    border-radius: 4px;

    background-color: grey;

    margin:${({ margin }) => margin ? margin : "0px" };

    .progressBar__bar{
        width: ${({ percentage }) => `${percentage}%` };
        height: 10px;

        border-radius: 4px;

        background-color: ${({ percentage }) => 
            percentage <= 35 ? "#ef533f"
                :
            percentage > 35 && percentage < 75 ? "#facd2b"
                :
            "#3bc470"
        };
    }

    @media(min-width:800px){
        
    }
`