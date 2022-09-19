import styled from "styled-components"

export const HomeStyled = styled.div`
    box-sizing: border-box;

    width:100%;
    height: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    background-color: #FFF;

    overflow: hidden;

    padding: 40px;
`

export const Header = styled.header`

    box-sizing: border-box;
    
    width: 100%;
    height: auto;

    display: flex;
    justify-content: flex-start;


    figure{
        box-sizing: border-box;

        width: 120px;
        height: 120px;

        overflow: hidden;

        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
        }
    }

    .header__block{

        box-sizing: border-box;

        width:auto;
        height: 120px;

        padding: 10px 10px 10px 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        h1{
            font-size: 40px;

            font-family: 'Poppins', sans-serif;;
            font-weight: 600;
            
            margin: 5px;
        }
        .block__description{
            font-size: 19px;

            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            
            margin: 5px;
        }
    }
`
export const Organization = styled.div`

    box-sizing: border-box;

    margin-top: 20px;

    width: 100%;
    height: 100%;

    background-color: antiquewhite;

    display: flex;

    .a{
        box-sizing: border-box;

        width: 300px;
        height: auto;

        display: flex;
        flex-direction: column;

        background-color: aquamarine;

        .a__category{
            display: flex;
            flex-wrap: wrap;
        }
    }

    .b{
        width: 100%;
        height: auto;

        padding-left: 20px;

        display: flex;
        flex-direction: column; 

        background-color: beige;
    }
`

export const Experience = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: auto;

    background-color: antiquewhite;

    display: flex;

    
    .experience__a{
        box-sizing: border-box;
        
        width: 35%;
        height: auto;

        display: flex;
        flex-direction: column;

        background-color: aqua;
    }

    .experience__b{

        box-sizing: border-box;
        
        width: 65%;
        height: auto;

        display: flex;
        flex-direction: column;

        background-color: violet;
    }
`

export const Skill = styled.div`
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;

    margin: 5px;

    h3{
        width: 35%;
    }
`