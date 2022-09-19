import styled from "styled-components"

interface IPropsStyled {
    isOn:boolean;
}

export const Styled = styled.div<IPropsStyled>`
    box-sizing: border-box;

    cursor: pointer;

    width: 60px;
    height: 30px;

    border-radius: 16px;

    padding: 0px 5px;

    background-color: #F5F5F5 ;

    display: flex;
  
    align-items: center;
        
    margin: 0px 5px;

    .blockButton{
        box-sizing: border-box;

        width: 25px;
        height: 25px;

        border-radius: 50%;

        background-color: ${({isOn})=> isOn ? "#FFF" : "#222"} ;

        display: flex;
        justify-content: center;
        align-items: center;

        svg{
            font-size: 15px;

            color: ${({isOn})=> isOn ? "#222" : "#F5F5F5"};
        }
    }
`