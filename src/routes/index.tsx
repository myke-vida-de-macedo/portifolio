import { Routes, Route, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion" 

import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Portifolio from "../pages/Portifolio"
import Resume from "../pages/Resume"
import Thank from "../pages/Thank"
import CV from "../pages/CV"

const Routers = () => (

    <AnimatePresence>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/portifolio" element={<Portifolio/>}/>
            <Route path="/home/resume" element={<Resume/>}/>
            <Route path="/home/about" element={<About/>}/>
            <Route path="/home/contact" element={<Contact/>}/>
            <Route path="/home/contact/thank" element={<Thank/>}/>
            <Route path="/home/resume/cv" element={<CV/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    </AnimatePresence>

)

export default Routers