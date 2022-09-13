import { Styled } from "./style"
import { motion } from "framer-motion"
import { useModal } from "../../../../Provider/Modal"
import Button from "../Button"

import { useNavigate } from "react-router-dom"

const Modal = () => {

    const navigate = useNavigate()
    const { animationModal } = useModal()

    return(
        <Styled
            initial={{opacity:0}}
            animate={{opacity:1}}    
        >
            <motion.div className="background__modal"
                initial={animationModal ? {scaleX:0} : {scaleX:1}}
                animate={animationModal ? {scaleX:1} : {scaleX:0}}
                transition={{duration:0.4}}
            >
                <Button
                    axle="x"
                    negative="45%"
                    onClick={()=>navigate("/home/portifolio")}
                    mediaQuerry="620px"
                    maxWidth
                    positionChildren="left"
                    radius="large"
                    duration={0.70}
                >
                    PORTIFOLIO
                </Button>
                <Button
                    axle="x"
                    negative="50%"
                    onClick={()=>navigate("/home/resume")}
                    mediaQuerry="620px"
                    maxWidth
                    positionChildren="left"
                    radius="large"
                    duration={0.80}
                >
                    RESUMO
                </Button>
                <Button
                    axle="x"
                    negative="55%"
                    onClick={()=>navigate("/home/sobre")}
                    mediaQuerry="620px"
                    maxWidth
                    positionChildren="left"
                    radius="large"
                    duration={0.90}
                >
                    SOBRE
                </Button>
                <Button
                    axle="x"
                    negative="60%"
                    onClick={()=>navigate("/home/contato")}
                    mediaQuerry="620px"
                    maxWidth
                    positionChildren="left"
                    radius="large"
                    duration={1}
                >
                    CONTATO
                </Button>
            </motion.div>
        </Styled>
    )
}

export default Modal