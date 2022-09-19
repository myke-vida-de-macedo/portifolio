import { Styled } from "./style"

interface IPropsTitle {
    percentage:number;
}

const ProgressBar = ( { percentage }:IPropsTitle ) => {

    return(
        <Styled percentage={percentage}>
            <div className="progressBar__bar">

            </div>
        </Styled>
    )
}

export default ProgressBar