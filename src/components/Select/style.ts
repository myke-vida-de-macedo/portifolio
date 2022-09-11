import styled from "styled-components"

export const Styled = styled.div`
    box-sizing: border-box;

    position: relative;

    width: 200px;
    height: 30px;

    z-index: 99999;

    background-color: #F5F5F5;

    margin: 0px 5px;

    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .select__name{
        margin-left: 5px;
    }

    svg{
        margin-right: 5px;
    }

    .select__list{
        box-sizing: border-box;

        position: absolute;
        top: 32px;

        border-radius: 4px;

        width: 200px;
        height: 100px;

        z-index: 9999;

        background-color: #F5F5F5;
    }
`