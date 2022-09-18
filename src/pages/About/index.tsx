import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import Block from "../../components/Block"
import Image from "./components/image"
import Text from "./components/Text"
import Paragraph from "./components/Paragraph"
import Button from "../../components/Button"

import { Styled } from "./style"
import Footer from "../../components/Footer/indes"

import { useTranslation } from "react-i18next"

const About = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    return(
        <Styled>
            <Header/>
            <Block> 
                <h2 className="about__title">{t("aboutTitle")}</h2>
                <div className="about__information">
                    <Image/>
                    <Text>
                        <Paragraph>
                            {t("aboutParagraph1")}
                        </Paragraph>
                        <Paragraph>
                            {t("aboutParagraph2")}
                        </Paragraph>
                        <Button
                            size="large"
                            onClick={()=>navigate("/home/contact")}
                            marginRigth="200px"
                        >
                            {t("aboutButtonContact")}
                        </Button>

                        <Button
                            size="large"
                            onClick={()=>navigate("/home/portifolio")}
                            marginRigth="200px"
                        >
                            {t("aboutButtonPortifolio")}
                        </Button>
                    </Text>   
                </div>
            </Block>
            <Footer/>
         
        </Styled>
    )
}

export default About