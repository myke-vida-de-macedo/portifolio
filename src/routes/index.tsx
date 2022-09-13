import { Routes, Route, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion" 

import Home from "../pages/Home"

const Routers = () => (

    <AnimatePresence>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/portifolio" element={<Home/>}/>
            <Route path="/home/resume" element={<Home/>}/>
            <Route path="/home/sobre" element={<Home/>}/>
            <Route path="/home/contato" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    </AnimatePresence>

)

export default Routers