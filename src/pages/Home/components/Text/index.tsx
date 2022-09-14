import { useNavigate } from "react-router-dom"
import Button from "../../../../components/Header/components/Button"
import { Styled } from "./style"

const Text = () => {

    const navigate = useNavigate()

    return (
        <Styled>
            <p className="text__title">Oi, sou Myke, desenvolvedor web</p>
            <p className="text__description">Front End desenvolvedor</p>
            <Button 
                    axle="x"
                    negative="100%"
                    onClick={()=>navigate("/home/about")}
                    radius="medium"
                    duration={0.5}
                    color="blue"
            >
                Conheça-me
            </Button>
        </Styled>
    )
}

export default Text