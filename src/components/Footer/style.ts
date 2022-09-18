import styled from "styled-components"

export const Styled = styled.footer`
    box-sizing: border-box;

    position: relative;

    width: 100%;
    height: 200px;

    background-color: #171a21;

    display: flex;
    align-items: center;
    justify-content: center;

    .footer__icons{

        display: flex;

        svg{
            transition: 300ms;

            font-size:50px;

            margin: 5px;

            color: #F5F5F5;

            :hover{
                transition: 300ms;

                color:#1976d2;
            }
        }
    }
`

export const Link = styled.a`
    
`