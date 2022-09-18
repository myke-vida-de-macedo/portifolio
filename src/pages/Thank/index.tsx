import { useNavigate } from "react-router-dom"
import Block from "../../components/Block"
import Button from "../../components/Button"
import Text from "../../components/Text"
import Title from "../../components/Title"

import { HomeStyled } from "./style"

const Thank = () => {

    const navigate = useNavigate()

    return (
        <HomeStyled>
        <Block  minHeigth="38px">  

            <Button 
                size="small"
                position="start"
                onClick={()=>navigate("/home")}
            >
                Voltar
            </Button>
              
        </Block>    

            <Block layoutPosition="columnCenter" postion="centerY" minHeigth="calc(100vh - 178px)">
                
                <Title>Muito obrigado</Title>
                <Text>Enquanto isso que tal uma olhada nos meus projetos?</Text>
                <div className="block__button">
                    <Button 
                        size="large"
                        onClick={()=>navigate("/home/portifolio")}
                    >
                        Projetos
                    </Button>
                </div>

            </Block>
          
        </HomeStyled>
    )
}

export default Thank