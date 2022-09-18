import { useTransform, useViewportScroll } from "framer-motion"
import { Figure } from "./style"

const Initial = () => {

    const { scrollYProgress } = useViewportScroll()

    const teste = useTransform( scrollYProgress, [0, 0.216], ["0%", "-20%"] )

    return(
        <Figure
            style={{
           
            }}
        >
            <img src="https://ca.slack-edge.com/TQZR39SET-U037Q746MQF-5221ec32773d-512" alt="" />
        </Figure>
   
    )
}

export default Initial