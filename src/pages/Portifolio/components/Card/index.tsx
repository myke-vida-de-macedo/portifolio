import { AiFillGithub } from 'react-icons/ai';
import { TbBrandVercel } from 'react-icons/tb';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { Styled, View, Link, Info } from "./style"
import { IProject } from "../List"
import { useState } from "react"


interface IPropsCard {
    Project:IProject
}


const Card = ( { Project:{ image, vercel, gitHub, name, info } }:IPropsCard ) => {  

    const [ hover, setHover ] = useState(false)
    const [ hoverInfo, setHoverInfo ] = useState(false)

    return(
        <Styled 
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <img src={image} alt="" />
            <View
                style={
                    hover ? {
                        opacity: 1,
                    }:
                    {
                        opacity: 0,
                    }
                }    
            >
                <h2 className='view__title'>{name}</h2>
                <div className='view__organization'>
                    <Link href={vercel} target="_blank">
                        <TbBrandVercel/>
                    </Link>
                    <Link href={gitHub} target="_blank">
                        <AiFillGithub/>
                    </Link>
                    {info&&<Link 
                        onMouseEnter={()=>setHoverInfo(true)}
                        onMouseLeave={()=>setHoverInfo(false)}
                    >
                        <AiOutlineInfoCircle/>
                        {hoverInfo&&<Info
                            style={
                                hoverInfo ? {
                                    opacity: 1,
                                }:
                                {
                                    opacity: 0,
                                }
                            }  
                        >
                            <p>Email: {info.email}</p>
                            <p>Senha: {info.password}</p>
                        </Info>}
                    </Link>}
                </div>
            </View>
        </Styled>
    )
}

export default Card