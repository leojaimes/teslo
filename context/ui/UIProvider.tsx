import { FC, useReducer } from 'react'
import { UIContext, UIReducer } from './'

export interface UIState {
    isMenuOpen: boolean
}


const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,

}

interface Props {
    children: JSX.Element | JSX.Element[] | undefined
}



export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)


    return (
        <UIContext.Provider value={{
            ...state
        }}>
            {children}
        </UIContext.Provider>
    )
}
