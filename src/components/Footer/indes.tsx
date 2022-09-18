import { Styled, Link } from "./style"

import { AiFillLinkedin } from 'react-icons/ai';
import Title from "../../pages/Resume/components/Title";
import Block from "../Block";

const Footer = () => {
    return(
        <Styled>
            <Block layoutPosition="rowExtremity" minHeigth="none">
            <Title size="medium">© 2022 Myke Macedo</Title>

            <div className="footer__icons">
                <Link href="https://www.linkedin.com/in/myke-vida-de-macedo/" target="_blank">
                    <AiFillLinkedin/>
                </Link>
            </div>
            </Block>
        </Styled>
    )
}

export default Footer