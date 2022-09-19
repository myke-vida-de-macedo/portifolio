import { useNavigate } from "react-router-dom"
import Block from "../../components/Block"
import Button from "../../components/Button"
import Text from "../../components/Text"
import Title from "../../components/Title"

import { HomeStyled } from "./style"

import { useTranslation } from "react-i18next"

const Thank = () => {

    const { t } = useTranslation()

    const navigate = useNavigate()

    return (
        <HomeStyled>
        <Block  minHeigth="38px">  

            <Button 
                size="small"
                position="start"
                onClick={()=>navigate("/home")}
            >
                {t("thankBack")}
            </Button>
              
        </Block>    

            <Block layoutPosition="columnCenter" postion="centerY" minHeigth="calc(100vh - 178px)">
                
                <Title>{t("thankThank")}</Title>
                <Text>{t("thankDescription")}</Text>
                <div className="block__button">
                    <Button 
                        size="large"
                        onClick={()=>navigate("/home/portifolio")}
                    >
                        {t("thankProjects")}
                    </Button>
                </div>

            </Block>
          
        </HomeStyled>
    )
}

export default Thank