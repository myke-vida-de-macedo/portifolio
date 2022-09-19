import { Styled } from "./style"
import { motion } from "framer-motion"
import { useModal } from "../../../../Provider/Modal"
import Button from "../Button"

import { useNavigate } from "react-router-dom"

import { useTranslation } from "react-i18next"

const Modal = () => {

    const { t } = useTranslation()

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
                    {t("headerButtonPortfolio")}
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
                    {t("headerButtonResume")}
                </Button>
                <Button
                    axle="x"
                    negative="55%"
                    onClick={()=>navigate("/home/about")}
                    mediaQuerry="620px"
                    maxWidth
                    positionChildren="left"
                    radius="large"
                    duration={0.90}
                >
                    {t("headerButtonAbout")}
                </Button>
                <Button
                    axle="x"
                    negative="60%"
                    onClick={()=>navigate("/home/contact")}
                    mediaQuerry="620px"
                    maxWidth
                    positionChildren="left"
                    radius="large"
                    duration={1}
                >
                    {t("headerButtonContact")}
                </Button>
            </motion.div>
        </Styled>
    )
}

export default Modal