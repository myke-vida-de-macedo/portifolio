import styled from "styled-components"

export const HomeStyled = styled.div`
    height: 1610vh;

    .first{
        
        background-color: #444444;
        overflow: hidden;
    }

    .offset{
        width: 100%;
        height: 100%;
    }

    .a{
        height: 100%;

        display: flex;

        align-items: flex-end;

        background-color: #F5F1EA;

        .left-side{
            width: 50%;
            height: 100%;

            background-color: #7dbb91;
        }
        .right-side{
            width: 50%;
            height: 100%;

            .right-image{
                background-color: #7dbb91;
                width: 100%;
                height: 100%;
            }
        }
    }

    .b{
        background-color: #582534;

        width: 100%;
        height: 100%;
    }

    .c{
        background-color: #0A7397;

        width: 100%;
        height: 100%;
    }

    .second{
        background-color: green;
    }

    .third{
        background-color: yellow;
    }

    .fourth{
        background-color: blue;
    }
`