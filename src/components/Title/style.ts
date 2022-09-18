import styled, { css } from "styled-components"

interface IPropsTextStyle {
    size?: "low" | "medium" | "large" | "extraLarge" | "bigLarge";
    margin?:string;
    position?: "start" | "center" | "end";
}

export const Styled = styled.p<IPropsTextStyle>`
    box-sizing: border-box;

    font-size: ${({ size })=> 
        size === "low" ? "15px"
        :
        size === "medium" ? "18px"
        :
        size === "large" ? "21px"
        : 
        size === "extraLarge" ? "25px"
        :
        size === "bigLarge" ? "30px"
        :
        "40px" 
    };

    ${({ margin }) => 

        margin ? css`margin:${margin};`
        :
        css`margin-bottom: 5px;`
    }

    font-weight: 500;

    color: #1976d2;

    text-align:${({ position })=> 
        position === "start" ? "start"
        :
        position === "center" ? "center"
        :
        position === "end" ? "end"
        :
        "start"
    };

    @media(min-width:800px){

        font-size: ${({ size })=> 
        size === "low" ? "20px"
        :
        size === "medium" ? "23px"
        :
        size === "extraLarge" ? "30px"
        :
        size === "bigLarge" ? "35px"
        :
        "50px" 
    };
    }
`