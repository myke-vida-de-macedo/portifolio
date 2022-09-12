import { Styled } from "./style"
import { motion } from "framer-motion"
import { useModal } from "../../../../Provider/Modal"

const Modal = () => {

    const { animationModal } = useModal()

    return(
        <Styled
            initial={{opacity:0}}
            animate={{opacity:1}}    
        >
            <motion.div className="modal"
                initial={animationModal ? {scaleX:0} : {scaleX:1}}
                animate={animationModal ? {scaleX:1} : {scaleX:0}}
                transition={{duration:0.4}}
            >

            </motion.div>
        </Styled>
    )
}

export default Modal