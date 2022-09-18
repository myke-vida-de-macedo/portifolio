import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import Block from "../../components/Block"
import Image from "./components/image"
import Text from "./components/Text"
import Paragraph from "./components/Paragraph"
import Button from "../../components/Button"

import { Styled } from "./style"
import Footer from "../../components/Footer/indes"

const About = () => {

    const navigate = useNavigate()

    return(
        <Styled>
            <Header/>
            <Block> 
                <h2 className="about__title">Olá sou Myke, busco minha primeira vaga como Front-End</h2>
                <div className="about__information">
                    <Image/>
                    <Text>
                        <Paragraph>
                            Sou um desenvolvedor Front-End, que no momento está estudando o back-end,
                            tenho uma paixão muito grande por programação e tecnologia no geral, adoro criar coisas,
                            poder desenvolver aplicações no Front-End me trás muita satisfação, eu almejo muito meu progresso
                            como desenvolvedor e quero poder participar da trajetoria de uma empresa e por crescer com essa experiencia.
                        </Paragraph>
                        <Paragraph>
                            Adoro no meu tempo livre sempre saber de assuntos sobre Astronomia, e apoio tecnologias que impactam no meio 
                            ambiente de forma menos agressiva, e gosto de jogar vídeo game.
                        </Paragraph>
                        <Button
                            size="large"
                            onClick={()=>navigate("/home/contact")}
                            marginRigth="200px"
                        >
                            CONTATO
                        </Button>

                        <Button
                            size="large"
                            onClick={()=>navigate("/home/portifolio")}
                            marginRigth="200px"
                        >
                            PORTIFOLIO
                        </Button>
                    </Text>   
                </div>
            </Block>
            <Footer/>
         
        </Styled>
    )
}

export default About