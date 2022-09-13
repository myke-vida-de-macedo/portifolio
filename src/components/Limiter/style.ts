import styled from "styled-components"

interface IPropsStyled {
    layoutPosition?: "rowCenter" | "rowExtremity" | "columnCenter" | "columnExtremity";
}

export const Styled = styled.div<IPropsStyled>`
    box-sizing: border-box;

    width: 100%;
    max-width: 1600px;
    height: 100%;

    display: flex;
    flex-direction: ${({ layoutPosition }) => layoutPosition === "rowCenter" || layoutPosition === "rowExtremity" ? "row" : "column" };
    justify-content: 
        ${({ layoutPosition }) => 
            layoutPosition === "rowCenter" || layoutPosition === "columnCenter" ? "center" 
                : 
            "space-between" 
            };
    align-items: center;
`