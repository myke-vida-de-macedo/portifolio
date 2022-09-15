import { useNavigate } from "react-router-dom"
import Button from "../../../../components/Button"
import { Styled } from "./style"

const Text = () => {

    const navigate = useNavigate()

    return (
        <Styled>
            <p className="text__title">Oi, sou Myke, desenvolvedor web</p>
            <p className="text__description">Front End desenvolvedor</p>
            <Button
                size="large"
                onClick={()=>navigate("/home/about")}
                marginRigth="200px"
            >
                CONHEÇA-ME
            </Button>
        </Styled>
    )
}

export default Text