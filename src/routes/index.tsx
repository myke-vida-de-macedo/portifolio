import { Routes, Route, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion" 

import Home from "../pages/Home"
import About from "../pages/About"

const Routers = () => (

    <AnimatePresence>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/portifolio" element={<Home/>}/>
            <Route path="/home/resume" element={<Home/>}/>
            <Route path="/home/about" element={<About/>}/>
            <Route path="/home/contact" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    </AnimatePresence>

)

export default Routers