import Block from "../../components/Block"
import Header from "../../components/Header"
import List from "./components/List"
import { Styled } from "./style"

const Portifolio = () => {

    const data = [
        {   
            name:"KenzieHub", 
            level:"React",
            image:"../assets/KenzieHub.png", 
            gitHub:"https://github.com/myke-vida-de-macedo/KenzieHub", 
            vercel:"https://react-typescript-kenzie-hub-part-3.vercel.app" 
        },
        { 
            name:"NuKenzie", 
            level:"React",
            image:"../assets/NuKenzie.png", 
            gitHub:"https://github.com/myke-vida-de-macedo/NuKenzie", 
            vercel:"https://react-entrega-s1-nu-kenzie-anonymus-dark.vercel.app/" 
        },
        { 
            name:"KenzieBurguer", 
            level:"React",
            image:"../assets/BurguerKenzie.png", 
            gitHub:"https://github.com/myke-vida-de-macedo/KenzieBurguer", 
            vercel:"https://hamburgueria-kenzie-one-nu.vercel.app/" 
        },
        { 
            name:"KenzieHabits", 
            level:"Javascript Native",
            info:{
                email:"myke#gmail.com",
                password:"123456"
            },
            image:"../assets/KenzieHabits.png", 
            gitHub:"https://github.com/myke-vida-de-macedo/KenzieHabits", 
            vercel:"" 
        },
        { 
            name:"KenzieLivre", 
            level:"React",
            image:"../assets/KenzieLivre.png", 
            gitHub:"https://github.com/myke-vida-de-macedo/KenzieLIvre", 
            vercel:"https://kenzie-livre.vercel.app/" 
        },  
        { 
            name:"CloudGames", 
            level:"Javascript Native",
            image:"../assets/CloudGames.png", 
            gitHub:"https://github.com/myke-vida-de-macedo/CloudGames", 
            vercel:"https://cloud-games.vercel.app/" 
        },
        { 
            name:"StarWarsFigures", 
            level:"Javascript Native",
            image:"../assets/ActionStarWars.png", 
            gitHub:"https://github.com/myke-vida-de-macedo/StarWarsFigures", 
            vercel:"https://star-wars-figures-amber.vercel.app" 
        },  
        { 
            name:"Weartake", 
            level:"Javascript Native",
            image:"../assets/Weartake.png", 
            gitHub:"https://github.com/myke-vida-de-macedo/E-commerce", 
            vercel:"https://weartake-two.vercel.app" 
        },  
    ]

    return(
        <Styled>
            <Header/>
            <Block> 
                <List arrayObj={data}/>
            </Block>
        </Styled>
    )
}

export default Portifolio