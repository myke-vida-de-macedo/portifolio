import { createContext, ReactNode, useContext, useState } from "react"

interface IPropsModalProvider {
    children:ReactNode
}

interface IPropsModalContext {
    leaveModal:boolean;
    animationModal:boolean;
    openOrClose:() => void;
    closeModalInitial:() => void;
}

const ModalContext = createContext<IPropsModalContext>({} as IPropsModalContext)

export const ModalProvider = ( { children }:IPropsModalProvider ) => {

    const [ leaveModal, setLeaveModal ] = useState<boolean>(false)
    const [ animationModal, setAnimationModal ] = useState<boolean>(false)

    const openOrClose = () => {
        
        if( !leaveModal){
            setAnimationModal(true)
            setLeaveModal(true)
        }else{
            setAnimationModal(false)
            setTimeout(()=>{ setLeaveModal(false) },400)
        }
    }

    const closeModalInitial = () => {

        if( leaveModal && animationModal ){
            
            setLeaveModal(false)
            setAnimationModal(false)
        }
    }

    return(
        <ModalContext.Provider value={{
            leaveModal,
            animationModal,
            openOrClose,
            closeModalInitial
        }}>
            { children }
        </ModalContext.Provider>
    )
} 

export const useModal = () => useContext(ModalContext)

