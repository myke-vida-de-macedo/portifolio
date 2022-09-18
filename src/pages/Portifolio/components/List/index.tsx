import Card from "../Card";
import { Styled } from "./style"

interface IPropsList {
    arrayObj:IProject[];
}

export interface IProject {
    name:string;
    image:string;
    gitHub:string;
    info?:IInfo;
    vercel:string;
    level:string;
}

interface IInfo {
    email:string;
    password:string;
}

const List = ( { arrayObj }:IPropsList ) => {

    return(
        <Styled>
            {
                arrayObj.map(( obj )=><Card Project={obj}/>)
            }
        </Styled>
    )
}

export default List