import { Styled } from "./style"
import Button from "../Button"

interface IPropsNav {
    firstOnClick:React.MouseEventHandler<HTMLButtonElement>
    secondOnClick:React.MouseEventHandler<HTMLButtonElement>
    firstName:string;
    secondName:string;
    firstAxle: "x" | "y";
    secondAxle: "x" | "y";
    firstNegative: string;
    secondNegative: string;
}

const Nav = ( { firstOnClick, secondOnClick, firstName, secondName, firstAxle, secondAxle, firstNegative, secondNegative }:IPropsNav ) => {
    return(
        <Styled>
            <Button 
                axle={firstAxle}
                negative={firstNegative}
                onClick={firstOnClick}
                duration={0.5}
            >
                { firstName }
            </Button>
            <Button 
                axle={secondAxle}
                negative={secondNegative}
                onClick={secondOnClick}
                duration={0.5}
            >
                { secondName }
            </Button>
        </Styled>
    )
}

export default Nav