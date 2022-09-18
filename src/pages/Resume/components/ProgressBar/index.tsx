import { Styled } from "./style"

interface IPropsProgressBar {
    percentage:number;
    margin?:string;
}

const ProgressBar = ( { percentage, margin }:IPropsProgressBar ) => {
    return(
        <Styled percentage={percentage} margin={margin}>
          <p className="progressBar__bar"></p>
        </Styled>
    )
}

export default ProgressBar