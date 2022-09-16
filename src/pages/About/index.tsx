import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import Block from "../../components/Block"
import Image from "./components/image"
import Text from "./components/Text"
import Paragraph from "./components/Paragraph"
import Button from "../../components/Button"

import { Styled } from "./style"

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
                            Lorem ipsum dolor sit amet. 33 omnis mollitia vel itaque quisquam et dolore praesentium aut voluptas laborum eos incidunt sint cum adipisci modi aut laudantium asperiores. Aut nobis nisi non voluptatem dolor ea repudiandae mollitia. Non velit sunt 33 illo deleniti et internos temporibus eum explicabo autem id itaque neque et quam labore qui adipisci provident? Ut animi natus et molestiae eligendi aut architecto reprehenderit et necessitatibus quas et deserunt omnis aut deleniti voluptates.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet. 33 omnis mollitia vel itaque quisquam et dolore praesentium aut voluptas laborum eos incidunt sint cum adipisci modi aut laudantium asperiores. Aut nobis nisi non voluptatem dolor ea repudiandae mollitia. Non velit sunt 33 illo deleniti et internos temporibus eum explicabo autem id itaque neque et quam labore qui adipisci provident? Ut animi natus et molestiae eligendi aut architecto reprehenderit et necessitatibus quas et deserunt omnis aut deleniti voluptates.
                        </Paragraph>
                        <Button
                            size="large"
                            onClick={()=>navigate("/home/contact")}
                            marginRigth="200px"
                        >
                            Contato
                        </Button>
                    </Text>   
                </div>
            </Block>
         
        </Styled>
    )
}

export default About