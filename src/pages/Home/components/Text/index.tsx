import Button from "../../../../components/Header/components/Button"
import { Styled } from "./style"

const Text = () => {

    return (
        <Styled>
            <p className="text__title">Oi, sou Myke, desenvolvedor web</p>
            <p className="text__description">Front End desenvolvedor</p>
            <Button 
                    axle="x"
                    negative="500%"
                    onClick={()=>{}}
                    radius="medium"
                    duration={0.8}
                    color="blue"
            >
                Conheça-me
            </Button>
        </Styled>
    )
}

export default Text