import Text from "../../components/Text"
import Title from "../../components/Title"
import Category from "../Resume/components/Category"
import Section from "./components/Category"
import ProgressBar from "./components/ProgressBar"
import { HomeStyled, Header, Organization, Experience, Skill } from "./style"
  
import { TbDeviceGamepad } from 'react-icons/tb';
import { GiSpaceship } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { CgTrees } from 'react-icons/cg';
import { GiMusicalNotes } from 'react-icons/gi';
import { RiMovieLine } from 'react-icons/ri';

import { IoLocationOutline } from 'react-icons/io5';
import { TbBrandVercel } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneForward } from 'react-icons/bs';
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const CV = () => {

    const navigate = useNavigate()

    useEffect(()=> {
        setTimeout(()=> window.print(),200)
        setTimeout(()=> navigate("/home/resume"),400)
    },[])

    return (
        <HomeStyled>
          
            <div className="cv__left">
                <Header>
                    <figure>
                        <img src="https://ca.slack-edge.com/TQZR39SET-U037Q746MQF-5221ec32773d-512" alt="" />
                    </figure>

                    <div className="header__block">
                        <h1>Myke Macedo</h1>
                        <p className="block__description">Desenvoldedor Front-End</p>
                    </div>
                </Header>
            </div>
            <Organization>
                <div className="a">
                    <Section>Contato</Section>

                        <Category border="none" colorSVG="blue" colorName="#222" margin="5px" size="cv" name="(41) 99890-3373">
                            <BsTelephoneForward/>
                        </Category>

                        <Category border="none" colorSVG="blue" colorName="#222" margin="5px" size="cv" name="myke.programacao@gmail.com">
                            <AiOutlineMail/>
                        </Category>

                        <Category border="none" colorSVG="blue" colorName="#222" margin="5px" size="cv" name="https://portifolio-lake-omega.vercel.app">
                            <TbBrandVercel/>
                        </Category>

                        <Category border="none" colorSVG="blue" colorName="#222" margin="5px" size="cv" name="Araucaria/PR - Brasil">
                            <IoLocationOutline/>
                        </Category>

                    <Section>Educação</Section>

                        <Title margin="5px 0px 5px 10px" size="medium">Kenzie Academy</Title>
                        <Title margin="0px 0px 0px 10px" size="low">Mar 2022 - Mar 2023</Title>
                        <Text margin="0px 0px 20px 15px" color="#222">Desenvolvedor Full-Stack</Text>
                        
                        <Title margin="5px 0px 5px 10px" size="medium">Colégio Estadual Professora Marilze</Title>
                        <Title margin="0px 0px 0px 10px" size="low">2007 - 2019</Title>
                        <Text margin="0px 0px 20px 15px" color="#222">Ensino fundamental e médio</Text>

                    <Section>Linguas</Section>

                        <Title margin="0px 0px 0px 10px" size="low">Português</Title>
                        <ProgressBar percentage={100}/>

                    <Section>Interesse</Section>

                       <div className="a__category">
                            <Category colorSVG="blue" colorName="#222" margin="5px" size="cv" name="Jogos">
                                <TbDeviceGamepad/>
                            </Category>

                            <Category colorSVG="blue" colorName="#222" margin="5px" size="cv" name="Astronomia">
                                <GiSpaceship/>
                            </Category>

                            <Category colorSVG="blue" colorName="#222" margin="5px" size="cv" name="Programação">
                                <FaLaptopCode/>
                            </Category>

                            <Category colorSVG="blue" colorName="#222" margin="5px" size="cv" name="Sustentabilidade">
                                <CgTrees/>
                            </Category>

                            <Category colorSVG="blue" colorName="#222" margin="5px" size="cv" name="Musica">
                                <GiMusicalNotes/>
                            </Category>

                            <Category colorSVG="blue" colorName="#222" margin="5px" size="cv" name="Series">
                                <RiMovieLine/>
                            </Category>
                       </div>
                </div>
                <div className="b">

                    <Section>Perfil</Section>
                    <Text margin="10px 5px" color="#222">Sou desenvolvedor Front-End, que atualmente estou estudando o back-end, tenho uma grande paixão por programação e tecnologia em geral, adoro criar coisas, poder desenvolver aplicações no Front-End me traz muita satisfação, quero muito avançar meu progresso como desenvolvedor e quero poder participar da trajetória de uma empresa e crescer com essa experiência.</Text>
                    <Text margin="10px 5px" color="#222">Adoro no meu tempo livre sempre saber de assuntos sobre Astronomia, e apoio tecnologias que impactam no meio ambiente de forma menos agressiva, e gosto de jogar vídeo game.</Text>

                    <Section>Experiência</Section>

                    <Experience>
                        <div className="experience__a">

                            <Title margin="0px 0px 5px 10px" size="low">Jul - Set / 2022</Title>
                            <Text margin="0px 0px 20px 15px" color="#222">Kenzie Academy</Text>

                        </div>
                        <div className="experience__b">
                            <Title margin="0px 0px 5px 10px" size="medium">Monior</Title>
                            <Text margin="0px 0px 20px 10px" color="#222">Como monitor meu papel era é apoio, ajudando os alunos a explorar pontos-chave como organização, comunicação e resolução de desafios.</Text>
                        </div>
                    </Experience>

                    <Experience>
                        <div className="experience__a">

                            <Title margin="0px 0px 5px 10px" size="low">2019 - 2021</Title>
                            <Text margin="0px 0px 20px 15px" color="#222">George`s Alimentos LTDA</Text>

                        </div>
                        <div className="experience__b">
                            <Title margin="0px 0px 5px 10px" size="medium">Chapeiro</Title>
                            <Text margin="0px 0px 20px 10px" color="#222">Cuidava da chapa, e preparação dos pratos, mais poderia ser colocado em qualquer outro setor, como atendimento( caixa ), cozinha, limpeza, reabastecimento, no que tivesse necessidade.</Text>
                        </div>
                    </Experience>

                    <Section>Tecnologias</Section>

                    <Skill>
                        <h3>HTML</h3>
                        <ProgressBar percentage={90}/>
                    </Skill>
                    <Skill>
                        <h3>CSS</h3>
                        <ProgressBar percentage={90}/>
                    </Skill>
                    <Skill>
                        <h3>Javascript</h3>
                        <ProgressBar percentage={90}/>
                    </Skill>
                    <Skill>
                        <h3>React</h3>
                        <ProgressBar percentage={90}/>
                    </Skill>
                    <Skill>
                        <h3>Typescript</h3>
                        <ProgressBar percentage={60}/>
                    </Skill>
                    <Skill>
                        <h3>GIT</h3>
                        <ProgressBar percentage={85}/>
                    </Skill>
                    <Skill>
                        <h3>GIT Flow</h3>
                        <ProgressBar percentage={85}/>
                    </Skill>

                </div>
            </Organization>


        </HomeStyled>
    )
}

export default CV